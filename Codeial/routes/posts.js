const express = require('express');
const router = express.Router();
const passport = require('passport');

const post_Controller = require('../controllers/post_controller');

router.post('/create', passport.checkAuthentication ,post_Controller.create);
router.get('/destroy/:id',passport.checkAuthentication,post_Controller.destroy);
module.exports = router;