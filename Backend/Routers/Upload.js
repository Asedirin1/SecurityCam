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


router.post('/upload-video', upload.single('video'), (req, res) => {
    res.json({ message: 'Video uploaded successfully' });
  });


module.exports = router;
