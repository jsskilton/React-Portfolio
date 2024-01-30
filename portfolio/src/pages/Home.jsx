import React from 'react';
import homeBackground from '../data/images/home-background.jpg';
import meImage from '../data/images/me.jpg';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', 
  backgroundImage: `url(${homeBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  paddingTop: '20px', 
};

const contentContainerStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px', 
};

const textContentStyle = {
  backgroundColor: 'rgba(45,60,80, 0.6)',
  padding: '10px', 
  margin: '0', 
  color: 'white',
  marginLeft: '10%', 
  marginRight: '10%',
};

const footerStyle = {
    marginTop: 'auto',
    backgroundColor: 'rgba(45,60,80, 0.6)',
    padding: '10px',
    margin: '0',
    display: 'inline-block', 
    width: 'fit-content', 
    color: 'white',
  };

const imageStyle = {
  width: '200px',
  height: 'auto',
  margin: '20px',
  opacity: 0.5,
};

const Home = () => {
  return (
    <div style={homeStyle}>
      <h1 style={{ marginTop: '50px' }}>
          
      <div style={contentContainerStyle}>
        <div style={textContentStyle}>
          Welcome to My Portfolio!
          </div>
        </div>
      
      </h1>
      <div style={contentContainerStyle}>
          <img src={meImage} alt="Me" style={imageStyle} />
          <div style={textContentStyle}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim porttitor placerat. Sed sagittis
            ultricies diam, id suscipit velit lacinia id. Nunc hendrerit convallis nibh sed scelerisque. Aliquam
            porttitor pellentesque mauris ac mattis. Vestibulum cursus placerat hendrerit. Mauris mattis ornare ultrices.
            Proin eleifend orci orci, vel dapibus quam tincidunt vitae. Phasellus consequat, arcu id commodo elementum,
            risus justo ullamcorper orci, viverra aliquet eros risus ac nunc.
          </p>
        </div>
      </div>
      <div style={contentContainerStyle}>
      <div style={footerStyle}>
        <h2>Turning Vision Into Reality</h2>
      </div>
      </div>
    </div>
  );
};

export default Home;
