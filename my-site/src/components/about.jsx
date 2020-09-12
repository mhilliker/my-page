import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import FullscreenItem from './fullscreenitem';
import profilePicture from '../assets/images/profile.PNG';

class About extends React.Component {
    render() {
        return (
            <FullscreenItem id="aboutPage">
                <div className="aboutPage fullscreenContent">
                   <Jumbotron>
                    <h1>Hello, I am Mark Hilliker!</h1>
                    <img src={profilePicture} alt="profile" className="profilePic" />
                    <p>
                    I am a software engineer in the healthcare tech industry in Madison, Wisconsin.
                    My professional interests include full stack web development, machine learning, and data analytics.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                    </Jumbotron>
                </div >
            </FullscreenItem>
        );
    }
}

export default About;