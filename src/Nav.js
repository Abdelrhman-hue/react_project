import React, { useState } from "react";
import logo from "./image/logo-light.svg";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <>
      <nav className="">
        {/* الجزء الأيسر: الشعار */}
        <div className="">
          <CssBaseline />
          <Container maxWidth="medium">
            <Box display="flex" alignItems="center">
              <img
                src={logo}
                alt="Logo"
                className=""
                style={{ width: "100px", height: "auto", margin: "20px 10px" }}
              />
              <ul className="nav-links" style={{ listStyle: "none", display: "flex",  }}>
                <li style={{ margin: "0 10px", cursor: "pointer" }}><a>home</a></li>
                <li style={{ margin: "0 10px", cursor: "pointer" }}><a>features</a></li>
                <li style={{ margin: "0 10px", cursor: "pointer" }}><a>pages</a></li>
                <li style={{ margin: "0 10px", cursor: "pointer" }}><a>support</a></li>
                <li style={{ margin: "0 10px", cursor: "pointer" }}><a>contact</a></li>
              </ul>
              <div className="nav-buttons" style={{ marginLeft: "200px" }}>
                <button style={{ margin: "0 10px" }}>Login</button>
                <button style={{ margin: "0 10px" }}>Sign Up</button>
              </div>
            </Box>
          </Container>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
