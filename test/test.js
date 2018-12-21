var chai = require("chai");
var Sequelize = require("sequelize");
var expect = chai.expect;
var request = require("supertest");
var app = require("../server/server.js");
var Listing = require("../server/resources/Models.js");

chai.use(require("chai-things"));


describe('Listing Model', function () {
    //will write tests here using expect
});

describe('API routes', function () {
    //will write tests here using expect
});

//I am prioritizing my video over my testing right now. I plan to write a few 
//unit tests here that will check to make sure that my api routing is 
//working and that a new listing that is created can be pulled from the database
//among other tests that check the functionality and use value of every
//"unit" that wroks in my program.