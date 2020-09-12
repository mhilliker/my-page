import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import FullscreenItem from './fullscreenitem';

class Education extends React.Component {
    render() {
        return (
            <FullscreenItem id="educationPage">
                <div className="educationPage fullscreenContent">
                <Jumbotron>
                    <h1>Education</h1>
                    <EducationAccordion />
                    </Jumbotron>
                </div >
            </FullscreenItem >
        );
    }
}

function EducationAccordion() {
    return (
        <Accordion defaultActiveKey="0" className="educationAccordion">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Masters in Computer Science
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Masters in Computer Science at Arizona State University</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Bachelors of Science in Computer Science
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Bachelors of Science in Computer Science at ASU</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Bachelors of Arts in Mathematics
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Bachelors of Arts in Mathematics at ASU</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    );
}

export default Education;