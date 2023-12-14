import React, { useEffect } from "react";
import { FaHome, FaBlog, FaCog, FaCalendar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const controls = useAnimation();
  const menuOptions = [
    {
      name: "Dashboard",
      link: "/studentDash",
      icon: <FaHome />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <FaBlog />,
    },
    {
      name: "Calendar",
      link: "/calendar",
      icon: <FaCalendar />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <div className="topbar" style={styles.topBar}>
      <div className="topbar-content" style={styles.topBarContent}>
        {menuOptions.map((option, index) => (
          <motion.div
            className="menu-item"
            key={index}
            style={
              location.pathname === option.link
                ? styles.activeMenuItem
                : styles.menuItem
            }
            animate={{
              backgroundColor:
                location.pathname === option.link ? "#80D7CE" : null,
              transition: { duration: 0.5 },
            }}
            //animations
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={option.link} style={styles.link}>
              {option.icon}
              {location.pathname === option.link && (
                <span style={styles.text}>{option.name}</span>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  topBar: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overFlow: "hidden",
    padding: "20px 20px",
    backgroundColor: "rgba(54, 54, 54, 0.2)",
    WebkitBackdropFilter: "blur(15px)",
    backdropFilter: "blur(15px)",
    border: "1px solid #3d3c3c",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
    borderRadius: "2rem",
  },
  topBarContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px",
    height: "100%",
    cursor: "pointer",
    margin: "0 0.5rem",
  },
  activeMenuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 15px",
    height: "100%",
    cursor: "pointer",
    //borderBottom: "2px solid #80D7CE",
    // backgroundColor: "#80D7CE",
    boxShadow: "0px 0px 5px 0px #80D7CE",
    margin: "0 0.5rem",
    borderRadius: "1rem",
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#01776B",
    fontSize: "1rem",
  },
  text: {
    marginLeft: "10px",
    fontFamily: "Poppins",
    fontSize: "1rem",
  },
};

export default TopBar;
