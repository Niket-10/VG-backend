import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudanary = async (localFilePath) => {
        try {
            if(!localFilePath) return null
            const respose = await cloudinary.uploader.upload(localFilePath, {
                resource_type: 'auto'
            })
            console.log("File is uploaded on cloudinary", respose.url);
            return response;
        }
        catch(error) {
            fs.unlinkSync(localFilePath) //remove from local server which was temperarily stored
            return null;
        }
    }

    export {uploadOnCloudanary}