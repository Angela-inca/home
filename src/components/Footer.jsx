import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className=" text-center " id="contact">
      <Container>
        {props.children}
       
      </Container>
    </footer>
  );
};

export default Footer;
