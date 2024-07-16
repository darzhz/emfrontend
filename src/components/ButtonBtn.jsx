import "./ButtonBtn.css";
function ButtonBtn({state,changeHandler}){
    const ToggleBtn = () =>{
        changeHandler(!state);
    }
    return(
        <>
        {state===false? (
             <button className="btn" onClick={()=>{ToggleBtn()}}>
             Create +
             </button>
        ):(
            <button className="btn btn-not" onClick={()=>{ToggleBtn()}}>
                Back
            </button>
        )}
        </>
    );
}
export default ButtonBtn;