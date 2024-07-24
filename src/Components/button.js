import logo from './logo.svg';
import './App.css';
import Custombutton from './components/button/button';
import { Heading1 } from './components/headings/heading';
import List from './components/list/order';
import Unorder from './components/list/unorder';
import Listparent from './components/list/listparent';
import Profile from './components/profilecomponent/profile';
import Customcard from './components/card/customcard';
import Customimage from './components/image/customimag';
import { bagdata } from './components/list/fruitdata';
import { fakeappi } from './components/list/fruitdata';
import { Greeting } from './components/greeting/greeting';
function App() {
  const Students=["siva","bhanu","priyatham"
  ];
  const Navbar=["Home","items","explore","more"]
  const headingStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: "lightblue",
    borderBottom: '1px solid #ccc'
  };
  return (
    <div className="App">
    {/* <Heading1/>
    <Custombutton text="signup" bgColor="red" width={100}/>
    <Custombutton text="signup"  bgColor="red"/>
    <List/>
    <Unorder/>
    <Customcard/>
    <Profile/>
    <Listparent/>
    <Customimage source="https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg" alt="bag" width={100} height={100}/> */}
   {/* {bagdata.map(eachbag=>{return(<div>
    <Customimage source={eachbag.source} alt="bag" width={100} height={100}/>
   </div>)})} */}
   <div className='nav' style={headingStyle}>
    {Navbar.map(eachdata=>{
      return(
        <div>{eachdata}</div>
      )
    })}
   </div>
    {fakeappi.map(eachdata=>{return(
      <div>
        <Customcard  key={eachdata.id} image={eachdata.image} id={eachdata.id} title={eachdata.title} price={eachdata.price} description={eachdata.description} category={eachdata.category}/>
        {/* {Students.map(eachdata=>{return(
      <Greeting>goodmorning{eachdata}</Greeting>
        )
        })} */}
      </div>
     
    )})}
    </div>
  );
}

export default App;