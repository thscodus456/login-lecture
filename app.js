"use strict";

const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");

app.use("/",home) //=>use  미들웨어를 등록해주는 메서드

//앱이라는  것을 내보냄  밖에서 사용할수 있게해주는 명령어 
module.exports = app;