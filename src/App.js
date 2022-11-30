
import './App.css';
import InputShortner from './inputShortner';
import BackgroundAnimation from './BackgroundAnimation';
import LinkResult from './LinkResult';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const [inputValue,setInputValue]= useState("")

  return (
    <div className="container">
    <Footer/>
    <InputShortner setInputValue={setInputValue}/>
    <BackgroundAnimation/>
    <LinkResult inputValue={inputValue}/>
    <Footer/>
    </div>
  
  );
}

export default App;
