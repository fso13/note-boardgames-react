import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, UncontrolledCarousel,} from "reactstrap";
import React from "react";
import NotesJson from "../../static/note.json";
import {useLocation, useParams} from "react-router";
import {Helmet} from "react-helmet";

const Note = () => {

    let {id} = useParams();

    const noteJson = NotesJson.filter(function (item) {
        return item.id == id;
    })[0];

    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <meta property="og:type" content="website"></meta>
                <title>{noteJson.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="description" content={noteJson.content} />
                <meta name="og:description" content={noteJson.content} />
                <meta property="og:description" content={noteJson.content} />
                <meta property="og:title" content={noteJson.title} />
                <meta property="og:image" content={noteJson.files[0]} />
                <meta property="og:image:alt" content={noteJson.content} />
            </Helmet>
            <Row>
                <Col xs="auto"
                     md={{
                         offset: 2,
                         size: 7,
                     }}>
                    <div className="bg-light p-2 border">
                        <Card>
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{noteJson.title}</CardTitle>
                                <CardSubtitle className="text-primary">{
                                    noteJson.tags.map((tag) => {
                                        return (<div><a
                                            href={`#/games/${tag.title}`}>{tag.title + '(' + tag.count + ')'}</a></div>)
                                    })
                                }</CardSubtitle>
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
                         offset: 2,
                         size: 7,
                     }}>
                    <div>
                        {noteJson.videos != null ?
                            <iframe width="100%" height="315" src={`${noteJson.videos}`} title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            : <div></div>}
                    </div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="auto"
                     md={{
                         offset: 2,
                         size: 7,
                     }}>
                    <div className="bg-light p-2 border">
                        {noteJson.files != null ?

                            <UncontrolledCarousel className="img-fluid" interval={false}
                                                  items={noteJson.files.map((nt, index) => {
                                                          return {
                                                              key: index,
                                                              src: nt
                                                          }
                                                      }
                                                  )}
                            /> : <div/>
                        }
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Note;
