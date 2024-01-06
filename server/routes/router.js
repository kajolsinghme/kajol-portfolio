const express = require('express')
const router = express.Router()
const users = require('../models/userSchema')
const nodemailer = require("nodemailer");

//email config

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

//register user details

router.post('/register',async(req,res)=>{
    const {fname, lname, email, mobile, message} = req.body
    console.log(req.body)
    if(!fname|| !lname|| !email|| !mobile){
        res.status(401).json({status:401,error:"Missing required input data"})
    }
    try{
        const preUser = await users.findOne({email:email})
        if(preUser){
            const userMessage = await preUser.Messagesave(message)
            console.log(userMessage)

            const mailOptions = {
                from:process.env.EMAIL,
                to:email,
                subject:"sending email using nodemailer",
                text:"Your Response Has Been Submitted"
            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error" + error)
                }else{
                    console.log('Email Sent' + info.response)
                    res.status(200).json({status:200, error:"Email Sent Successfully"})
                }
            res.status(201).json({status:201, storeData})

            })
    
        }
        else{
            const finalUser = new users({
                fname, lname, email, mobile, message
            })

            const storeData = await finalUser.save()
            console.log('User has been created')

            const mailOptions = {
                from:process.env.EMAIL,
                to:email,
                subject:"sending email using nodemailer",
                text:"Your Response Has Been Submitted"
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error" + error)
                }else{
                    console.log('Email Sent' + info.response)
                    res.status(200).json({status:200, error:"Email Sent Successfully"})
                }
            res.status(201).json({status:201, storeData})

            })
        }
    }catch(error){
        res.status(401).json({status:401,error:"Missing required input data"})
    }
})









module.exports = router