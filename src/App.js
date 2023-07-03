//import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
  <>
    <div className="container p-rem">
      <ul class="nav">
        <li class="nav-item">
        <Link to="/books" style={{textDecoration:"none"}} className='nav-link active'>لیست کتابها</Link>
        </li>
        <li class="nav-item">
        <Link to="/books" style={{textDecoration:"none"}} className='nav-link active'>تماس با ما</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
    </>
  );
}
export default App;
