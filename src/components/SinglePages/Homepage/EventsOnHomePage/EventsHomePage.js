import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../../Context/MyContext';
import YCard from '../../../Assets/Cards/YCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Homepage.css';

const EventsHomePage = () => {
    const { upcomingEvents } = useContext(MyContext);

    const events = upcomingEvents.map((event, i) => (
        <YCard
            key={i}
            location={event.url}
            image={`/events/${event.image}.jpg`}
            title={event.title}
            text={event.text}
        />
    ))

    return (
        <Row className='EventsHomePage'>
            <Col md={12}>
                <h1 className='text-center h1-border'>Настани</h1>
            </Col>
            {events}
            <Col md={12}>
                <Link className='calendarBtn btn' to='/events'>
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} size='lg' />
                КАЛЕНДАР НА НАСТАНИ
            </Link>
            </Col>
        </Row>
    )
}
export default EventsHomePage;