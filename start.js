const strapi = require('strapi')
strapi().start();
const port = process.argv.slice(2)[0]
console.log(" port ", port)
require('../eureka-helper/eureka-helper').registerWithEureka('applicant-service', port)