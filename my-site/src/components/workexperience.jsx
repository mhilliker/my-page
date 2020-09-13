import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {Timeline, TimelineEntry, TimelineEntryList, TimelineEntryListItem, TimelineEntryDescription} from './timeline';
import FullscreenItem from './fullscreenitem';
import epicLogo from '../assets/images/epiclogo.png';
import asuLogo from '../assets/images/asulogo.png';


class Work extends React.Component {
    render() {
        return (
            <FullscreenItem id="workPage">
                <div className="workPage fullscreenContent">
                   <Jumbotron>
                    <h1>Work Experience</h1>
                    <Timeline>
                        <TimelineEntry jobTitle="Software Developer" company="Epic Systems" 
                            date="2016 - 2020 (current)" location="Madison, WI Area" icon={epicLogo}>
                                <TimelineEntryDescription>
                                As a full stack software developer at Epic, I work primarily on web and database development, 
                                leveraging the .NET stack with a NoSQL database.  I work on development projects pertaining to 
                                data analytics and visualization on Epic's dashboard application.
                                </TimelineEntryDescription>
                                <TimelineEntryList listTitle="Highlights:">
                                    <TimelineEntryListItem>
                                        Collaborated across teams and roles to design, develop, and implement solutions
                                    </TimelineEntryListItem>
                                    <TimelineEntryListItem>
                                        Travelled on-site to hospitals around the world to help with the implementation, support, 
                                        and end-user training of software
                                    </TimelineEntryListItem>
                                    <TimelineEntryListItem>
                                        Conducted user-experience research and obtained feedback from customer analysts, 
                                        administrators, nurses, physicians, and other healthcare professionals
                                    </TimelineEntryListItem>
                                    <TimelineEntryListItem>
                                        Mentored and led new developers and interns through training and their first projects
                                    </TimelineEntryListItem>
                                    <TimelineEntryListItem>
                                        Conducted over 75 phone interviews with prospective software development candidates
                                    </TimelineEntryListItem>
                                </TimelineEntryList>
                            </TimelineEntry>
                            <TimelineEntry jobTitle="Teaching Assistant and Tutor" company="Arizona State University" 
                            date="2014 - 2016" location="Tempe, AZ" icon={asuLogo}>
                                <TimelineEntryDescription>
                                As an undergraduate teaching assistant, I assist students with their coursework in CSE 340, 
                                Principles of Programming Languages, where students learn the basic theory behind programming 
                                languages and create compilers for context free languages in C and C++.  Additionally, I worked as a 
                                tutor in the engineering school's tutoring center where I helped students with engineering coursework.
                                </TimelineEntryDescription>
                                <TimelineEntryList listTitle="Highlights:">
                                    <TimelineEntryListItem>
                                        Used both technical and communication skills to explain abstract concepts and help clients solve problems
                                    </TimelineEntryListItem>
                                    <TimelineEntryListItem>
                                        Coordinated with instructors and other staff on timelines for course projects and assignments
                                    </TimelineEntryListItem>
                                </TimelineEntryList>
                            </TimelineEntry>
                    </Timeline>
                    </Jumbotron>
                </div >
            </FullscreenItem>
        );
    }
}


export default Work;