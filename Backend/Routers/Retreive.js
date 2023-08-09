const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  

const upload = multer({ storage });


router.get('/video/:filename', (req, res) => {
    const { filename } = req.params;
    const videoPath = path.join(__dirname, 'uploads', filename);
    res.sendFile(videoPath);
});


module.exports = router;
