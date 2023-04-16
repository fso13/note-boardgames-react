import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Media,
    Row,
} from "reactstrap";
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


                        <Col xs="auto">
                            <Media>
                                <Media body>
                                    <div className="bg-light p-2 border">
                                        <Card>
                                            <Row className="mt-3">

                                                <Col sm="8" lg="8" xl="4"
                                                     lg={{
                                                         offset: 4,
                                                         size: 5,
                                                     }}
                                                     md={{
                                                         offset: 3,
                                                         size: 5,
                                                     }}
                                                     sm={{
                                                         offset: 1,
                                                         size: 10,
                                                     }}
                                                >
                                                    <div style={{position: 'relative'}}>
                                                        <div>{gameJson.isExtension ? <span style={{
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
                                                            backgroundImage: `url(${src.default})`
                                                        }}>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <CardBody className="p-4">
                                                <CardTitle tag="h4">{gameJson.title}</CardTitle>
                                                <CardSubtitle className="mt-3">{'\n'}</CardSubtitle>
                                                <CardSubtitle
                                                    className="text-primary">от {gameJson.playersMin} до {max} игроков</CardSubtitle>
                                                <CardSubtitle
                                                    className="text-primary">{gameJson.time}</CardSubtitle>
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
