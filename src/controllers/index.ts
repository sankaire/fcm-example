import {Request, Response} from "express";

export const home = (req:Request, res:Response) =>{
    return res.json({
        message:"Send Push Notification 🙂"
    })
}
