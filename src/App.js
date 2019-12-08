import React from 'react';
import './App.css';
import styled, {keyframes} from 'styled-components';
import { Row, Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { slideInUp, fadeInRight , fadeInLeft, tada } from 'react-animations'
import Logo from "./asset3.png";
import GoogleLogo from "./google_logo.png";

const SlideInUp = styled.div`animation: 2s ${keyframes `${slideInUp}`} `;
const FadeInRight = styled.div`animation: 2s ${keyframes `${fadeInRight}`}`;
const FadeInLeft = styled.div`animation: 2s ${keyframes `${fadeInLeft}`}`;
const Tada = styled.div`animation: 2s ${keyframes `${tada}`}`;

function App() {
  return (
    <div>
      <Row >
        <Col md="1"></Col>
        <Col md="9">
          <Row className="registration">
          
            <Col md="4" className="registrationPane">
            <FadeInRight>
              <div className="registrationPane_text">
                <div id="registrationPane_title">Refining Mobile Advertising</div>
                <div className="registrationPane_text_p">Please use this form to register.</div>
                <div className="registrationPane_text_p">If you are a member, please <a href="/#" id="registrationPane_text_a">login</a>.</div>
              </div>
              </FadeInRight>  
            </Col>
            
            
            
            <Col md="8" className="registrationDetails">
            
              <div id="registrationFormDetails">
                <Tada>
                <div id="registrationFormDetails_logo">
                  <img id="registrationFormDetails_formLogo" src={Logo} alt="Form logo" />
                </div>
                </Tada>
                <div className="formDetails">
                <FadeInLeft>
                <div className="formDetails_title">
                  <h5>Register</h5>
                </div>
                </FadeInLeft>
                <FadeInRight>
                <div className="formDetails_text">
                
                  <Form>
                    
                    <FormGroup>
                        <Label for="formFullName">Full Name</Label>
                        <Input type="text" name="userFullName" id="formFullName" className="formDetails_input"/>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label for="formEmail">E-mail</Label>
                        <Input type="email" name="userEmail" id="formEmail"  className="formDetails_input" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="formPassword">Password</Label>
                        <Input type="password" name="userPassword" id="formPassword"  className="formDetails_input" />
                      </FormGroup>
                      <div className="formDetails_button">
                        <Button id="formDetails_button_text">Register</Button>
                      </div>
                      
                  </Form>
                  
                </div>
                </FadeInRight>
                </div>
                <SlideInUp>
                <div className="socialDetails">
                  <div id="socialDetails_logo" >
                    <img id="socialDetails_logo_img" src={GoogleLogo} alt="Google logo" />
                  </div>
                  <div id="socialDetails_text" md ="10">Sign in with Google</div>
                </div>
                </SlideInUp>
              </div>
            
            </Col>
            
          </Row>
        </Col>
        <Col md="2"></Col>
      </Row>

    </div>
  );
}

export default App;
