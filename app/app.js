/* jshint module: true */

import React, {Component} from 'react';
import {Container, Header, Content, Footer, Title} from 'native-base';

const SERVER_URL = 'http://ec2-52-31-249-67.eu-west-1.compute.amazonaws.com:1337/parse',
      APP_ID = 'TEST_APP_ID';

let Parse = require('parse/react-native'),
    ParseReact = require('parse-react/react-native');
    ParseComponent = ParseReact.Component(React),

    // App components
    PostBox = require('./components/post_box'),
    IdeaList = require('./components/idea_list');


class App extends Component {
    constructor(props) {
        super(props);

        Parse.initialize(APP_ID);
        Parse.serverURL = SERVER_URL;
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Idea of the Week</Title>
                </Header>

                <Content>
                    <PostBox parse={Parse}/>
                    <IdeaList parse={Parse}/>
                </Content>
            </Container>
        );
    }
}

module.exports = App;
