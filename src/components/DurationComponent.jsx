import { useState } from "react";

function DurationComponent({handleChange,formData}){
     const[time,setTime] = useState({
        hours:0,
        minutes:0,
    });
    const handleChangeInterupt = (e) =>{
        toHoursAndMinutes(e.target.value);
        handleChange(e);
    }
    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        time.hours = hours;
        time.minutes = minutes;
      }
    return(
        <>
        <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration in Minutes"
                min="0"
                step="15"
                value={formData.duration}
                onChange={handleChangeInterupt}
                required
              />
              
                {time.hours > 0?
                (
                    <span>
                    {time.hours} Hrs {time.minutes} Mins
                    </span>
                ):(
                    <span>
                    {time.minutes} Mins
                    </span>
                )}
        </>
    );
}
export default DurationComponent;