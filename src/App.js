import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/calculator" element={<h1>Calculator</h1>} />
      <Route path="/quote" element={<h1>Quote</h1>} />
    </Routes>
  );
}

export default App;
