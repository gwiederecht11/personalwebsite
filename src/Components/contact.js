import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import MeImg from '../Images/geoff.png';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Geoffrey Wiederecht</h2>
                            <img 
                            src={MeImg}
                           // src= "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt=""
                            style={{height: '300px'}}
                            /> 
                            <p style ={{width: '75%', margin: 'auto', paddingTop: '2em'}}>
                            Student developer studying computer science at UC Berkeley. 
                            Passionate and interested in fields such as machine learning, 
                            AI, mobile and web development, and data science. 
                            Intrigued by the capabilities of technology and motivated to use it to 
                            benefit the community around me.</p>
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                    <ListItem>
                                        <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            (925) 872-9246</ListItemContent>
                                    </ListItem>

                                    

                                    <ListItem>
                                        <ListItemContent style ={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            gwiederecht11@berkeley.edu</ListItemContent>
                                    </ListItem>

                                    
                                   
                                </List>
                        </div>
                            
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;