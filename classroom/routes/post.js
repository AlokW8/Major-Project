const express = require("express");
const router = express.Router();

//Index-Users
router.get("/posts", (req,res) => {
    res.send("GET for posts");
});

//Show-Users
router.get("/posts/:id", (req,res) => {
    res.send("GET for posts id");
});

//Post-Users
router.post("/posts", (req,res) => {
    res.send("POST for posts");
});

//DELETE-Users
router.delete("/:id", (req,res) => {
    res.send("DELETE for posts id");
});

module.exports = router;