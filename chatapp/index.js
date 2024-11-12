import express from "express";
import {Server} from "socket.io";
import cors from "cors";
import jwt from "jsonwebtoken"; 
import cookieParser from "cookie-parser";
import { createServer } from "http";

const secretJWT= "asjdfhbedco";
const port=3000;

const app = express();
const server = createServer();

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
    },
});

app.get(
    "/",(req,res)=>{
        res.send("Hello this is my chat application");
    }
);
app.get("/login",(req,res)=>{
    const token = jwt.sign({_id:"akdfhjakosd"},
        res.cookie("token",token,{httpOnly:true,secure:true})
        .json({
            message:"Login successful"
        })
    )
})

io.use((socket,next)=>{
    cookieParser()(socket.request,socket.request.res,(err)=>{
        if(err)return next(err);
        const token=socket.request.cookies.token;
        if(!token)return next(new Error("Authentication failed or Err"));
        const decoded = jwt.verify(token,secretJWT);
    })
})

io.on("connection",(socket)=>{
    console.log("User connected",socket.id);
    socket.on("message",({room, message})=>{
        console.log({})
    })
})

