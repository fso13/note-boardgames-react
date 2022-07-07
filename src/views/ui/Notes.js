import {
    Row,
    Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Card,
} from "reactstrap";
import NotesJson from "../../static/note.json";
import React from "react";
import {useNavigate} from "react-router";

const Notes = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Row>
                {NotesJson.map((nt, index) => (
                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Card>
                            <CardImg alt="Card image cap" src={nt.files[0]}/>
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{nt.title}</CardTitle>
                                <CardSubtitle className="text-primary">{nt.tags.join(", ")}</CardSubtitle>
                                <CardText className="mt-3 truncate-text">
                                    <div className="mt-3 truncate-text" dangerouslySetInnerHTML={{__html: nt.content}}/>
                                </CardText>
                                <Button color="primary" onClick={() => navigate(`/notes/${nt.id}`)}>Читать
                                    далее</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Notes;
