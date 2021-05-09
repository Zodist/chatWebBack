const upload = require("../middlewares/upload");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      // return res.send(`You must select a file.`);
      return res.status(401).json({ error: 'You must select a file.' });
    }

    // return res.send(`File has been uploaded.`);
    return res.status(200).json({ filename: req.file.filename });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: `Error when trying upload image: ${error}` });
  }
};

module.exports = {
  uploadFile: uploadFile
};