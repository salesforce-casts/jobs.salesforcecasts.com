const mongoose = require('mongoose');
const JobPost = mongoose.model('JobPost');

exports.homePage = (req,res) => {
    res.render('index');
};

exports.jobPost = (req, res) => {
    res.render('jobPost/editJobPost', { title: 'Post a new Job' });
};

exports.createJobPost = async (req,res) => {
    const jobPost = new JobPost(req.body);
    await jobPost.save();
    req.flash('success', `${jobPost.title} is created successfully !!`);
    res.redirect(`/job/${jobPost.slug}`);
}