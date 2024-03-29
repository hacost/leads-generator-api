const express = require('express');
const cors = require('cors');
const {apiConfig} = require('./config/config');
const routerApi = require('./routes/router-api');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middleware/error-handler');
const { checkApiKey }  = require('./middleware/auth-handler');
require('./domain/authentication/main');

const app = express();
const whiteList = ['http://127.0.0.1:5500','https://www.facebook.com'];

//use json middleware
app.use(express.json());

// use middleware cors
const options = {
  origin: (origin, callback) =>{
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Unauthorized access...'));
    } 
  }
}
app.use(cors(options));

app.get('/',  (req, res) => {
  res.send('Hello world in express js');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hello new path...');
}); 

//use router api 
routerApi(app);

// use middleware error
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(apiConfig.apiPort, () => {
  console.log('Api running in port: ' + apiConfig.apiPort);
})

