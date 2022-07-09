import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle, Col, Row, UncontrolledCarousel,
} from "reactstrap";
import React from "react";
import GamesJson from "../../static/games.json";
import {useParams} from "react-router";
import MetaTags from "react-meta-tags";


const Game = () => {

    let {id} = useParams();

    const gameJson = GamesJson.filter(function (item) {
        return item.id == id;
    })[0];

    return (
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
                                                  src: gameJson.photoUrl
                                              }]}
                        />
                    </div>
                </Col>

            </Row>
            <Row>
                <Col xs="auto">
                    <div className="bg-light p-2 border">
                        <Card>
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{gameJson.title}</CardTitle>
                                <CardSubtitle
                                    className="text-primary">от {gameJson.playersMin} до {gameJson.playersMax} игроков</CardSubtitle>
                                <CardText className="mt-3">
                                    <div className="mt-3"
                                         dangerouslySetInnerHTML={{__html: gameJson.description}}/>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Game;
