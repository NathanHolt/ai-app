import { Routes, Route } from 'react-router-dom'
import { HomePage, TextPage, SearchPage, CreatePage } from './pages';
import { NavBar } from './components';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
