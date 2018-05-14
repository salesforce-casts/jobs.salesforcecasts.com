exports.homePage = (req,res) => {
    res.render('index');
};

exports.jobPost = (req, res) => {
    res.render('jobPost/editJobPost', { title: 'Add Job Post' });
};