import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Geoffrey Wiederecht" scroll>
            <Navigation>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="contact">Contact</Link>
                <Link to="projects">Projects</Link>
                <Link to="aboutme">About Me</Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="contact">Contact</Link>
                <Link to="projects">Projects</Link>
                <Link to="aboutme">About Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
