// const express = require('express');
// const router = express.Router();
// const deviceControllerModule=require('../controllers/devices-controller')
// router.get('/all',deviceControllerModule.getAlldevices);
// module.exports = router ;

const express = require('express');
const router = express.Router();
const deviceControllerModule = require('../controllers/devices-controller');

router.get('/all', deviceControllerModule.getAlldevices);

module.exports = router; // Ensure you are exporting the router correctly
