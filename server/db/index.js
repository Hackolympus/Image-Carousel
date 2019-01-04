var mysql = require('mysql');
var mysqlConfig = {
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
}
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

    corgiObj.image5Url = corgiPic5
    corgiObj.image6Url = corgiPic6
  }

  // if (random >= 0.9) {
    var corgiVid = data.videosOfCorgis[Math.floor(Math.random()*data.videosOfCorgis.length)];
  //  need a thumbnail isntead of a video for the video!!
    corgiObj.videoUrl = corgiVid
  // }
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
  } //seeder see below
});

module.exports = connection;


// var Listing = require('./resources/Models.js');

// var insertCorgi = function(testData, index) {
//     let newCorgi = {
//         id: index,
//         image1Url: testData.image1Url,
//         image2Url: testData.image2Url,
//         image3Url: testData.image3Url,
//         image4Url: testData.image4Url,
//         image5Url: testData.image5Url,
//         image6Url: testData.image6Url,
//         videoUrl: testData.videoUrl
//     };

//     var upsert = function (values, condition) {
//         return Listing
//             .findOne({ where: condition })
//             .then((obj) => {
//                 if(obj) { // update
//                     return obj.update(values);
//                 }
//                 else { // insert
//                     return Listing.create(values);
//                 }
//             }
//         )
//       };

//     upsert(newCorgi, {id: index});
// };
  
// module.exports = insertCorgi;