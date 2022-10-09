
import "aos/dist/aos.css";
import './App.css';
import AOS  from 'aos';
import React, {useEffect} from 'react';
import Header from './components/Header'
import SlideShow from './components/SlideShow';
import Main from './components/Main';
import Videos from './components/Videos';
import Partners from "./components/Partners";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* <Header /> */}
       <Main/>
      <Videos/>
      <SlideShow/>
      <Partners/>
      <Footer/> 

    </div>
  );
}

export default App;
