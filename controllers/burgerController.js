var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

//create


  //read
  router.get("/", function(req, res) {
    orm.selectAll(function(data) {
        console.log(data);
        res.json(data);
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });

  //update

  //delete

  module.exports = router;
