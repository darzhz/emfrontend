import '../App.css';
import ButtonBtn from './ButtonBtn';
import Contents from './Contents';
import Nav from './Nav';
import Model from './Model';
import ListEvents from './ListEvents'
import { useEffect, useState } from 'react';
function OrgScreen() {
  const [showform,setshowform] = useState(false);
  const [eventList,setEventList] = useState([]);
  function changeHandler(state) {
    setshowform(state)
  }
  
  useEffect(()=>{
    const fetchEvents = async () => {
      try{
        const resp = await fetch('http://localhost:5137/api/list');
        if (!resp.ok) {
          throw new Error(`Response status: ${resp.status}`);
      }
        const data =  await resp.json();
        setEventList(data);
    
        }catch(err){
          console.log(err);
        }
    }
   fetchEvents();
  },[])
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
          <div id="eventlist">
          <ListEvents content={eventList}/>
          </div>
        </div>
       )}
    </div>
  );
}

export default OrgScreen;