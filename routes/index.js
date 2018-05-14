const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(jobPostController.homePage));
router.get('/job-post', jobPostController.jobPost);
router.get('/job/:id/edit', catchErrors(jobPostController.editJobPost));
router.post('/create_job_post', catchErrors(jobPostController.createJobPost));
router.post('/create_job_post/:id', catchErrors(jobPostController.updateJobPost));

module.exports = router;
