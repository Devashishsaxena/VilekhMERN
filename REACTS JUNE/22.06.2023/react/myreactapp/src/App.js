import './App.css';
import { Routes , Route } from 'react-router-dom';

import Header from './HeaderComponent/header';
import Nav from './NavComponent/nav';
import Sidebar from './SidebarComponent/sidebar';
import Home from './HomeComponent/home';
import About from './AboutComponent/about';
import Contact from './ContactComponent/contact';
import Service from './ServiceComponent/service';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';  
import Footer from './FooterComponent/footer';

function App() {
  return (
    <div id="container" >

    <Header />  
    <Nav />
    <div id="content">
      <Sidebar />

      <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>  
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      </Routes>

    </div>
    <Footer />

    </div>
  );
}

export default App;
