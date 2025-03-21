import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subject, setSubject] = useState({
    english: true,
    math: false,
    science: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      subject,
      resume,
      url,
      choice,
      about
    );
  };
  const handleSubChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubject({
      english: true,
      math: false,
      physics: false,
      science: false,
    });
    setResume("");
    setUrl("");
    setChoice("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Submission Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">FirstName*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            placeholder="Enter First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">lastName*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            placeholder="Enter Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            placeholder="Enter Phone Number"
            required
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          mail
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          femail
          <input
            type="radio"
            name="gender"
            id="Other"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />
          other
          <label htmlFor="lang">Your Best Subject </label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subject.english === true}
            onChange={() => handleSubChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="math"
            checked={subject.math === true}
            onChange={() => handleSubChange("math")}
          />
          Math
          <input
            type="checkbox"
            name="science"
            id="science"
            checked={subject.science === true}
            onChange={() => handleSubChange("science")}
          />
          Science
          <input
            type="checkbox"
            name="physics"
            id="physics"
            checked={subject.physics === true}
            onChange={() => handleSubChange("physics")}
          />
          physics
          <label htmlFor="file">Upload Resume</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Upload File Here"
            required
          />
          <label htmlFor="url">Enter Url</label>
          <input
            type="url"
            name="url"
            id="url"
            placeholder="Enter Url "
            required
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Select your Choice</label>
          <select
            name="select"
            id="select"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
          >
            <option value="" disabled>
              Select your Ans
            </option>
            <optgroup label="Begineer">
              <option value="1">Html</option>
              <option value="2">Css</option>
              <option value="3">JavaScript</option>
              <option value="4">Bootstrap</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React.js</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">Mongo DB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your Self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={(e) => handleReset(e)}>
            Reset
          </button>
          <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
