import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid> 
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Geoffrey Wiederecht</h2>
                        <h4 style={{color: 'grey'}}>Computer Science Student</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Hello this is some random stuff. Not really sure what this does.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(925) 872-9246</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={'Aug 2016'}
                            endYear={'June 2020'}
                            schoolName="UC Berkeley"
                            schoolDescription="Bachelor of Arts in Computer Science"
                            />
                            <Education 
                                startYear={'Aug 2012'}
                                endYear={'June 2016'}
                                schoolName="Amador Valley Highschool"
                                schoolDescription="GPA: 4.45/4.0"
                            />
                            <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                    
                    <Experience 
                        startYear={'May 2018'}
                        endYear={'Aug 2018'}
                        jobName='Job Job'
                        jobDescription='wefoijwefoijwefoijwefoijwef'
                    />

                    <Experience 
                        startYear={2000}
                        endYear={2323}
                        jobName='Second Job'
                        jobDescription='wefoijwefoijwefoijwefoijwef'
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                    skill='Javascript'
                    progress={80}
                    />
                    <Skills 
                    skill='NodeJS'
                    progress={80}
                    />
                    <Skills 
                    skill='ReactJS'
                    progress={70}
                    />
                    <Skills 
                    skill='HTML/CSS'
                    progress={50}
                    />
                                                        
                    </Cell>
                </Grid>
               
            </div>
        );
    }
}

export default Resume;