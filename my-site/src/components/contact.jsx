import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import FullscreenItem from './fullscreenitem';


class Contact extends React.Component {
    render() {
        return (
            <FullscreenItem id="contactPage">
                <div className="contactPage fullscreenContent">
                   <Jumbotron>
                        <h1>Contact</h1>
                        <p>Feel free to reach out if you want to collaborate on some work, projects, or ideas.</p>
                        <Container className="align-items-center">
                            <ListGroup horizontal className="justify-content-center">
                                <ListGroup.Item>
                                    <ContactItem url="https://www.linkedin.com/in/mhilliker/" iconName="linkedin" contactType="LinkedIn" />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <ContactItem url="https://github.com/mhilliker" iconName="github" contactType="Github" />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <ContactItem url="mailto:mark.h.utilities@gmail.com" iconName="envelope" contactType="Email" />
                                </ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </Jumbotron>
                </div>
            </FullscreenItem>
        );
    }
}

function ContactItem(props) {
    return (
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-${props.contactType}`}>{props.contactType}</Tooltip>}>
            <a href={props.url} style={{color: "grey"}} target="_blank">
                <i className={"fa fa-" + props.iconName}></i>
            </a>
        </OverlayTrigger>
    );
}

export default Contact;