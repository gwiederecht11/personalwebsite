import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ) {
            return (
        <div className="projects-grid">
             <Card shadow={5} style={{width: '420px', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '300px', background: 'url(https://cdn2.iconfinder.com/data/icons/fletro-long-shadow-google-service/512/Google_Calendar.png) center / cover'}}>MeetUps</CardTitle>
                    <CardText>
                        A web-application that matches user's Google calendars to find free times to meet.
                    </CardText>
                    <div className="btn-group">
                        <CardActions border>
                            <a href="https://github.com/gwiederecht11/calendar" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            
                        <a href="https://drive.google.com/file/d/1aIZj5i5N4majt9vZsut4wOgqwFCugMj0/view" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo</Button>
                        </a>
                        </CardActions>
                    </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
               </Card>


               <Card shadow={5} style={{width: '420px', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '300px', background: 'url(https://i.ytimg.com/vi/NiEABxi8G4U/maxresdefault.jpg) center / cover'}}>PokePortal</CardTitle>
                    <CardText>
                        A web-application allowing users to capture, manage, and trade Pokemon through a portal.
                    </CardText>
                    <div className="btn-group">
                        <CardActions border>
                            <a href="https://github.com/gwiederecht11/calendar" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            
                        <a href="https://drive.google.com/file/d/18WQGhiBhzETrG1D68-M5_bDLAC5DGDTq/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                <Button colored>LiveDemo</Button>
                        </a>
                        </CardActions>
                    </div>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
               </Card>

            
        </div>         
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                     <Card shadow={5} style={{width: '420px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '300px', background: 'url(https://actionagogo.com/wp-content/uploads/2016/08/BoxHeadZombieWars.jpg) center / cover'}}>Boxhead</CardTitle>
                            <CardText>
                                A java application for a 2D version of Call of Duty Zombies.
                            </CardText>
                            <div className="btn-group">
                                <CardActions border>
                                    <a href="https://github.com/gwiederecht11/Boxhead" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                    
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                        <Button colored>LiveDemo</Button>
                                </a>
                                </CardActions>
                            </div>
                        
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                       </Card>
                </div>  
            )
        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{width: '420px', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '300px', background: 'url(http://wicse.blogs.unr.edu/files/2016/02/WICSE-LOGO.png) center / cover'}}>Service Engine</CardTitle>
                    <CardText>
                        A web-application to automate internal workflows within the ULAB organization.
                    </CardText>
                    <CardActions border>

                        <div className="btn-group">
                            <a href="https://github.com/gwiederecht11/service-engine" rel="noopener noreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                            <Button colored>LiveDemo</Button>
                        </div>
                        
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
               </Card>
                
            )
        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{width: '420px', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '300px', background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>Personal Website</CardTitle>
                <CardText>
                    My personal website!
                </CardText>
                <CardActions border>

                    <div className="btn-group">
                        <a href="https://github.com/gwiederecht11/personalwebsite" rel="noopener noreferrer" target="_blank">
                            <Button colored>GitHub</Button>
                        </a>
                        <Button colored>LiveDemo</Button>
                    </div>
                    
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
           </Card>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple> 
                    <Tab>Rails</Tab>
                    <Tab>Java</Tab>
                    <Tab>Flask</Tab>
                    <Tab>React</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;