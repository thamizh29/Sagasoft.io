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

export default function Plans() {
    return (
        <>
            <Container style={{ marginTop: '100px' }} className="container-lg">
                <center><h1>Saga Suite Plans</h1></center>

                <Row xs={1} sm={2} md={3} className="g-4 mt-5">
                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Premium</CardTitle>
                                <CardText>This is the mail service</CardText>
                                <Button color="primary">Premium</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Standard</CardTitle>
                                <CardText>This is the talk service</CardText>
                                <Button color="success">Standard</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="card-lift--hover shadow border-0" style={{ height: "40rem" }}>
                            <CardBody className="text-center">
                                <CardTitle>Premium Plus</CardTitle>
                                <CardText>This is the file service</CardText>
                                <Button color="primary">Premium Plus</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}