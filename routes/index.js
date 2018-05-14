const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

// Do work here
router.get('/', jobPostController.homePage);
router.get('/job-post', jobPostController.jobPost);

module.exports = router;
