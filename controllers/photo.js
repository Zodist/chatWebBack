const MongoClient = require('mongodb');

const getList = async (req, res) => {
  const url = "mongodb://localhost:27017/zodist_files_db"
  const dbName = "zodist_files_db"
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
    // const collectionChunks = db.collection('photos.chunks');
    collection.find({}).toArray(function (err, docs) {
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
        // console.log(docs);
        res.send(docs);
      }
    });
  });
};

module.exports = {
  getList: getList
};