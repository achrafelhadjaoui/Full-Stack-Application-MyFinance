import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ProfileEdit() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('Chet');
  const [lastName, setLastName] = useState('Faker');
  const [address, setAddress] = useState('Melbourne, Australia');
  const [city, setCity] = useState('Melbourne');
  const [country, setCountry] = useState('Australia');

  const onButtonClick = (e) => {
    e.preventDefault();
    // Logic to handle form submission or data update
    console.log('Form submitted:', { email, firstName, lastName, address, city, country });
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
                <Row>
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
                </Row>
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
