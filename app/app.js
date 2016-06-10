/* jshint module: true */

import React, {Component} from 'react';
import {Container, Header, Content, Footer, Title} from 'native-base';

let PostBox = require('./components/post_box');
let IdeaList = require('./components/idea_list');

class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Idea of the Week</Title>
                </Header>

                <Content>
                    <PostBox/>
                    <IdeaList/>
                </Content>

                <Footer>
                </Footer>
            </Container>
        );
    }
}

module.exports = App;
