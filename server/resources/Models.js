
var Sequelize = require("sequelize");
var mysqlConfig = {
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
}

const sequelize = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.user,
  mysqlConfig.password,
  {
    host: process.env.HOST,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

const Listing = sequelize.define('images', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    image1Url: Sequelize.STRING,
    image2Url: Sequelize.STRING,
    image3Url: Sequelize.STRING,
    image4Url: Sequelize.STRING,
    image5Url: Sequelize.STRING,
    image6Url: Sequelize.STRING,
    videoUrl: Sequelize.STRING
});

module.exports = Listing;