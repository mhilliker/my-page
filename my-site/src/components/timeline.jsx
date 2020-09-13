import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

import '../assets/styles/timeline.scss';

export function Timeline(props) {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div className="timeline">
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export function TimelineEntry(props) {
    const icon = props.icon ? <img src={props.icon} class="iconImg" /> : ">";

    return (
        <div className="timeline-entry">
            <div className="timeline-entry-inner">
                <div className="timeline-icon">{icon}</div>
                <div className="timeline-label">
                    <h2>
                        {props.jobTitle}
                        <span>{props.date}</span>
                    </h2>
                    <h2>
                        {props.jobLocation}
                        <span>{props.location}</span>
                    </h2>
                    <h5>{props.company}</h5>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export function TimelineEntryDescription(props) {
    return (
        <p>{props.children}</p>
    );
}

export function TimelineEntryList(props) {
    return (
        <div className="timeline-entry-list">
            <p className="timeline-entry-list-title">{props.listTitle}</p>
            <ul className="timeline-entry-list-content">
                {props.children}
            </ul>
        </div>
    );
}

export function TimelineEntryListItem(props) {
    return (
        <li>{props.children}</li>
    );
}