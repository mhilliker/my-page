import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Accordion className="educationAccordion">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Masters in Computer Science
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <EducationInfoGroup degree="Masters in Computer Science" date="2018 - 2020" school="Arizona State University" gpa="4.0"
                            courses={["Maching Learning", "Data Mining", "Mobile Computing", "Data Visualization", "Distributed Systems", 
                            "Deep Learning in Visual Computing", "Artificial Intelligence", "Software Testing"]} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Bachelor of Science in Computer Science
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    <EducationInfoGroup degree="BS in Computer Science" date="2013 - 2016" school="Arizona State University" gpa="3.73"
                            courses={["Distributed Software Development", "Database Management", "Computer-Aided Geometric Design", "Algorithms and Data Structures", 
                            "Cryptographic Algorithms and Protocols", "Operating Systems"]} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Bachelor of Arts in Mathematics
                                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    <EducationInfoGroup degree="BA in Mathematics" date="2013 - 2016" school="Arizona State University" gpa="3.73"
                            courses={["Applied Statistics", "Probability", "Numerical Analysis", "Complex Analysis", "Intro to Graph Theory", 
                            "Partial Differential Equations", "Cryptography"]} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    );
}

function EducationInfoGroup(props) {

    const listItems = [];
    for(const course of props.courses){
        listItems.push(<li>{course}</li>);
    }

    return (
        <Container className="educationInfoGroup">
            <Row className="titleRow">
                <Col sm={8}>{props.degree}</Col>
                <Col sm={4}>{props.date}</Col>
            </Row>
            <Row className="schoolRow">
                <Col sm={8}>{props.school}</Col>
                <Col sm={4}>{props.gpa} GPA</Col>
            </Row>
            <Row>
                <Col className="courseRow">
                    <p>Relevant Courses:</p>
                    <ul className="courseList">{listItems}</ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;