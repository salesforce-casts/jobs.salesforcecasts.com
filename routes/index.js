const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', jobPostController.homePage);
router.get('/job-post', jobPostController.jobPost);
router.post('/create_job_post', catchErrors(jobPostController.createJobPost));

module.exports = router;
