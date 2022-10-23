import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    UncontrolledAccordion
} from "reactstrap";
import GamesJson from "../../static/games.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const qs = require('query-string');


const Games = () => {
    const query = qs.parse(window.location.search);
    console.log(window.location.search)
    let players = query.players

    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Коллекция игр</title>
                    <meta id="og-title" property="og:title" content="Коллекция игр"/>
                </MetaTags>
            </div>
            <div>
                <div>
                    <UncontrolledAccordion
                        toggle={function noRefCheck() {
                        }}
                    >
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Фильтр
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Form>
                                    <FormGroup row>
                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Для количество игроков
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={players === undefined ? 1 : players}
                                                id="players"
                                                name="players"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                                <option>
                                                    6
                                                </option>
                                                <option>
                                                    7
                                                </option>
                                                <option>
                                                    8
                                                </option>
                                                <option>
                                                    9
                                                </option>
                                            </Input>
                                        </Col>
                                        <Label
                                            for="exampleSelect">
                                        </Label>
                                        <Col
                                            sm={{
                                                size: 1
                                            }}>
                                            <Button>
                                                Поиск
                                            </Button>
                                        </Col>
                                        <Label
                                            for="exampleSelect">
                                        </Label>
                                        <Col>
                                            <Button onClick={() => {
                                                const url = new URL(window.location);
                                                url.searchParams.delete('players');
                                                window.history.replaceState(null, null, url)
                                                navigate(`/games`)
                                            }}>
                                                Очистить
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>

                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
            </div>
            <br/>
            <Row>
                {GamesJson.map((nt, index) => {
                    const src = require(`../../assets/images/game/${nt.id}.jpg`);
                    if ((players === undefined || players === '' || nt.playersMin <= players) && (players === undefined || players === '' || nt.playersMax >= players)) {
                        return (
                            <Col sm="6" lg="6" xl="3" key={index}>
                                <Card>
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
                                            backgroundImage: `url(${src.default})`
                                        }}>
                                        </div>
                                    </div>

                                    <CardBody className="p-4">
                                        <CardTitle tag="h5">{nt.title}</CardTitle>
                                        <CardSubtitle
                                            className="text-primary">от {nt.playersMin} до {nt.playersMax} игроков</CardSubtitle>
                                        <CardSubtitle
                                            className="text-primary">{nt.time}</CardSubtitle>
                                        <CardText className="mt-3 truncate-text">
                                            <div className="mt-3 truncate-text"
                                                 dangerouslySetInnerHTML={{__html: nt.descriptionShort}}/>
                                        </CardText>
                                        <Button style={{opacity: 0, height: '0px', width: '0px', padding: 0}}></Button>
                                        <Button style={{zIndex: 20, position: 'absolute'}} color="primary"
                                                onClick={() => navigate(`/games/${nt.id}`)}>Читать
                                            далее</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        );
                    }
                })}
            </Row>
        </div>
    );
};

export default Games;
