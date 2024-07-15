import { useState } from "react";
import "./Content.css";
import Model from "./Model";

function Contents({ showform }) {
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
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name of Event"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="desc"
              id="desc"
              placeholder="Description"
              value={formData.desc}
              onChange={handleChange}
              required
              maxLength={200}
            ></textarea>
            <div className="mini">
              <input
                type="text"
                name="timedate"
                id="timedate"
                placeholder="Date & Time"
                value={formData.timedate}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="venue"
                id="venue"
                placeholder="Venue"
                value={formData.venue}
                onChange={handleChange}
                required
              />
              <button type="submit" className="pub">Publish</button>
            </div>
          </div>
          {showModel && (
        <Model
          message="Are you sure you want to submit this form?"
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
