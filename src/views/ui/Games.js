import {
    Row,
    Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Card,
} from "reactstrap";
import GamesJson from "../../static/games.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const Games = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Коллекция игр</title>
                    <meta id="og-title" property="og:title" content="Коллекция игр"/>
                </MetaTags>
            </div>
            <Row>
                {GamesJson.map((nt, index) => (

                    <Col sm="6" lg="6" xl="3" key={index}>
                        <Card>
                            <CardImg alt="Card image cap" src={nt.photoUrl}/>
                            <CardBody className="p-4">
                                <CardTitle tag="h5">{nt.title}</CardTitle>
                                <CardSubtitle
                                    className="text-primary">от {nt.playersMin} до {nt.playersMax} игроков</CardSubtitle>
                                <CardText className="mt-3 truncate-text">
                                    <div className="mt-3 truncate-text"
                                         dangerouslySetInnerHTML={{__html: nt.descriptionShort}}/>
                                </CardText>
                                <Button color="primary" onClick={() => navigate(`/games/${nt.id}`)}>Читать
                                    далее</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Games;
