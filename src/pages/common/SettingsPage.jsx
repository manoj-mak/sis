import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Constants from "../../util/Constants";

const SettingsPage = () => {
  return (
    <div
      style={{
        backgroundColor: Constants.backgroundColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <TopBar />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: Constants.primaryColor,
          fontFamily: "Poppins",
        }}
      >
        Settings Page
      </h1>
    </div>
  );
};

export default SettingsPage;
