import "./ButtonBtn.css";
import { useEffect, useState } from "react";
import Model from "./Model";
function ButtonBtn({state,changeHandler}){

    const ToggleBtn = () =>{
        changeHandler(!state);
    }
    const cancelChange = () => {
        setBackPressed(!isBackPressed);
    }
    const [isBackPressed,setBackPressed] = useState(false);
    useEffect(()=>{
        console.log("isbackpressed :",isBackPressed,"state ",state)
    },[state,isBackPressed])
    return(
        <>
        {state===false? (
             <button className="btn" onClick={()=>{ToggleBtn()}}>
             Create +
             </button>
        ):(
            <>
            {isBackPressed == true? (
                <>
                <Model  message="Are you sure you don't want to publish?" confirmHandler={()=>{ToggleBtn();setBackPressed(false);}} cancelHandler={cancelChange}/>
                </>
            ):(
                <>
                <button className="btn btn-not" onClick={()=>{setBackPressed(true)}}>
                Back
                </button>
                </>
            )}
            </>
        )}
        </>
    );
}
export default ButtonBtn;