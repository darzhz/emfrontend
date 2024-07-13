import './App.css';
import ButtonBtn from './components/ButtonBtn';
import Contents from './components/Contents';
import Nav from './components/Nav';
import { useState } from 'react';
function App() {
  const [showform,setshowform] = useState(true);
  function changeHandler(state) {
    setshowform(state)
  }
  return (
    <div className='app'>
       <Nav/>
       <div className="btn-spot">
       <ButtonBtn state={showform} changeHandler={changeHandler}/>
       </div>
       {showform==true?(
        <Contents/>
       ):(
        <div>
          no content
        </div>
       )}
    </div>
  );
}

export default App;
