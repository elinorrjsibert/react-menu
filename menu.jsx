import React, { useState } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('home');

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => changeTab('home')}
        >
          Home
        </div>
        <div
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => changeTab('about')}
        >
          About
        </div>
        <div
          className={`tab ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => changeTab('services')}
        >
          Services
        </div>
        <div
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => changeTab('contact')}
        >
          Contact
        </div>
      </div>
      <div className="content">
        {activeTab === 'home' && <p>Welcome to the Home Page!</p>}
        {activeTab === 'about' && <p>Learn more about us on the About Page.</p>}
        {activeTab === 'services' && <p>Explore our Services on this page.</p>}
        {activeTab === 'contact' && <p>Contact us on the Contact Page.</p>}
      </div>
    </div>
  );
};

export default Menu;
