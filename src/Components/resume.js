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
                                style={{position: 'relative', height: '200px', left: '-50px', top: '30px'}}
                                />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Geoffrey Wiederecht</h2>
                        <h4 style={{color: 'grey'}}>Computer Science Student</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}} />
                        <p>
                            Junior at UC Berkeley studying Computer Science. Currently involved with ULAB ATG at Berkeley, developing
                            mobile and web-enabled applications to help improve the efficiency of laboratories around UC Berkeley's campus and within ULAB itself.
                            
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}} />
                        <h5>Address</h5>
                        <p>2425 Warring St, 94704</p>
                        <h5>Phone</h5>
                        <p>(925) 872-9246</p>
                        <h5>Web</h5>
                        <p>geoffreywiederecht.herokuapp.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '80%'}} />
                        </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={'Aug 2016'}
                            endYear={'June 2020'}
                            schoolName="UC Berkeley"
                            schoolDescription="Bachelor of Arts in Computer Science"
                            gpa="GPA: 3.5"
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
                        jobName='Luma Health'
                        jobDescription='Full Stack Software Engineering Intern'
                    />

                    <Experience 
                        startYear={'Feb 2018'}
                        endYear={'June 2018'}
                        jobName='Unibui'
                        jobDescription='iOS Engineering Intern'
                    />

                     <Experience 
                        startYear={'June 2016'}
                        endYear={'Aug 2016'}
                        jobName='Mariah Energy Dev Corporation'
                        jobDescription='Software Engineering Intern'
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                    skill='Java, Python, C, Javascript, Node.js, React.js, Rails, Swift, HTML/CSS, SQL, MongoDB'
                    />
                                                        
                    </Cell>
                </Grid>
               
            </div>
        );
    }
}

export default Resume;