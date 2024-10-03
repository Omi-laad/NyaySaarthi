import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })


        //File upload sucess
        console.log("File is uploaded on cloudinary");

    }
    catch (err) {
        fs.unlinkSync(localFilePath) //file removal in local temp
        return null;
    }
}

export { uploadOnCloudinary }