import '../App.css';
import ButtonBtn from './ButtonBtn';
import Contents from './Contents';
import Nav from './Nav';
import Model from './Model';
import ListEvents from './ListEvents'
import { useEffect, useState } from 'react';
function UserScreen() {
  const [eventList,setEventList] = useState([]);
  
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
        <div>
          <div id="eventlist">
          <ListEvents content={eventList}/>
          </div>
        </div>
    </div>
  );
}

export default UserScreen;
