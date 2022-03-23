import React from 'react';
import Day16Comp from './Day16Comp';

const Day16 = () => {
    // Object Destructuring
    const address = {
        name: 'Linkon mali',
        // phone: '01712',
        village: 'Gaokhali',
        city: 'Barishal',
    }
    const {name, phone = 'N/A', village, city} = address

    // Array Destructuring
    const user = [ 'apu', 'tumpa', 'santo'];
    console.log(user[0]);
    const people ={...user}
    console.log(people);

    const [firstUser = 'N/A', secondUser, , inportantUser] = user;
    console.log(firstUser, secondUser, inportantUser);

  return <div>
      <h2 className='bg-info'>Day16</h2>
      Name: {address.name} {/* Its come to orginal object */}
      <br></br>
      Phone: {phone}
      <br></br>
      Village: {village}
      <br></br>
      City: {city}
      <h2>Day16Comp</h2>

      <Day16Comp address={address} />
  </div>;
};

export default Day16;
