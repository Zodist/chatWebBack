const MongoClient = require('mongodb');
const multer = require('multer');
module.exports.getFile = (req, res) => {
    //Accepting user input directly is very insecure and should      
    //never be allowed in a production app.  
    //Sanitize the input before accepting it  
    //This is for demonstration purposes only  

    let fileName = req.body.fileName;

    const url = "mongodb://localhost:27017/zodist_files_db"
    const dbName = "zodist_files_db"
    //Connect to the MongoDB client

    MongoClient.connect(url, function (err, client) {
        if (err) {
            return res.render('index',
                {
                    title: 'Uploaded Error',
                    message: 'MongoClient Connection error', error: err.errMsg
                });
        }
        const db = client.db(dbName);
        const collection = db.collection('photos.files');
        const collectionChunks = db.collection('photos.chunks');
        collection.find({ filename: fileName }).toArray(function (err, docs) {
            if (err) {
                return res.render('index', {
                    title: 'File error',
                    message: 'Error finding file',
                    error: err.errMsg
                });
            }
            if (!docs || docs.length === 0) {
                return res.render('index', {
                    title: 'Download Error',
                    message: 'No file found'
                });
            } else {

                //Retrieving the chunks from the db          
                collectionChunks.find({ files_id: docs[0]._id })
                    .sort({ n: 1 }).toArray(function (err, chunks) {
                        if (err) {
                            return res.render('index', {
                                title: 'Download Error',
                                message: 'Error retrieving chunks',
                                error: err.errmsg
                            });
                        }
                        if (!chunks || chunks.length === 0) {
                            //No data found            
                            return res.render('index', {
                                title: 'Download Error',
                                message: 'No data found'
                            });
                        }

                        let fileData = [];
                        for (let i = 0; i < chunks.length; i++) {
                            //This is in Binary JSON or BSON format, which is stored               
                            //in fileData array in base64 endocoded string format               

                            fileData.push(chunks[i].data.toString('base64'));
                        }

                        //Display the chunks using the data URI format          
                        let finalFile = 'data:' + docs[0].contentType + ';base64,'
                            + fileData.join('');
                        // console.log("finalFile", finalFile)
                        res.finalFile = finalFile
                        return res.send(finalFile);
                        // return Promise.resolve(finalFile)
                        // res.status(200).json({ finalFile: finalFile });
                        // res.render('imageView', {
                        //     title: 'Image File',
                        //     message: 'Image loaded from MongoDB GridFS',
                        //     imgurl: finalFile
                        // });
                    });
            }
        });
    });
};