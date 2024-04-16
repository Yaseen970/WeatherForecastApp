import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface City {
  id: number;
  cityName: string;
  countryName: string;
  population: number;
  // Add more fields as needed
}

const CityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [city, setCity] = useState<City | null>(null);

//   useEffect(() => {
//     axios.get(`https://your-api-endpoint.com/cities/${id}`).then((response) => {
//       setCity(response.data);
//     });
//   }, [id]);

  if (!city) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{city.cityName}</h1>
      <p>Country: {city.countryName}</p>
      <p>Population: {city.population}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CityDetails;
