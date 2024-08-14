import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Media,
    Row
} from "reactstrap";

import Image from 'react-bootstrap/Image';

import React from "react";
import {GamesJson} from "../../static/GamesJson";
import {useParams} from "react-router";
import {Helmet} from "react-helmet";

const Game = () => {

    let {id} = useParams();
    const currentURL = window.location.href;
    const gameJsons = GamesJson.filter(function (item) {
        return item.id == id || item.title.includes(id);
    });

    console.log(gameJsons.length > 0)

    let gameJson = null;
    let max;
    let src;
    if (gameJsons.length > 0) {
        gameJson = gameJsons[0];
        console.log(`../../assets/images/game/${gameJson.id}.jpg`);
        max = gameJson.playersMax;
        src = require(`../../assets/images/game/${gameJson.id}.jpg`);
    }


    return (

        <>
                <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content={gameJson.title} />
        <meta property="og:image" content={src} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentURL} />
        <meta property="og:description" content={gameJson.description} />
    </Helmet>

        <div>
            {gameJson != null ? (
                <div>
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
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: '-15px',
                                                            right: '-15px',
                                                        }}> <Image style={{border: '3px solid  #2962ff'}} src={gameJson.owner} roundedCircle /></div>
                                                        <div  style={{
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "center top",
                                                            paddingBottom: "100%",
                                                            height: "100%",
                                                            backgroundImage: `url(${src})`
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
        </>
    );


};


export default Game;
