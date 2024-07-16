import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { updateUser } from '../repository/authRepository';

function ProfileEdit() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('Chet');
  const [lastName, setLastName] = useState('Faker');
  const [address, setAddress] = useState('Melbourne, Australia');
  const [city, setCity] = useState('Melbourne');
  const [country, setCountry] = useState('Australia');

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // const decodedToken = jwtDecode(token);
      // setEmail(decodedToken.user.email); 
      const decodedToken = parseJwt(token);
      setEmail(decodedToken.user.email)
      console.log('email: ddd, ',decodedToken.user.email)
    }
  }, []);
  const parseJwt = (token) => {
    const base64Url = token.split('.')[1]; // Extract the payload part
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Fix base64 padding issues
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

  const onButtonClick = async (e) => {
    e.preventDefault();
    console.log('db;  ',email, firstName, lastName, address, city, country )
    const response = await updateUser( {
      email, firstName, lastName, address, city, country
    });
    localStorage.setItem('token', response.data.token);

    if (response.status === 201) {
      // Handle successful registration
      console.log('Registration successful', response.data);
      // Optionally navigate to login or home page
      navigate('/home');
    } 
  };

  return (
    <div className="content">
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Edit Profile</CardTitle>
            </CardHeader>
            <CardBody>
              <Form>
                {/* <Row>
                  <Col md="12">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row> */}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        placeholder="Home Address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <label>City</label>
                      <Input
                        placeholder="City"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label>Country</label>
                      <Input
                        placeholder="Country"
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <Button className="btn-round" color="primary" type="submit" onClick={onButtonClick}>
                      Update Profile
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProfileEdit;
