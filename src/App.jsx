import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';

const API_BASE = 'https://dummyjson.com/users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUsers = async (query = '') => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}${query}`);
      const data = await res.json();
      setUsers(data.users);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch all users initially
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchUsers(`/search?q=${searchQuery}`); // Search with the query
  };

  return (
    <div className="app-container">
      <header>
        <h1>User Directory</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main className="user-card-grid">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <UserData users={users} />
        )}
      </main>
    </div>
  );
};

export default App;



