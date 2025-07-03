import{Router} from "express";

const ImageRoute=Router();

ImageRoute.get("/test",(req,res)=>{
    res.json("test route")
})

export default ImageRoute;