import { format } from "util";
import { Router } from "express";
import { Storage } from "@google-cloud/storage";
import Multer from "multer";

const imgRouter = Router();
const storage = new Storage({keyFilename: 'key.json'});
const bucketName = "eladin_img";

const multer = Multer({
    storage: Multer.memoryStorage(),
      limits: {
        fileSize: 2 * 1024 * 1024, // no larger than 2mb, you can change as needed.
    },
});

imgRouter.post('/', multer.single("file"), (req, res) => {

    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return;
    }
  
    // Create a new blob in the bucket and upload the file data.
    const blob = storage.bucket(bucketName).file(req.file.originalname);
    const blobStream = blob.createWriteStream();
  
    blobStream.on('error', err => {
      next(err);
    });
  
    blobStream.on('finish', () => {
      // The public URL can be used to directly access the file via HTTP.
      const publicUrl = format(
        `https://storage.googleapis.com/${bucketName}/${blob.name}`
      );
      res.status(200).send(publicUrl);
    });
  
    blobStream.end(req.file.buffer);
});
  

export { imgRouter };