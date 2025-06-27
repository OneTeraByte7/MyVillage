import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

function Dashboard() {
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({
    employmentStatus: '',
    qualification: '',
    sort: 'asc',
  });

  const qualifications = [
    'Below 10th', '10th Pass', 'Intermediate', 'TTC', 'ITI', 'ITI+Apprenticeship',
    'Diploma', 'B.Tech', 'B.Sc', 'B.Com', 'B.Ed', 'Other Degree', 'MA', 'M.Com', 'M.Tech'
  ];

  useEffect(() => {
    fetchProfiles();
  }, [filters]);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/profiles', {
        params: filters,
      });
      setProfiles(res.data);
    } catch (err) {
      console.error('Error fetching profiles:', err);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-neutral py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-8 text-center animate-fade-in">
          Chinnabondapalli Youth Dashboard
        </h2>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
            <div className="flex-1">
              <label className="block text-sm font-medium text-text mb-2">Employment Status</label>
              <select
                name="employmentStatus"
                value={filters.employmentStatus}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
              >
                <option value="">All</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-text mb-2">Qualification</label>
              <select
                name="qualification"
                value={filters.qualification}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
              >
                <option value="">All</option>
                {qualifications.map((q) => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-text mb-2">Sort by Name</label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
              >
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.length === 0 ? (
            <p className="text-center text-text text-lg col-span-full animate-fade-in">
              No profiles found. Try adjusting the filters!
            </p>
          ) : (
            profiles.map((profile) => (
              <ProfileCard key={profile._id} profile={profile} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;