import React from 'react';
import './Home.css'; // Ensure the path to your CSS file is correct

const Home = () => {
    const header = ['Welcome to the Adventure... ']
  return (
    <div className='home'>
      <div className='matn'>
        <div className='header'>
          <h1 className='p1'>How can we move towards something...</h1>
          <h1 className='p2'> while we are standing right next to it?!</h1>
        </div>
      </div>

      <div className='matn2'>
     <h1 className='p3'>{header}</h1>
     </div>

    </div>
  );
}

export default Home;
