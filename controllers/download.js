const download = require("../middlewares/download");

const downloadFile = async (req, res) => {
  try {
    var binary = await download.getFile(req, res);
    // console.log('binary : ', binary)
    // return res.send(binary);

    // console.log(req.file);
    // if (req.file == undefined) {
    //   return res.send(`You must select a file.`);
    // }

    // return res.send(`File has been uploaded.`);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  downloadFile: downloadFile
};