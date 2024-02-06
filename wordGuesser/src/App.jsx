import { useState, createContext } from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import KeyBoard from './components/KeyBoard/KeyBoard';

export const AppContext = createContext();

export default function App() {
  const emptyGrid = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];
  const [grid, setGrid] = useState(emptyGrid);

  return (
    <>
      <AppContext.Provider value={{ grid, setGrid }}>
        <Header />
        <Grid />
        <KeyBoard />
      </AppContext.Provider>
    </>
  );
}
