import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: '',
    qualification: '',
    branch: '',
    employmentStatus: '',
  });

  const qualifications = [
    'Below 10th', '10th Pass', 'Intermediate', 'TTC', 'ITI', 'ITI+Apprenticeship',
    'Diploma', 'B.Tech', 'B.Sc', 'B.Com', 'B.Ed', 'Other Degree', 'MA', 'M.Com', 'M.Tech'
  ];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://myvillage-057l.onrender.com/api/profiles', formData);
      alert('Profile submitted successfully!');
      setFormData({
        name: '',
        dob: '',
        email: '',
        phone: '',
        qualification: '',
        branch: '',
        employmentStatus: '',
      });
      navigate('/dashboard');
    } catch (err) {
      alert('Error submitting profile');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Welcome to Mana Chinnabondapalli
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community to share your details and connect with job opportunities!
          </p>
        </div>

        {/* Form and Description Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Description Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6 lg:p-8 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center lg:text-left">
              About Our Mission
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Mana Chinnabondapalli is a simple app for the youth of Chinnabondapalli village to share their details like name, date of birth, education, and job status. It helps us understand who is unemployed and connect them to job opportunities through village alumni. The app is easy to use and designed for young people. Admins can view and filter data to plan job references.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              మన చిన్నబొందపల్లి అనేది చిన్నబొందపల్లి గ్రామ యువత కోసం ఒక సరళమైన యాప్, ఇక్కడ వారు తమ పేరు, పుట్టిన తేదీ, విద్య, మరియు ఉద్యోగ స్థితిని పంచుకోవచ్చు. ఇది ఉద్యోగం లేని వారిని గుర్తించి, గ్రామ పూర్వ విద్యార్థుల ద్వారా ఉద్యోగ అవకాశాలను అందించడానికి సహాయపడుతుంది. ఈ యాప్ ఉపయోగించడానికి సులభం మరియు యువత కోసం రూపొందించబడింది. అడ్మిన్‌లు డేటాను చూసి, ఫిల్టర్ చేసి, ఉద్యోగ రిఫరెన్స్‌లను ప్లాన్ చేయవచ్చు.
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md p-6 lg:p-8 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
              Share Your Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Qualification</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  required
                >
                  <option value="">Select Qualification</option>
                  {qualifications.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Branch</label>
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="e.g., CSE, Commerce"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1">Employment Status</label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus} // Fixed: Changed from filters to formData
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Employed">Employed</option>
                  <option value="Unemployed">Unemployed</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;