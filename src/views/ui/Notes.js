import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, UncontrolledCarousel} from "reactstrap";
import NotesJson from "../../static/note.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";
import './Notes.css';

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
                                <UncontrolledCarousel
                                    className="img-fluid"
                                    interval={false}
                                    items={nt.files.map((nt, index) => {
                                            return {
                                                key: index,
                                                src: nt
                                            }
                                        }
                                    )}
                                /> : <div/>
                            }

                            {/*{nt.files != null ?*/}
                            {/*    <CardImg alt={nt.title} src={nt.files[0]}/> : <div></div>*/}
                            {/*}*/}
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{nt.title}</CardTitle>
                                <CardSubtitle className="text-info">
                                    {
                                        nt.tags.map((tag) => {
                                            return (<div><a
                                                href={`#/games/${tag.title}`}>{tag.title + '(' + tag.count + ')'}</a>
                                            </div>)
                                        })
                                    }
                                </CardSubtitle>
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
