const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const jobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: 'Please enter a Job Title'
    },
    description: {
        type: String,
        trim: true,
        required: 'Please describe the Job'
    },
    responsibilities: {
        type: String,
        trim: true
    },
    salary: {
        type: Number,
        required: 'Please specify the Salary'
    },
    applyUrl: {
        type: String,
        required: 'Please specify the URL where the user can apply'
    },
    companyName: {
        type: String,
        required: 'Please mention the Company Name'
    },
    jobLocation: {
        type: String,
        require: 'Please specify the location'
    },
    slug: String

});

jobPostSchema.pre('save', function(next){
    if(!this.isModified('title')){
        next();
        return;
    }
    this.slug = slug(this.title);
    next();
});

module.exports = mongoose.model('JobPost', jobPostSchema);