import { useState } from "react";
import "./Content.css";
import Model from "./Model";
function Contents({ showform }) {
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // Set min attribute to current date and time
  const minDateTime = getCurrentDateTime();
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    timedate: "",
    duration: "",
    venue: ""
  });
  const [showModel,setShowModel] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModel(true);
  };
  const confirmSubmit = async () => {
    setShowModel(false); // Close the modal
    const response = await fetch('http://localhost:5137/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully!");
      // Optionally reset form data here
      setFormData({
        name: "",
        desc: "",
        timedate: "",
        duration: "",
        venue: ""
      });
    } else {
      console.log("Form submission failed!");
      // Handle error
    }
  };

  const cancelSubmit = () => {
    setShowModel(false); // Close the modal
  };

  return (
    <>
      <div className="form">
        <form id="form" onSubmit={handleSubmit}>
          <div className="fields">
            <label htmlFor="name">Name of Event</label>
            <div className="float_label">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enxcl Launch Party"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
            <label htmlFor="name">Description</label>
            <textarea
              name="desc"
              id="desc"
              placeholder="Description XYZ"
              value={formData.desc}
              onChange={handleChange}
              required
              maxLength={200}
            ></textarea>
            <div className="mini-label ">
            <label htmlFor="timedate" className="label-mini">Date & Time</label>
            <label htmlFor="venue" className="label-mini">Venue</label>

            </div>
            <div className="mini">

              <input
                type="datetime-local"
                name="timedate"
                id="timedate"
                min={minDateTime}
                className="minis"
                value={formData.timedate}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="venue"
                id="venue"
                className="minis"
                placeholder="Trivandrum"
                value={formData.venue}
                onChange={handleChange}
                required
              />
              <div className="minis">
                <div className="special-duration">
                <label htmlFor="duration">Duration</label>
                </div>

              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
                min="0"
                step="0.1"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <span>
                Hrs
              </span>
              </div>
               
              <button type="submit" className="pub">Publish</button>
            </div>
          </div>
          {showModel && (
        <Model
          message="Are you sure you want to publish this event?"
          confirmHandler={confirmSubmit}
          cancelHandler={cancelSubmit}
        />
      )}
        </form>
      </div>
    </>
  );
}

export default Contents;
