"use strict";
const app = require("../app");
const port = 3000;


//이명령어 가 있는 경로를 실행시켜줘야 서버가 켜진다.
app.listen(port , () =>{
    console.log("서버 시작")
});