import React from 'react';
import './EventsSpace.css';
import { Row, Col } from 'react-bootstrap';
import XCard from '../../Assets/Cards/XCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OurSpace from './OurSpace';
import SpaceKitchen from './SpaceKitchen/SpaceKitchen';
import WeOffer from './WeOffer/WeOffer';
import Host from './Host/Host';
import { Link as Scroll } from 'react-scroll';

const EventsSpace = () => {

    const HorizontalCardText = 'Нашиот простор се прилагодува според потребите на вашиот настан. Седум различни простори и Space Kitchen. \n \n Наменски создадени да се прилагодуваат и менуваат во согласност со типот на настан кој го организирате. \n \n Организираме конференции до 150 учесници и обуки и предавања за групи до 20 учесници. Контактирај не за да ви хостираме одличен настан.'

    return (
        <Row className='EventsSpace'>
            <Col md={12}>
                <XCard
                    title='Простор за настани'
                    text={HorizontalCardText}
                    image='/homepage/AboutUs/prostor za nastani'
                >
                    <Scroll spy={true} smooth={true} duration={500} to='host' className='blackBtn btn'>
                        <FontAwesomeIcon icon='plus' /> <span> Букирај не</span>
                    </Scroll>
                </XCard>
            </Col>
            <OurSpace />
            <SpaceKitchen />
            <WeOffer />
            <Host />
        </Row>
    )
}

export default EventsSpace;