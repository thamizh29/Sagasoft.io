import React, { forwardRef } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";

// Use forwardRef to allow the parent to access this component's ref
const Plans = forwardRef((props, ref) => {
    return (
        <>
            <Container style={{ marginTop: '100px' }} className="container-lg" >
                <center><h1>Saga Suite Plans</h1></center>

                <Row xs={1} sm={2} md={3} className="g-4 mt-5">
                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Basic</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>10</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>30</li>
                                    <li>Total Drive Size</li>
                                    <li>150GB</li>
                                </ul>

                                <Button color="primary"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Basic</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Standard</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>30</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>60</li>
                                    <li>Total Drive Size</li>
                                    <li>500GB</li>
                                </ul>
                                <Button color="success"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Standard</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "30rem" }}>
                            <CardBody className="text-center d-flex flex-column justify-content-center align-items-center">
                                <CardTitle style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #333', paddingBottom: '10px', width: '100%' }}>Premium</CardTitle>
                                <CardText style={{ fontSize: '1.1rem' }}>
                                    Features
                                </CardText>
                                <ul style={{ listStyle: "none", padding: 0, fontSize: '1rem' }}>
                                    <li>Total Mail ID</li>
                                    <li>50</li>
                                    <li>MailBox Size per user</li>
                                    <li>3GB</li>
                                    <li>Total Aliase Mail ID</li>
                                    <li>90</li>
                                    <li>Total Drive Size</li>
                                    <li>2TB</li>
                                </ul>
                                <Button color="primary"
                                    href="https://dash.sagasoft.io/sagasuite/signup"
                                    target="_blank"
                                >Premium</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Plans;
