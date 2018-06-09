const mongoose = require('mongoose');
const JobPost = mongoose.model('JobPost');

exports.homePage = async(req,res) => {

    const jobPosts = await JobPost.find();
    res.render('index', { title: 'Job Posts', jobPosts });
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

exports.editJobPost = async(req,res) => {
    const jobPost = await JobPost.findOne({ _id: req.params.id });
    res.render('jobPost/editJobPost', {title: 'Edit Job Post', jobPost});
}

exports.updateJobPost = async(req,res) => {

    // res.send(req.body);
    const jobPost = await JobPost.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true

    }).exec();
    req.flash('success', `${jobPost.title} updated successfully !!`);
    res.redirect(`/job/${jobPost._id}/edit`);

}