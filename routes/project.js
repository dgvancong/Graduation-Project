const express = require("express");
var db = require('./dbConnect');
const router = express.Router();

// Lấy danh sách dự án
router.get('/', function(req, res) {
    const query = `
      SELECT project.*, projectDetails.*,
       user.fullName AS leadFullName ,
       user.picture AS imgUser ,
      team.teamName AS teamFullName
      FROM project
      LEFT JOIN projectDetails ON project.projectID = projectDetails.projectID
      LEFT JOIN Users AS user ON projectDetails.userID = user.userID
      LEFT JOIN Team AS team ON projectDetails.teamID = team.teamID
    `;
    db.query(query, function(err, result) {
        if (err) {
            console.error(err);
            res.status(500).send("Lỗi Server Nội Bộ");
        } else {
            res.status(200).json(result);
        }
    });
  });


  var path = require('path');
  module.exports = router;
