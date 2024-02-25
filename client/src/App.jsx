import React from 'react';
import DataDisplay from './components/DataDisplay';
import FilterForm from './components/FilterForm';


function App() {
  return (
    <div className="app">
      <h1>My Ninja API Project</h1>
      <FilterForm />
      <DataDisplay />
    </div>
  );
}

export default App;
