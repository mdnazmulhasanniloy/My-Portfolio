import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Routers/Routers';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <div className="">
      <RouterProvider router={Router}></RouterProvider>

    </div>
  );
}

export default App;
