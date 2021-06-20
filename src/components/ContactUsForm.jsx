import React, { useState } from "react";
const ContactUsForm = (props) => {
  const [formData, setFormData] = useState({
    selectedSrc: [],
    selectedMedia: []
  });
  const sourceList = ["Zillow", "Realtor", "Ylopo", "Others"];
  const socialMediaList = [
    "Google",
    "Facebook",
    "Email",
    "Friends",
    "Real Closers"
  ];
  const handleChange = (e, checkboxValue = "", listName) => {
    if (e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } else {
      const list = [...formData[listName]];
      const index = list.indexOf(checkboxValue);
      if (index > -1) {
        list.splice(index, 1);
      } else {
        list.push(checkboxValue);
      }
      setFormData({
        ...formData,
        [listName]: list
      });
    }
  };

  const handleSubmit = () => {
    alert(
      JSON.stringify({
        ...formData,
        planSelected: props.planName,
        average: props.average
      })
    );
  };
  return (
    <div style={{ color: "#1d2f4c" }}>
      <hr />
      <p>
        <b>Plan Selected: </b>
        {props.planName}
      </p>
      <div className="formfield">
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <div className="formfield half">
          <label htmlFor="input-email">E-mail Address</label>
          <input
            id="input-email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="formfield half">
          <label htmlFor="input-phone">Phone No.</label>
          <input
            id="input-phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex">
        <div className="formfield half">
          <label htmlFor="input-leadsMonth">
            Number of leads you ganerate in a month
          </label>
          <input
            id="input-leadsMonth"
            name="leadsMonth"
            type="number"
            value={formData.leadsMonth || ""}
            onChange={handleChange}
          />
        </div>
        <div className="formfield half">
          <label htmlFor="input-leadsCrm">Total leads in you CRM</label>
          <input
            id="input-leadsCrm"
            name="leadsCrm"
            type="number"
            value={formData.leadsCrm || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex">
        <div className="formfield half">
          <label htmlFor="input-crm">Which CRM do you use</label>
          <input
            id="input-crm"
            name="crm"
            type="number"
            value={formData.crm || ""}
            onChange={handleChange}
          />
        </div>
        <div className="formfield half">
          <label htmlFor="input-agent">No. of Agents</label>
          <input
            id="input-agent"
            name="agent"
            type="number"
            value={formData.agent || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <p>
          <b>What are you biggest lead source?</b>
        </p>
        {sourceList.map((src, i) => (
          <React.Fragment key={`source${i}`}>
            <input
              type="checkbox"
              id={`source${i}`}
              name={`source${i}`}
              value={src}
              onChange={() => {
                handleChange(false, src, "selectedSrc");
              }}
            />
            <label htmlFor={`source${i}`}> {src}</label>
          </React.Fragment>
        ))}
      </div>
      <div>
        <p>
          <b>How did you hear about us</b>
        </p>
        {socialMediaList.map((social, i) => (
          <React.Fragment key={`social${i}`}>
            <input
              type="checkbox"
              id={`social${i}`}
              name={`social${i}`}
              value={social}
              onChange={() => {
                handleChange(false, social, "selectedMedia");
              }}
            />
            <label htmlFor={`social${i}`}> {social}</label>
          </React.Fragment>
        ))}
      </div>
      <div className="bttn primary small" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  );
};

export default ContactUsForm;
