var  Db = require('./dboperations');
var  CUSTOMER = require('./customerinfo');
var  REQUEST = require('./request');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('CHECKED !!!');
    next();
});

router.route('/customer').get((request, response) => {
    Db.getCustomers().then((data) => {
      response.json(data[0]);
    })
})

router.route('/customer/:id').get((request, response) => {
    Db.getCustomer(request.params.id).then((data) => {
      response.json(data[0]);
    })
})

router.route('/customer').post((request, response) => {
    let  customer = { ...request.body }
    Db.addCustomer(customer).then(data  => {
      response.status(201).json(data);
    })
})

router.route('/request').get((request, response) => {
  Db.getRequests().then((data) => {
    response.json(data[0]);
  })
})

router.route('/request/:id').get((request, response) => {
  Db.getRequest(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/request').post((request, response) => {
  let  requests = { ...request.body }
  Db.addRequest(requests).then(data  => {
    response.status(201).json(data);
  })
})

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('API is runnning at ' + port);