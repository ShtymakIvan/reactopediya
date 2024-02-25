import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/DataDisplay.css';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/animals', {
        headers: {
          Authorization: 'Bearer XgyAm06hCYLNdVkpe59gRQ==PR9nmrMdWH1qG2HC'
        }
      });

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="data-container">
      <h1>Data Display</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}, Type: {item.type}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
