import express, { Router } from "express";
import user from '../models/app.js';

const router = express.Router()


router.put('/:id', async (req,res) =>{
    try{
       const putUser = await updateuser.findByIdAndUpdate(req.params.id, req.body, {new: true})
      if (!email) return "email not found";
       res.status(200).json({message: "User information is updated"})
    }
    catch(error){
res.status(500).json({ message: "cannot find by id"})
    }
});

router.delete('/:id', async (req,res) =>{
    try{
const deleteUser = await deleteuser.findByIdAndDelete(req.params.id)
res.status(200).json({message: "User is deleted successfully"})
    }
    catch(error){
        res.status(500).json({ message: "Email not found"})
    }
});
export default Router;