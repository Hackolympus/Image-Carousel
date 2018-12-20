var mysql = require('mysql');
var mysqlConfig = require('../config.js').mysqlConfig;
var testData = require('../../data/exampleData.js');
var insertCorgi = require('../seed.js');

var connection = mysql.createConnection(mysqlConfig);


var randomObject = (data) => {
  var random = Math.random();

  var corgiObj = {
    image1Url: data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)]
  }

  if (random >= 0.5) {
    var corgiPic2 = data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)];
    var corgiPic3 = data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)];
    var corgiPic4 = data.picturesOfCorgis[Math.floor(Math.random()*data.picturesOfCorgis.length)];

    corgiObj.image2Url = corgiPic2
    corgiObj.image3Url = corgiPic3
    corgiObj.image4Url = corgiPic4
  } else if (random < 0.5) {
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
    insertCorgi(randomObject(testData));
  } //seeder
});

module.exports = connection;