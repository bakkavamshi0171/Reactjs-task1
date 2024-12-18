import React, { useState } from "react";
import MyVerticallyCenteredModal from "./models";
import "./form.css"

export default function FormComp() {
    const [modalShow, setModalShow] = React.useState(false);
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    telephone: "",
    date: "",
  });
  const [file, setFile]=useState("");

  const handlerInput = (e) => {
    const {name, value}= e.target;
    setUserData((prev) => ({
        ...prev,
        [name]: value,
      }))
  };
  
  const handlerInputFile = (e)=>{
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setModalShow(true)
    console.log("form sumbitted" , userData)
  };

  return (
    <div className="formDiv">
      <form onSubmit={hanldeSubmit} className="form">
        <label htmlFor="user" className="inputLabel"> Full Name : </label>
        <input
          type="text"
          name="user"
          value={userData.user}
          onChange={handlerInput}
          placeholder="Enter your fullname"
        /><br/><br/>
        <label htmlFor="email" className="inputLabel"> Email Add : </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handlerInput}
          placeholder="Enter your email "
        /><br/><br/>
        <label htmlFor="telephone" className="inputLabel">Mobile No : </label>
        <input
          type="tel"
          name="telephone"
          value={userData.telephone}
          onChange={handlerInput}
          placeholder="Enter you mobile number "
        /><br/><br/>
        <label htmlFor="date" className="inputLabel">Birth to Date :</label>
        <input
          type="date"
          name="date"
          value={userData.date}
          onChange={handlerInput}
        /><br/><br/>
        <input
          type="file"
          name="file"
          onChange={handlerInputFile}
        /><br/>
        <p className="submitButton">
        <input type="submit" /> </p>
      </form>
      
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} user={userData.user} email={userData.email} telephone={userData.telephone} date={userData.date}  image={file}/>
    </div>
  );
}
