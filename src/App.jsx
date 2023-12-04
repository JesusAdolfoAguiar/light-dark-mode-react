import './App.css';
import React, { useEffect } from 'react';
import ProudCoderSvg from './img/undraw_proud_coder_light.svg';
import FeelingProudSvg from './img/undraw_feeling_proud_light.svg';
import ConceptualIdeaSvg from './img/undraw_conceptual_idea_light.svg';


const App = () => {

  useEffect(() => {
    const toggleSwitch = document.querySelector('input[type="checkbox"]');
    const nav = document.getElementById('nav');
    const toggleIcon = document.getElementById('toggle-icon');
    const proudCoder = document.getElementById('proudCoder');
    const feelingProud = document.getElementById('feelingProud');
    const conceptualIdea = document.getElementById('conceptualIdea');
    const textBox = document.getElementById('text-box');
  
    // Dark or Light Images
    const imageMode = (color) => {
      proudCoder.src = `img/undraw_proud_coder_${color}.svg`;
      feelingProud.src = `img/undraw_feeling_proud_${color}.svg`;
      conceptualIdea.src = `img/undraw_conceptual_idea_${color}.svg`;
    }
  
    // Toggle Function
    const toggleDarkLightMode = (isDark) => {
      nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(0 0 0 / 50%)';
      textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
      toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
      isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') 
        : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
      isDark ? imageMode('dark') : imageMode('light');
    }
  
    // Switch Theme Dynamically
    const switchTheme = (event) => {
      if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
      }
    }
  
    // Event Listener
    toggleSwitch.addEventListener('change', switchTheme);
  
    // Check Local Storage For Theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  
      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode()
      }
    }
  }, []);

  return (
    <div className="App">
      {/* <!-- Dark Mode Switch --> */}
      <div className="theme-switch-wrapper">
          <span id="toggle-icon">
              <span className="toggle-text">Light Mode</span>
              <i className="fas fa-sun"></i>
          </span>
          <label className="theme-switch">
              <input type="checkbox"/>
              <div className="slider round"></div>
          </label>
      </div>
      {/* <!-- Navigation --> */}
      <nav id="nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
      </nav>
      {/* <!-- Home Section --> */}
      <section id="home">
          <div className="title-group">
              <h1>Custom Title Here</h1>
              <h2>Welcome to the Website!</h2>
          </div>
      </section>
      {/* <!-- About Section --> */}
      <section id="about">
          <h1>Undraw Illustrations</h1>
          <div className="about-container">
              <div className="image-container">
                  <h2>Web Innovation</h2>
                  <img src={ProudCoderSvg} alt="Proud Coder" id="proudCoder"/>
              </div>
              <div className="image-container">
                  <h2>Problem Solving</h2>
                  <img src={FeelingProudSvg} alt="Proud Coder" id="feelingProud"/>
              </div>
              <div className="image-container">
                  <h2>High Concept</h2>
                  <img src={ConceptualIdeaSvg} alt="Idea" id="conceptualIdea"/>
              </div>
          </div>
      </section>
      {/* <!-- Projects Section --> */}
      <section id="projects">
          <h1>Buttons</h1>
          <div className="buttons">
              <button className="primary">Primary</button>
              <button className="secondary">Secondary</button>
              <button className="primary" disabled>Disabled</button>
              <button className="outline">Outline</button>
              <button className="secondary outline">Alt Outline</button>
              <button className="outline" disabled>Disabled</button>
          </div>
          <div className="text-box" id="text-box">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae corporis tempore reiciendis voluptatum magnam deserunt, sed ratione porro id, iure laudantium repellendus ea temporibus explicabo odit vel laboriosam ipsam.</p>
          </div>
      </section>
      {/* <!-- Contact Section --> */}
      <section id="contact">
          <div className="social-icons">
              <i className="fab fa-github"></i>
              <i className="fab fa-codepen"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-medium"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
          </div>
      </section>
    </div>
  );
}

export default App;
