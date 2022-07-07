import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle, Col, Row, UncontrolledCarousel,
} from "reactstrap";
import React from "react";
import NotesJson from "../../static/note.json";
import {useParams} from "react-router";


const Note = () => {

    let {id} = useParams();

    const noteJson = NotesJson.filter(function (item) {
        return item.id == id;
    })[0];

    return (
        <div>
            <Row>
                <Col xs="auto">
                    <div className="bg-light p-2 border">
                        <Card>
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{noteJson.title}</CardTitle>
                                <CardSubtitle className="text-primary">{noteJson.tags.join(", ")}</CardSubtitle>
                                <CardText className="mt-3">
                                    <div className="mt-3"
                                         dangerouslySetInnerHTML={{__html: noteJson.content}}/>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="auto"
                     md={{
                         offset: 3,
                         size: 5,
                     }}>
                    <div className="bg-light p-2 border">
                        <UncontrolledCarousel className="img-fluid"
                                              items={noteJson.files.map((nt, index) => {
                                                      return {
                                                          key: index,
                                                          src: nt
                                                      }
                                                  }
                                              )}
                        />
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Note;
