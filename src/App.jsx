import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader/Preloader';
import { getCountries } from './app/slices/countrySlice';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.countries.isLoading);
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__title">Search your country</h1>
      </div>
      <div className="app__content">{isLoading && <Preloader />}</div>
    </div>
  );
}

export default App;
