# Image Carousel Component

This is the image carousel component from the site Jeff's List.

## Table Of Contents

* [Getting Started](#Getting-Started)
* [Installing](#Installing)
* [Deployment](#Deployment)
* [Running the Tests](#Running-the-tests)
  * [Stress Test](#Stress-Test)
  * [Breakdown](#Breakdown)
* [Technologies](#Technologies)
* [Version History](#Version-History)
* [Authors](#Authors)
* [License](#License)

<!-- toc -->

## Getting-Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installing

Make sure the machine you are running the server on has node installed.
The default connection to the server uses localhost at port 9003. You can change this by adding an environment variable called PORT to set the port.

Else comment out the first line in server/server.js (require("newrelic"))

In the directory of the repo:

```
npm install
npm run build
(optional) npm run set-port (only works for linux machines to forward the default port 80 to direct to port 9003)
```

## Deployment

Performance will increase if you host your database on at least one seperate machine from your service.
Make sure your RDS has mongodb installed.
The default connection to the database uses the root user as well as no password at the localhost:27017.
You may manipulate these variables by adding the following environment variables with substituted values:

```
DB_HOST="Database Url"
DB_USER="Database User"
DB_PASS="Database Password"
DB_NAME="Database Name"
```

You can also optionally spin up docker containers on your service hosts. Adjust the above environment variables in Dockerfile first.

## Running-the-tests

### Stress-Test

newRelic will be added in the future.

### Breakdown

To run the jest tests use 'npm run test' which are located in the test folder.

```
'npm run test'
Tests are run using jest. Currently under work, testing will be added soon.
```

## Technologies

* Node
* React
* React-DOM
* React-Columns
* MySQL
* Axios
* Express
* Webpack
* Path
* Jest
* Babel
* Webpack
* Nodemon
* Cors
* Body-parser
* Morgan
* Compression
* Docker
* NewRelic
* AWS
* Faker

## Version-History

* 1.0
  * Current Working Build
  * See [commit change](https://github.com/Hackolympus/Image-Carousel-Component/commit/d37d094328b2be942ccf4e7dfbfd2d64cd60bc9d)
 * 0.0
  * Skeleton Build
  * See [commit change](https://github.com/Hackolympus/Image-Carousel-Component/commit/1aa4a9930904c079e49ee722c6bafaa9d44b5c38)

## Authors

* **Jonathan Raitses** - [Jonathan-Raitses](https://github.com/jonathan-raitses)

See also the list of [contributors](https://github.com/Cherry-OnTop/Critics/graphs/contributors) who participated in this project.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
