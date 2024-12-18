import React, { useState } from "react";
import axios from "axios";
import ModelComp from "./model";

export default function FormAuthen() {
  const [modalShow, setModalShow] = React.useState(false);
  const [response, setResponse] = useState(false);
  const [userData, setuserData] = useState({
    username: "",
    password: "",
    expiresInMins: 30,
  });

  const InputEventHandler = (e) => {
    const { name, value } = e.target;
    setuserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SumbitForm = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://dummyjson.com/auth/login",
      data: userData,
      headers: { "Content-Type": "application/json" },
    })
      .then((e) => {
        // console.log("Login Successful:", e.data.firstName);
        setResponse(true);
        setModalShow(true);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
        setResponse(false);
        setModalShow(true);
      });
  };

  return (
    <div>
      <form onSubmit={SumbitForm}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={InputEventHandler}
          placeholder="Enter your name"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={InputEventHandler}
          placeholder="Enter your password"
        />
        <br />
        <br />
        <input
          type="number"
          name="expiresInMins"
          value={userData.expiresInMins}
          onChange={InputEventHandler}
        />
        <br />
        <br />
        <input type="Submit" />
      </form>
      <div>
        {response ? (
          <ModelComp
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            name={userData.username}
          />
        ) : (
          <ModelComp
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            name="Unauthorized User"
          />
        )}
      </div>
    </div>
  );
}
