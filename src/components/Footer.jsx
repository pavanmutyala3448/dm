import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading
} from "./footerStyle";
import "./componentStyles/footer.css";

const Footer = () => {
  return (
    <Box id="Footer">
      <Container>
        <Row>
          <Column>
            <h1>LOGO</h1>
          </Column>
          <Column>
            <Heading>Quick Links</Heading>
            <FooterLink href="#">How it Works</FooterLink>
            <FooterLink href="#">Guarantee</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Report Bug</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">About Company</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Team</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Subscribe Us</Heading>
            <form>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your mail"
              ></input>
            </form>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
