import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://myvillage-057l.onrender.com/api/auth/login', formData);
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-indigo-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;