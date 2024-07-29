


import React from 'react';
import './App.module.css';
import { fakeappi } from './Components/data';
import Customcard from './Components/card';


function App() {
  return (
    <div className="App">
      {fakeappi.map((eachdata) => {
        return (
          <div key={eachdata.id}>
            <Customcard
              key={eachdata.id}
              image={eachdata.image}
              id={eachdata.id}
              title={eachdata.title}
              price={eachdata.price}
              description={eachdata.description}
              category={eachdata.category} />
          
          </div>
         
        );
      })}
    
    </div>
  );
}

export default App;
