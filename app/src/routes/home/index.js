"use strict";

const express = require("express");

const router = express.Router();

//외부에서 가져오는 명령어
const ctrl = require("./ctrl");

router.get("/",ctrl.hello);

router.get("/login",ctrl.login);

module.exports = router;