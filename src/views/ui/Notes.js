import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row,} from "reactstrap";
import NotesJson from "../../static/note.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const Notes = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Игротеки</title>
                    <meta id="og-title" property="og:title" content="Игротеки"/>
                </MetaTags>
            </div>
            <Row>
                {NotesJson.map((nt, index) => (
                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Card>
                            {nt.files != null ?
                                <CardImg alt={nt.title} src={nt.files[0]}/>
                                : <div></div>
                            }
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{nt.title}</CardTitle>
                                <CardSubtitle className="text-info">{nt.tags.join(", ")}</CardSubtitle>
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
