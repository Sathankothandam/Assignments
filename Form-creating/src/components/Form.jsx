import React from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "./form.module.css";
const Form = () => {
  const [form, setForm] = useState({});
  const ref = useRef();
  const passRef = useRef();

  const handleOnChange = (e) => {
    let { type, name, value, checked, files } = e.target;
    // console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (!form.username) {
      ref.current.focus();
      console.log(ref.current);
      ref.current.className += styles.redBorder;
    } else if (!form.password) passRef.current.focus();
    
  };

  return (
    <div>
      Form
      <form onSubmit={handleOnsubmit}>
        <div>
          <label>Name:</label>
          <input
            ref={ref}
            type="text"
            name="username"
            placeholder="Enter Name..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder="Enter Age..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email..."
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passRef}
            name="password"
            placeholder="Enter Password..."
            onChange= {handleOnChange}
          />
        </div>

        <div>
          <label>City:</label>
          <select name="city" defaultValue={form.city} onChange={handleOnChange}>
            <option value="Salem">Salem</option>
            <option value="Madurai">Madurai</option>
            <option value="Trichy">Trichy</option>
            <option value="Trinelveli">Trinelveli</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="IsIndian"
            onChange={handleOnChange}
          />
          <label>:Is Indian </label>
        </div>

        <div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Male"}
              onChange={handleOnChange}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={handleOnChange}
            />
            <label>Female</label>
          </div>
        </div>

        <div>
          <label>User Resume : </label>
          <input
            type="file"
            accept ="image/png, image/jpeg, application/pdf"
            name="resume"
            files={form.resume}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
