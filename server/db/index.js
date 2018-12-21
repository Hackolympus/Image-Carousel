var mysql = require('mysql');
var mysqlConfig = require('../config.js').mysqlConfig;
var testData = require('../../data/exampleData.js');
var insertCorgi = require('../seed.js');

var connection = mysql.createConnection(mysqlConfig);


var randomObject = (data) => {
  var random = Math.random();

  var corgiObj = {
    image1Url: data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)],
    image2Url: data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)],
    image3Url: data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)],
    image4Url: data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)]
  }

  if (random >= 0.5) {
    var corgiPic5 = data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)];
    var corgiPic6 = data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)];
    var corgiVid = data.videosOfCorgis[Math.floor(Math.random()*data.videosOfCorgis.length)];

    corgiObj.image5Url = corgiPic5
    corgiObj.image6Url = corgiPic6
    corgiObj.videoUrl = corgiVid
  }
  return corgiObj;
}

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Successfully connected to database.');
  for (let i = 1; i <= 100; i++) {
    insertCorgi(randomObject(testData), i);
  } //seeder
});

module.exports = connection;