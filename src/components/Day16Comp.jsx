import React from 'react';

const Day16Comp = ({address}) => {
    // const {address} = props;
    const {name, phone = 'N/A', village, city} = address;
    //////////////////
    const numbers = [12, 43, 55, 90];
    const anotherNumber = 33;
    const fullNumber = [...numbers, anotherNumber, 66];
    console.log(fullNumber.length);
    /////////////////
    const point = {
        x: 2,
        y: 3
    }
    const morePoint = {...point, z: 5}
    console.log(morePoint);
    
    ////////// rest operator
    const sum = (...numbers) => {
        let total = 0;
        numbers.forEach(n => total = total + n)
        return total;
    }
    
  return (
      <div>
          Name: {address.name}
          <br/>
          Phone: {phone}
          <br/>
          City: {city}
          <br/>
          Spreed number:  {sum(1, 2, 7)}
      </div>
  )
};

export default Day16Comp;
