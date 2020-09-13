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
    const icon = props.icon ? <img src={props.icon} class="iconImg" alt="company logo" /> : ">";

    return (
        <div className="timeline-entry">
            <div className="timeline-entry-inner">
                <div className="timeline-icon">{icon}</div>
                <div className="timeline-entry-content">
                    <div className="timeline-header">
                        <h2 className="timeline-header-text">{props.jobTitle}</h2>
                        <span className="timeline-header-detail">{props.date}</span>
                    </div>
                    <div className="timeline-header">
                        <h3 className="timeline-header-text">{props.company}</h3>
                        <span className="timeline-header-detail">{props.location}</span>
                    </div>
                    
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export function TimelineEntryDescription(props) {
    return (
        <p className="timeline-entry-description">{props.children}</p>
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