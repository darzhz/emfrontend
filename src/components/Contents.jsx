import { useState } from "react";
import "./Content.css";
function Contents(showform) {
  const [data,setData] = useState()
  return (
    <>
      <div className="form">
        <form id="form">
          <div className="fields">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name of Event"
            ></input>
            <textarea
              name="desc"
              id="desc"
              placeholder="description"
            ></textarea>
            <div className="mini">
              <input
                type="text"
                name="timedate"
                id="timedate"
                placeholder="Date & Time"
              ></input>
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Duration"
              ></input>
              <input
                type="text"
                name="venue"
                id="venue"
                placeholder="venue"
              ></input>
            <button type="submit" className="pub" >Publish</button>

            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contents;
