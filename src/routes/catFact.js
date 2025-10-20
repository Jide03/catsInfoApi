

const express = require("express")
const router = express.Router() 
const catFact  = require("../controller/catFact")

router.get('/me', catFact)

module.exports =  router