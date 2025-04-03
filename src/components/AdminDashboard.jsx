import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('http://localhost:5000/admin', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        setData('Access Denied');
        navigate('/login'); // Redirect to login page
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>{data}</p>
    </div>
  );
};

export default AdminDashboard;