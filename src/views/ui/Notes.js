import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, UncontrolledCarousel} from "reactstrap";
import {NotesJson} from "../../static/NotesJson";
import React from "react";
import {useNavigate} from "react-router";
import './Notes.css';

const Notes = () => {
    let navigate = useNavigate();
    return (
        <div>
            
            <Row>
                {NotesJson.map((nt, index) => (
                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Card>
                        {nt.files != null ?
                        <div style={{position: 'relative'}}>
                                        <div>{nt.isExtension ? <span style={{
                                            position: 'absolute',
                                            top: '8px',
                                            color: "#ffffff",
                                            backgroundColor: "#3db13d"
                                        }}>дополнение</span> : ""}</div>
                                        <div className="card-img" style={{
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            paddingBottom: "100%",
                                            width: "100%",
                                            backgroundImage: `url(${nt.files[0]})`
                                        }}>
                                        </div>
                                    </div>: <div/>
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
