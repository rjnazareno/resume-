import React from 'react';

// ContactInfo Component
function ContactInfo() {
  return (
    <div className="contact-info">
      <strong>CONTACT</strong>
      <p>09455069726</p>
      <p>Rjmnazareno.student@ua.edu.ph</p>
      <p>#264 Narra Street, Magliman City of San Fernando Pampanga</p>
    </div>
  );
}

// ListItem Component
function ListItem({ children }) {
    return <li>{children}</li>;
  }
  
// LeftColumn Component
function LeftColumn() {
    
    return (
      <div style={{ width: '45%', backgroundColor: 'rgb(192, 60, 60)', padding: '1px', color: 'white' }}>
        <img src="https://i.postimg.cc/FRjpNFms/1234.pngraw=true" alt="Resty James M. Nazareno" />
    
  
        <ContactInfo />
        <div className="interests">
          <strong>INTERESTS</strong>
          <p> - Listening to Music</p>
          <p> - Reading Manga</p>
          <p> - Playing Video Games</p>
          <p> - Coding</p>
          <p> - Building Computers</p>
        </div>
        <div className="achievements">
          <strong>ACHIEVEMENTS</strong>
          <p> - Web Development Challenge Highest Scorer (2024)</p>
          <p> - Coding Tournament 1st runner up (2023)</p>
          <p> - Smart Home Automation Challenge Winner (2022)</p>
          <p> - Mobile App Innovation Contest 2nd runner up (2023)</p>
          <p> - Robotics Contest Champion (2024)</p>
        </div>
      </div>
    );
  }
  
// RightColumn Component
function RightColumn() {
  return (
    <div style={{ width: '55%', backgroundColor: '#fff', padding: '20px' }}>
      <h1 style={{ fontSize: '45px', fontWeight: 'bold', marginTop: '40px' }}>RESTY JAMES M. NAZARENO</h1>
      <h4 style={{ fontSize: '25px', fontWeight: 'bold', marginTop: 'auto' }}>COLLEGE GRADUATE</h4>
      <div className="main-objective">
        <h2 style={{ color: 'rgb(192, 60, 60)' }}>MAIN OBJECTIVE</h2>
        <p style={{ color: 'black', textAlign: 'justify' }}>
          As a Computer Engineering graduate, my objective is to secure a position where I can apply my technical skills in hardware and software, while continually enhancing my proficiency. Eager to contribute to a collaborative team, I aim to put into action my academic foundation and practical experiences to contribute effectively to projects and strive for a successful career in the field of Computer Engineering.
        </p>
      </div>
      <div className="work-experience">
        <h2 style={{ textAlign: 'justify', paddingBottom: '5px', marginBottom: '10px', color: 'rgb(192, 60, 60)', fontWeight: 'bold' }}>WORK EXPERIENCE</h2>
        <h3 style={{ textAlign: 'justify' }}>Junior Cybersecurity Analyst | CyberDefend Solutions, Manila | June 2023 - Present</h3>
        <ul>
          <ListItem>Conducted vulnerability assessments and implemented security policies.</ListItem>
          <ListItem>Monitored and responded to security incidents, contributing to incident response plans.</ListItem>
          <ListItem>Assisted in security awareness training programs and deployment of security tools.</ListItem>
        </ul>
        <h3 style={{ textAlign: 'justify' }}>Intern | XYZ Corporation, Quezon City | May 2023 - August 2023</h3>
        <ul>
          <ListItem>Installed, configured, and troubleshooted hardware and software.</ListItem>
          <ListItem>Provided technical support to end-users and contributed to IT documentation.</ListItem>
        </ul>
      </div>
      <div className="academic-background">
        <h2 style={{ textAlign: 'justify', paddingBottom: '5px', marginBottom: '10px', color: 'rgb(192, 60, 60)', fontWeight: 'bold' }}>ACADEMIC BACKGROUND</h2>
        <h3 style={{ textAlign: 'justify' }}>BACHELOR OF SCIENCE IN COMPUTER ENGINEERING</h3>
        <p>University of the Assumption (2022 - 2026)</p>
        <p>- CUM LAUDE</p>
        <h3 style={{ textAlign: 'justify' }}>HIGH SCHOOL DEGREE</h3>
        <p>University of the Assumption (2016 - 2022)</p>
        <p>- WITH HONORS</p>
      </div>
    </div>
  );
}

// App Component
function App() {
  return (
    <div style={{ display: 'flex', maxWidth: '8.5in', margin: '20px auto' }}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;
