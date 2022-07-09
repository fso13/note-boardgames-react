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
import MetaTags from 'react-meta-tags';

const Note = () => {

    let {id} = useParams();

    const noteJson = NotesJson.filter(function (item) {
        return item.id == id;
    })[0];

    return (

        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>{noteJson.tags.join(", ")}</title>
                    <meta id="og-title" property="og:title" content={noteJson.tags.join(", ")}/>
                    <meta id="og-type" property="og:type" content="article"/>
                    <meta id="meta-description" name="og:description" content={noteJson.content}/>
                    <meta id="og-image-alt" name="og:image:alt" content={noteJson.content}/>
                    <meta id="og-image" property="og:image" content={noteJson.files[0]}/>
                    <meta id="og-image-w" property="og:image:width" content="550"/>
                    <meta id="og-image-h" property="og:image:height" content="550"/>
                </MetaTags>
            </div>
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
