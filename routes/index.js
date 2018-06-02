const express = require('express');
const router = express.Router();
const jobPostController = require('../controllers/jobPostController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(jobPostController.homePage));
router.get('/job-post', authController.isLoggedIn,
                        jobPostController.jobPost);
router.get('/job/:id/edit', catchErrors(jobPostController.editJobPost));

router.post('/create_job_post', catchErrors(jobPostController.createJobPost));
router.post('/create_job_post/:id', catchErrors(jobPostController.updateJobPost));

router.get ('/login', userController.loginForm);
router.post ('/login', authController.login);

router.get ('/register', userController.registerForm);
router.post ('/register', userController.validateRegister,
                          catchErrors(userController.register),
                          authController.login);

router.get ('/account', authController.isLoggedIn,
                        userController.account);
router.post ('/account', authController.isLoggedIn,
                        userController.updateAccount);
router.get ('/logout', authController.logout);

module.exports = router;