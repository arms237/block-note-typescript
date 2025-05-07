import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Notes from './pages/Notes';
import Archives from './pages/Archives';
import { NoteProvider } from './context/NoteContext';

const NotFound: React.FC = () => (
  <div>
    <h1>404 - Page non trouvée</h1>
  </div>
);

const App = () => {
  return (
    <NoteProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/notes' element={<Notes/>}/>
          <Route path='/archives' element={<Archives/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
};

export default App;