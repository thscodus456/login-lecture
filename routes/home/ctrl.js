"use strict"

const hello = (req,res)=>{
    res.render("home/index")
}
const login = (req,res)=>{
    res.render("home/login")
 }

//바깥에서  사용할수 잇게해주는 설정 
 module.exports = {
    hello,
    login,
 }
