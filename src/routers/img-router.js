import { Router } from "express";
import { Storage } from "@google-cloud/storage";

const imgRouter = Router();
const storage = new Storage({keyFilename: 'key.json'});
const bucketName = "eladin_img";

async function uploadFile(filePath, destFileName) {
    const options = {
      destination: destFileName,    
      // preconditionOpts: {ifGenerationMatch: generationMatchPrecondition},
    };  
    await storage.bucket(bucketName).upload(filePath, options);
    console.log(`${filePath} uploaded to ${bucketName}`);
}

// 1. file 받아오기
// 2. imgUrl 추출 및 return

imgRouter.post('/', async (req, res) => {
    // img 받아올때 req.body에서 어떤형식일지?
    // const req.body.file ?

    const filePath = "bear.jpg"; // 
    const destFileName = 'inputImg.jpg'; // ISBN 으로 설정!

    uploadFile(filePath, destFileName).catch(console.error);

});

export { imgRouter };