import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Books from './components/books';
import About from './components/about';
import Showbook from './components/book';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />}>
            <Route index element={
              <main>
                <p>
                  کتاب مورد نظر خود را انتخواب کنید ....
                </p>
              </main>
            } />
            <Route path=':BookID' element={<Showbook />} />
          </Route>
          <Route path='*' element={
            <div>
              <h4>مسیر یافت نشد !</h4>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
