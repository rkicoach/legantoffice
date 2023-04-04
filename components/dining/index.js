import React from 'react';
import $ from "jquery";
import ImageGallery from 'react-image-gallery';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import { themeColors } from '../../styles';
import { Box, Flex, Heading, Text } from '../base';

const style = {
    heading: {
        fontSize: "40px",
        fontWeight: 'bold',
        marginBottom: '30px'
    },
    paragraph: {
        color: themeColors.subtle
    },
    paraWrap: {
        marginTop: '15px',
        textAlign: 'center'
    },
    image: {
        maxWidth: '100%'
    },
    contentHead: {
        fontSize: "25px",
        fontWeight: 'bold',
        marginBottom: '15px',
        marginTop: '10px',
        textAlign: 'center'
    }
}

class Dining extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const images = [
            {
                original: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-1.jpg',
                thumbnail: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-1.jpg',
            },
            {
                original: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-2.jpg',
                thumbnail: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-2.jpg'
            },
            {
                original: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-3.jpg',
                thumbnail: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-3.jpg'
            },
            {
                original: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-4.jpg',
                thumbnail: 'https://storage.googleapis.com/teo-utils/hospitality/products/placemat-4.jpg'
            }
        ]
        return (
            <div>
                <div className="hosp-title-bar">
                    <Heading is="h1" fontSize={1} mt3 mb2>Dining</Heading>
                    <Text mb4 color={themeColors.subtle}>Outfit any dining facility with our selection of coordinating hospitality accessories.  Each item is made to order, allowing you to create the tailored collection of accessories you need.  Select from the options below to receive a custom quotation.</Text>
                </div>
                <Tabs defaultActiveKey={1} animation={false} justified id="products-tabs">
                    <Tab eventKey={1} title="Tab 1">
                        <Row>
                            <Col sm={6}>
                                <ImageGallery
                                    items={images}
                                    slideInterval={2000}
                                    showFullscreenButton={false}
                                    useBrowserFullscreen={false}
                                    showPlayButton={false}
                                    autoPlay={true}
                                />
                            </Col>
                            <Col sm={6}>
                                <Box>
                                    <Heading is="h2" fontSize={2} center mt3 mb2>Placemats</Heading>
                                    <p>Our placemat selection fills the needs of those outfitting a facility for frequent foodservice in a casual or elegant environment. They are designed to protect your table surfaces from the rigors of dining while adding a rich, luxurious look to the room. These placemats are made in the U.S.A., and have a lower profile and softer, more cushioned surface. The perfect option for any dining experience, our placemats come in a variety of colors and sizes that can assist in tying your room together.</p>
                                    <div className="hosp-product-data-container">
                                        <div className="hosp-product-data">
                                            <Text is="strong" mr2>Lead Time: </Text>
                                            <Text is="span"> 2-4 weeks</Text>
                                        </div>
                                        <div className="hosp-product-data">
                                            <Text is="strong" mr2>Minimum: </Text>
                                            <Text is="span"> 50</Text>
                                        </div>
                                    </div>
                                </Box>
                            </Col>
                        </Row>
                        <Heading is="h3" fontSize={3} center mt4 mb3>Select options to receive a quote:</Heading>
                    </Tab>
                    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
                    <Tab eventKey={4} title="Tab 4">Tab 4 content</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Dining;