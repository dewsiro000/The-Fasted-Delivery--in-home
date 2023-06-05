import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header';

function App() {
  return (
    <div className="">
      <Header />
      <main className='pt-16' >
        <Outlet />
      </main>
    </div>
  );
}

export default App;
