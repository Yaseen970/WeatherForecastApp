import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityList from './cityList';
import CityDetails from './cityDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
