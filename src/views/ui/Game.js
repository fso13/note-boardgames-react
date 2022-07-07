import {
    Card,
    CardBody, CardImg,
    CardSubtitle,
    CardText,
    CardTitle, Col, Row, UncontrolledCarousel,
} from "reactstrap";
import React from "react";
import GamesJson from "../../static/games.json";
import {useParams} from "react-router";


const Game = () => {

    let {id} = useParams();

    const gameJson = GamesJson.filter(function (item) {
        return item.id == id;
    })[0];

    return (
        <div>
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
