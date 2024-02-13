import './App.css';
import Navbar from './components/Navbar';
import { Outlet} from "react-router-dom"
import Footer from './components/Footer';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';



function App() {

  const[theme,setTheme]=useState("light");
  const toggleTheme=()=>{
    setTheme(theme=="light"?"dark":"light")
  }
 
  return (
  
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className={`${theme==="dark"&& " text-white"}`}>

     <Navbar/>
     <Outlet/>
     <Footer/>
     
    </div>
    </ThemeContext.Provider>
   
  );

  
}



export default App;
