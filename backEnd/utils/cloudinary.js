import { v2 as cloudinary } from 'cloudinary'
const fs = require("fs")



// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadOnCLoudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        //file upload on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })

        //file has been  uploaded
        console.log("file is uploaded on cloudinary", response.url);
        return response;

    }
    catch (error) {
        console.log("error while uploading file on cloudinary", error);
        fs.unlinkSync(localFilePath) //for removing local temp file

        return null;

    }
}

export { uploadOnCLoudinary }