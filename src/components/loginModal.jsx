import React, { useState } from "react";

const LoginModal = ({ onClose }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ username: "", password: "" });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "20rem",
        height: "13rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3>Login Modal</h3>
        <button
          style={{
            padding: "3px",
            borderRadius: "50%",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={onClose}
        >
          x
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          disabled={user.username === "" || user.password === ""}
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor:
              user.username === "" || user.password === "" ? "#ccc" : "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
