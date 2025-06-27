const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  qualification: {
    type: String,
    enum: [
      'Below 10th',
      '10th Pass',
      'Intermediate',
      'TTC',
      'ITI',
      'ITI+Apprenticeship',
      'Diploma',
      'B.Tech',
      'B.Sc',
      'B.Com',
      'B.Ed',
      'Other Degree',
      'MA',
      'M.Com',
      'M.Tech',
    ],
    required: true,
  },
  branch: { type: String, required: true }, // e.g., CSE, Mechanical, Commerce
  employmentStatus: {
    type: String,
    enum: ['Employed', 'Unemployed'],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserProfile', userProfileSchema);