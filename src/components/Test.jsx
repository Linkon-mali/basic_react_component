import React from 'react';

const Test = (props) => {

    // const cityChange = () => {
    //     props.cityChangeFromParent();
    // }

    const changeProgrammingLanguage = (index) => {
        // delete that props.pl(index)
        const programmingLanguage = props.pl.filter((item, indx) => indx !== index);
        console.log(programmingLanguage);
        // programmingLanguage.splice(index, 1);
        // const newProgrammingLanguage = [];
        // newProgrammingLanguage.push(programmingLanguage)
        //// set to parent
        props.setProgrammingLanguage(programmingLanguage);
    }

  return <div>
      <div>
      Name: {props.Name}
      </div>
      <div>
          <address>
              Village: {props.address.village}
              <br/>
              City: {props.address.city}
              <br/>
              Country: {props.address.country}
          </address>
      </div>
      <div>
          {/* <button onClick={() => props.cityChangeFromParent()}>Change city</button> */}
          <button onClick={() => props.cityChangeFromParentDaynamic('Amar city')}>Change city daynamic</button>
      </div>
      <h3>Programming language</h3>
      <div>
          {
              props.pl.map((p, index) => (
                  <li key={index} onClick={() => changeProgrammingLanguage(index)}>{p}</li>
              ))
          }
      </div>
  </div>;
};

export default Test;
