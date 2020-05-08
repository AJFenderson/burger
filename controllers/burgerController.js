var express = require("express");

var router = express.Router();

var orm = require("../config/orm.js");

//create
router.post("/api/burger", function(req, res) {
  const burger_name = req.body.burger_name;
  orm.insertOne(burger_name, function(data) {
      res.json(data);
  });
});


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
