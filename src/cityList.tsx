import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

interface City {
  id: number;
  cityName: string;
  countryName: string;
  timeZone: string;
}

const CityList: React.FC<RouteComponentProps<any>> = ({ history }) => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:3001/cities').then((response) => {
      setCities(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = cities.filter((city) =>
      city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  }, [cities, searchTerm]);

  const handleCityClick = (cityId: number) => {
    history.push(`/city/${cityId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country Name</th>
            <th>Time Zone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city) => (
            <tr key={city.id} onClick={() => handleCityClick(city.id)} style={{ cursor: 'pointer' }}>
              <td>{city.cityName}</td>
              <td>{city.countryName}</td>
              <td>{city.timeZone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CityList;
