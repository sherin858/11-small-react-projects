import logo from './logo.svg';
import './App.css';
import { GiHamburgerMenu} from "react-icons/gi";
import{links,social}from './data'
import { useEffect, useRef, useState } from 'react';
function App() {
  const[showLinks,setShowLinks]=useState(false)
  const linkContainerRef=useRef(null)
  const linksRef=useRef(null)
  const display=()=>{
    setShowLinks(!showLinks)
  }
  useEffect(()=>{
    const height=linksRef.current.getBoundingClientRect().height;
    console.log(height)
    if(showLinks){linkContainerRef.current.style.height=`${height}px`}
    else{linkContainerRef.current.style.height='0px'}
    
  },[showLinks])
  return (
    <div className="App">
      <div className="nav-container">
        <nav>
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className={showLinks?'toggler rotate-blue':'toggler'} onClick={display}>
              <GiHamburgerMenu/>
            </button>
          </div>
          <div className="links-container" ref={linkContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map(link=><li key={link.id}><a href={link.url}>{link.text}</a></li>)}
            </ul>
          </div>
          <div className="social-links">
            <ul>
            {social.map(link=><li key={link.id}><a href={link.url}>{link.icon}</a></li>)}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
