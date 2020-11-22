const db = require('../config/db');
const express = require('express');

exports.submit = async (req, res) =>{
    try {
        const body = req.body;
        if(!body.firstName){
            return res.status(200).send({error:"First Name Required."});
        }
        if(!body.lastName){
            return res.status(200).send({error:"Last Name Required."});
        }
        if(!body.address){
            return res.status(200).send({error:"Address Required."});
        }
        
        const user = await db.query(`INSERT INTO users (first_name,last_name,address) VALUES (?,?,?)`,
        [body.firstName, body.lastName, body.address]);
                    return res.status(200).send({done:true,message:"Successfully Added"});
    } catch (error) {
        return res.status(500).send({done:false,message:"error"});
    
    }
}