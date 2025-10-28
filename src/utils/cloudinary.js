import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilepath) => {
    try {
        if(!localFilepath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file uploaded on cloudinary successfully:", response.secure_url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilepath) 
        //remove the file from local storage if any error occurs
        return null;
    }
}

export {uploadCloudinary};