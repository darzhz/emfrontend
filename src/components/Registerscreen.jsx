import React, { useState } from 'react'
import "./Registerscreen.css";
import Model from './Model';

function Registerscreen() {
    const [showClgId,setClgId] = useState(false);
    const [showPopeup,setPopeup]=useState(false);
    //last or return msg
    const[showStatus,setShowStatus]=useState(false);
    const[stat,setStat]=useState(null);



    function toggleClgId(e){
            console.log(e.target.value);
            if(e.target.value === "mit"){
                setClgId(true);
            }
            else
             setClgId(false);
    }
    function submitted(e){
        e.preventDefault();
        setPopeup(true);

    }

     const [formsData,setformsData] = useState({
        fname:"",
        email:"",
        semester:"",
        lname:"",
        branch:"",
        password:"",
        clg_id:""
     })
  function handlechange(e) {
    const {name,value} = e.target;
    setformsData({...formsData,[name]:value});
  }  
  function Cancel(){
    setPopeup(false);
  }
  function statclose(){
    setShowStatus(false);
}

  async function confirmSubmit(){
    setPopeup(false);
    console.log("fetch call")
    // const response = await fetch('http://192.168.2.83:5137/api/registration',{method:'POST',header:{'content-Type':'application/json'},body: JSON.stringify(formsData)});
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(formsData),
        redirect: "follow"
      };
      let resp = await fetch("http://192.168.2.83:5137/api/registration", requestOptions);
      let data = await resp.json();
      if(resp.ok){
        console.log("yayyyyyy")
      } else{
       console.log("not submitted")
            }
      
       setShowStatus(true);
       setStat(data.message);
    
  }

    return (
    <><div className='head'> Register Here!</div>
        <form id='whole' onSubmit={submitted}>
        {showPopeup && ( <Model cancelHandler={Cancel} confirmHandler={confirmSubmit} message="are you sure " />
        )}

            <div className='firstblock'>
            <input className='fname' type="text" id='fname' name='fname' placeholder='FirstName'value={formsData.fname} onChange={handlechange} required/>
            <input type="email" id="email" name="email" placeholder='Email'pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"value={formsData.email} onChange={handlechange} required />
            <input className='sem'  min="1" max="8" type="number" id='sem' name="semester" placeholder='Semester'value={formsData.sem} onChange={handlechange} required/>
            <input id='password' type='password' minLength={4} name='password' placeholder='Password' value={formsData.password} onChange={handlechange} required/>
            </div>
            <div className='Secondblock'>
            <input className='lname' type="text" id='lname' name="lname" placeholder='LastName' value={formsData.lname} onChange={handlechange} required/>
            <input className='branch' type="text" id='branch' name="branch" placeholder='Branch' value={formsData.branch} onChange={handlechange} required/>
            <select className='sclg' value={formsData.sclg} onChange={toggleClgId} placeholder='Select' required>
                <option>Select College</option>
                <option value="mit" > Mahaguru Institute Of Technology</option>
                    <option value="others">Other College</option>
            </select>
            {showClgId && (
                 <input className='clgid' type='text' name='clg_id'placeholder='Enter College Id' required/>
            )}

            <div > <button type='submit' className='procbutton'>Proceed</button></div>
            </div>
        </form>
        {showStatus &&(<Model message={stat} confirmHandler={statclose}/>)}
    </>    


    )
}

export default Registerscreen
