import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ManImg from '../Images/Me.png';


const styles = {
    gridStyle: {
        width: '100%',
        margin: 'auto'
    }
}
class Landing extends Component {
    render() {
        return(
            <div style={styles.gridStyle}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                    src={ManImg}
                    alt=""
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Geoffrey Wiederecht</h1>
                        <hr />
                        <p>React | NodeJS | Javascript | Python | HTML/CSS</p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/geoffreywiederecht/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"   aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/gwiederecht11" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"   aria-hidden="true" />
                            </a>

                            <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square"   aria-hidden="true" />
                            </a>

                            <a href="https://www.facebook.com/geoffrey.wiederecht" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"   aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
            </div>

        )
    }
}

export default Landing;