var Listing = require('./resources/Models.js');

var insertCorgi = function(testData, index) {
    let newCorgi = {
        id: index,
        image1Url: testData.image1Url,
        image2Url: testData.image2Url,
        image3Url: testData.image3Url,
        image4Url: testData.image4Url,
        image5Url: testData.image5Url,
        image6Url: testData.image6Url,
        videoUrl: testData.videoUrl
    };

    var upsert = function (values, condition) {
        return Listing
            .findOne({ where: condition })
            .then((obj) => {
                if(obj) { // update
                    return obj.update(values);
                }
                else { // insert
                    return Listing.create(values);
                }
            }
        )
      };

    upsert(newCorgi, {id: index});
};
  
module.exports = insertCorgi;