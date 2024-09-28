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
            <Container ref={ref} style={{ marginTop: '100px' }} className="container-lg" ref={ref}>
                <center><h1>Saga Suite Plans</h1></center>

                <Row xs={1} sm={2} md={3} className="g-4 mt-5">
                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Premium</CardTitle>
                                <CardText>This is the mail service</CardText>
                                <Button color="primary"
                                 href="https://dash.sagasoft.io/sagasuite/signup"
                                target="_blank"
                                >Premium</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Standard</CardTitle>
                                <CardText>This is the talk service</CardText>
                                <Button color="success"
                                href="https://dash.sagasoft.io/sagasuite/signup"
                                target="_blank"
                                >Standard</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Premium Plus</CardTitle>
                                <CardText>This is the file service</CardText>
                                <Button color="primary"
                                 href="https://dash.sagasoft.io/sagasuite/signup"
                                target="_blank"
                                >Premium Plus</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Plans;
