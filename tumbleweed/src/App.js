import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="welcome">Tumbleweed</h1>
        </header>
         <div className="Gear">
           <h1>What type of gear do other companies give developers?</h1>
           <div className="Block">
           
           <div className="GearBlock">
           
           <img className="onboard-image" src="https://media.glassdoor.com/l/e8/13/4e/a2/first-day-desk-set-up.jpg"/>
           <div className="CompanyName">
           Facebook
           </div>
          <div className="CompanyText">This is the decription of the company.</div>
           </div>
           <div className="GearBlock">
           
           <img className="onboard-image" src="https://www.crandallassociates.com/wp-content/uploads/2017/01/First-day-welcome.jpg"/>
           <div className="CompanyName">
           Twitter
           </div>
          <div className="CompanyText">This is the decription of the company.</div>
           </div>
           <div className="GearBlock">
           
           <img className="onboard-image" src="https://media.glassdoor.com/l/5e/a5/69/2a/first-day-on-the-job-what-a-welcome.jpg"/>
           <div className="CompanyName">
           Glitch
           </div>
          <div className="CompanyText">This is the decription of the company.</div>
           </div>
        </div></div>
        <div className="Gear">
           <h1>How do other companies do onboarding?</h1>
           <div className="GearBlock">
          
           <img className="onboard-image" src="https://media.glassdoor.com/l/e8/13/4e/a2/first-day-desk-set-up.jpg"/>
           <div className="CompanyName">
           Twitter
           </div>
          <div className="CompanyText">This is the decription of the company.</div>
           </div>
        </div>
      </div>
    
    );
  }
}

export default App;
