import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './components/Page/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesPage from './components/Page/ArticlesPage.jsx';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/AtheneasGroup" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/article/:id" element={<ArticlesPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;