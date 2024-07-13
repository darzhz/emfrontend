import { useState } from "react";
import "./Content.css";

function Contents({ showform }) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    timedate: "",
    duration: "",
    venue: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch('/api/endpoint', { // Replace with your API endpoint
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    console.log(JSON.stringify(formData));

    // if (response.ok) {
    //   console.log("Form submitted successfully!");
    //   // Handle success
    // } else {
    //   console.log("Form submission failed!");
    //   // Handle error
    // }
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
            />
            <textarea
              name="desc"
              id="desc"
              placeholder="Description"
              value={formData.desc}
              onChange={handleChange}
            ></textarea>
            <div className="mini">
              <input
                type="text"
                name="timedate"
                id="timedate"
                placeholder="Date & Time"
                value={formData.timedate}
                onChange={handleChange}
              />
              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
              />
              <input
                type="text"
                name="venue"
                id="venue"
                placeholder="Venue"
                value={formData.venue}
                onChange={handleChange}
              />
              <button type="submit" className="pub">Publish</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contents;
