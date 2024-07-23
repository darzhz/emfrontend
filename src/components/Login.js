import React, { useState } from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';
import Model from './Model';


function Login() {
  const [loginInfo, setloginInfo] = useState({ email: "", password: "" });
  const [statusMessage,setStatusMessage] = useState(null);
  async function submitHandler(e) {
    e.preventDefault();
    const response = await fetch('http://192.168.2.83:5137/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });
      let data = await response.json() //data include meassage,isloggedIn if response.ok not used here because if we used (if response.ok) the not show  invalid message
      setStatusMessage(data.message); // we want only message from data

  }
  function changeHandler(e) {
    const { name, value } = e.target
    setloginInfo({ ...loginInfo, [name]: value });
  }
  function confirmfunc(){
    setStatusMessage(null);
    setloginInfo({ email: "", password: "" })
  }








return (

  <div ClassName="orm">
    < form className='container' onSubmit={submitHandler}>
      <div className='tyle' >
        <input type="radio" id="gun" name="fav_language" value="Gun" checked="checked" required />
        <label for="gun">Organizer</label>
        <input type="radio" for="rti" required />
        <label id="rti" >Participator</label>

      </div>

      <div className="login_field">
        <div>
         <label htmlFor="name">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="email" name="email" className='mi ' value={loginInfo.email} onChange={changeHandler} required />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" className='tii' value={loginInfo.password} onChange={changeHandler} required />
        </div>
        <label class="fon"> Reset Password ?</label>
      </div>
      < div className='pass'>
        <button className='bttn' type="submit">Login</button>
      </div>
      <div className='sign'>
        <p className='size'>Not yet a member? <Link className="li" to="/reg">Sign Up</Link></p>

      </div>
    </form>
    {statusMessage != null && (
      <Model confirmHandler={confirmfunc} message={statusMessage}/>
    )}


  </div >


)

}
export default Login
