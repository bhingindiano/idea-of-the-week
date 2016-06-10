/* jshint module: true */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, InputGroup, Input, Button, List, ListItem, Text} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);

Parse.initialize('TEST_APP_ID');
Parse.serverURL = 'http://ec2-52-31-249-67.eu-west-1.compute.amazonaws.com:1337/parse';


const styles = {
    content: {
        flexDirection: 'column',
        margin: 10,
    },
    input: {
        borderColor: '#cccccc',
        height: 80,
        flex: .7
    },
    button: {
        alignSelf: 'flex-end',
        flex: .3,
        marginTop: 5
    }
}

class PostBox extends ParseComponent {
    constructor(props) {
        super(props);
        IdeaObject = Parse.Object.extend("Idea");

        this.state = {
            idea: null
        };
    }

    getInitialState() {
        return {
            idea: ''
        }
    }

    observe(props, state) {
        return {
            ideas: new Parse.Query("Idea")
        };
    }

    post() {
        let idea = new IdeaObject();
        idea.save({description: this.state.idea});
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <InputGroup style={styles.input} borderType="regular">
                       <Input multiline={true}
                              onChangeText={(text) => this.setState({idea: text})}/>
                    </InputGroup>
                    <Button style={styles.button} onPress={this.post}>
                        Post
                    </Button>
                </Content>
            </Container>
        );
    }
}

module.exports = PostBox;
