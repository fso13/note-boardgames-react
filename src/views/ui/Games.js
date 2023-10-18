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
import {GamesJson} from "../../static/GamesJson";
import React from "react";
import {useNavigate} from "react-router";
import {NavHashLink} from "react-router-hash-link";
import queryString from 'query-string'



const Games = () => {
    var alf = Array.from(new Set(GamesJson.map((nt) => nt.title[0])))
    console.log(alf)

    const query = queryString.parse(window.location.search);
    console.log(window.location.search)
    let players = query.players

    let navigate = useNavigate();
    return (
        <div>
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
                                        </Label> <Row>

                                        {alf.map((s, index) => {
                                            return (
                                                <Col>
                                                    <NavHashLink style={{textDecoration: 'none'}} smooth
                                                                 to={`#${s}`}>{s}</NavHashLink>

                                                </Col>

                                            )
                                        })}
                                    </Row>


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
                    const src = require(`/src/assets/images/game/${nt.id}.jpg`);

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
                                        <div name={nt.title[0]} id={nt.title[0]} className="card-img" style={{
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            paddingBottom: "100%",
                                            width: "100%",
                                            backgroundImage: `url(${src})`
                                        }}>
                                        </div>
                                    </div>

                                    <CardBody className="p-4" name={nt.title[0]} id={nt.title[0]}>
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
