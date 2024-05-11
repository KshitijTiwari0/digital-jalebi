import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    fetchUsers(`/search?q=${searchQuery}`);
  };

  useEffect(() => {
    gsap.from('.user-card', {
      scrollTrigger: {
        trigger: '.user-card',
        toggleActions: 'play none none reverse'
      },
      x: -100,
      opacity: 0,
      stagger: 0.2
    });

    if (!loading) {
      gsap.to('.spinner', { autoAlpha: 0, duration: 0.5 });
    }
  }, [loading]);

  return (
    <div className="app-container">
      <header>
        <h1>User Directory</h1>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <form onSubmit={handleSearch} className="search-form">
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
        {loading? (
          <div className="spinner"></div>
        ) : error? (
          <p>Error: {error}</p>
        ) : (
          <UserData users={users} />
        )}
      </main>
    </div>
  );
};

export default App;
