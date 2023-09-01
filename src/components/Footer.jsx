import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../images/Facebook.svg';
import image from '../images/Instagram.svg';
import img from '../images/Twitter.svg';
import Youtube from '../images/Youtube.svg';
import Logo from '../images/Logo.png';
import myFooterCss from '../css/footer.module.css'
const Footer = () => {
  return (
    <>
    <Container>
    <Row>
        <Col>
            <div className="footer-logo p-0">
                <img src={Logo} alt="" width={200} />
            </div>
        </Col>
        <Col>
            <div className={myFooterCss.link}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </Col>
        <Col>
        <div className="social p-0">
        <img src={Image} alt="Facebook" />
        <img src={img} alt="Twitter" />
        <img src={Youtube} alt="Youtube" />
        <img src={image} alt="Instagram" />
    </div>
        </Col>
        </Row>
        <Row>
        <Col>
        <div className="footer-bottom mt-3">
            &copy; 2023 Your Company. All Rights Reserved.
        </div>
        </Col>
        </Row>
        </Container>
    </>
  )
}

export default Footer
