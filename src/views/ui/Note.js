import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    Col,
    Row
} from "reactstrap";
import React, {useState} from "react";
import NotesJson from "../../static/note.json";
import {useLocation, useParams} from "react-router";
import MetaTags from 'react-meta-tags';

const Note = () => {

    let {id} = useParams();

    const noteJson = NotesJson.filter(function (item) {
        return item.id == id;
    })[0];


    const items = noteJson.files != null ? noteJson.files.map((nt, index) => {
            return {
                key: index,
                src: nt
            }
        }
    ) : [];


    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText}/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
            </CarouselItem>
        );
    });

    return (

        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>{noteJson.tags.join(", ")}</title>
                    <meta id="og-title" property="og:title" content={noteJson.tags.join(", ")}/>
                    <meta id="og-type" property="og:type" content="article"/>
                    <meta id="meta-description" name="og:description" content={noteJson.content}/>
                    <meta id="og-image-alt" name="og:image:alt" content={noteJson.content}/>
                    {noteJson.files != null ?

                        <meta id="og-image" property="og:image" content={noteJson.files[0]}/> : <div></div>}
                    <meta id="og-image-w" property="og:image:width" content="550"/>
                    <meta id="og-image-h" property="og:image:height" content="550"/>
                    <meta content={useLocation()} property="og:url"/>
                </MetaTags>
            </div>
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
                                <CardSubtitle className="text-primary">{noteJson.tags.join(", ")}</CardSubtitle>
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
                    <div className="bg-light p-2 border">

                        {noteJson.files != null ?

                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
                            </Carousel> : <div></div>
                        }
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Note;
