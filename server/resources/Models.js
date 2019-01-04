
var Sequelize = require("sequelize");
var mysqlConfig = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DATABASE
}

const sequelize = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.user,
  mysqlConfig.password,
  {
    host: mysqlConfig.host,
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