import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Media, Row, UncontrolledCarousel,} from "reactstrap";
import React from "react";
import GamesJson from "../../static/games.json";
import {useParams} from "react-router";
import MetaTags from "react-meta-tags";

const Game = () => {

    let {id} = useParams();

    const gameJsons = GamesJson.filter(function (item) {
        return item.id == id || item.title.includes(id);
    });

    console.log(gameJsons.length > 0)
    let gameJson = null;
    let max;
    let src;
    if (gameJsons.length > 0) {
        gameJson = gameJsons[0];
        max = gameJson.playersMax;
        src = require(`../../assets/images/game/${gameJson.id}.jpg`);
    }


    return (
        <div>
            {gameJson != null ? (
                <div>
                    <div className="wrapper">
                        <MetaTags>
                            <title>{gameJson.title}</title>
                            <meta id="og-title" property="og:title" content={gameJson.title}/>
                            <meta id="og-type" property="og:type" content="article"/>
                            <meta id="meta-description" name="og:description" content={gameJson.description}/>
                            <meta id="og-image-alt" name="og:image:alt" content={gameJson.description}/>
                            <meta id="og-image" property="og:image" content={gameJson.photoUrl}/>
                            <meta id="og-image-w" property="og:image:width" content="550"/>
                            <meta id="og-image-h" property="og:image:height" content="550"/>
                        </MetaTags>
                    </div>
                    <Row className="mt-3">
                        <Col xs="auto"
                             md={{
                                 offset: 3,
                                 size: 5,
                             }}>
                            <div className="bg-light p-2 border">
                                <UncontrolledCarousel className="img-fluid"
                                                      items={[{
                                                          key: 1,
                                                          src: src.default

                                                      }]}
                                />
                            </div>
                        </Col>
                        <Col xs="auto">
                            <Media>
                                <Media body>
                                    <Media heading>
                                        {gameJson.title}
                                    </Media>
                                    <div className="bg-light p-2 border">
                                        <Card>
                                            <CardBody className="p-4">
                                                <CardTitle tag="h5">{gameJson.title}</CardTitle>
                                                <CardSubtitle
                                                    className="text-primary">???? {gameJson.playersMin} ???? {max} ??????????????</CardSubtitle>
                                                <CardText className="mt-3">
                                                    <div className="mt-3"
                                                         dangerouslySetInnerHTML={{__html: gameJson.description}}/>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </div>
            ) : (<Row className="mt-3">
                <Col xs="auto"
                     md={{
                         offset: 3,
                         size: 5,
                     }}>
                    <div className="code"> 404</div>
                    <div className="message">
                        Not Found
                    </div>
                </Col>
            </Row>)}
        </div>

    );


};

export default Game;
