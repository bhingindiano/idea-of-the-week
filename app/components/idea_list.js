/* jshint module: true */
import React from 'react';
import {List, ListItem, Text} from 'native-base';

var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var ParseComponent = ParseReact.Component(React);

Parse.initialize('TEST_APP_ID');
Parse.serverURL = 'http://ec2-52-31-249-67.eu-west-1.compute.amazonaws.com:1337/parse';

class IdeaList extends ParseComponent {
    constructor(props) {
        super(props);
    }

    observe(props, state) {
      return {
        ideas: new Parse.Query("Idea")
      };
    }

    renderIdeas() {
        if (this.data.ideas.length < 1) {
            return <ListItem>
                <Text>Loading...</Text>
            </ListItem>
        }
        return this.data.ideas.map(i => {
            return <ListItem key={i.objectId}>
                <Text>{ i.description }</Text>
            </ListItem>
        });
    }

    render() {
        return (
            <List>
                {this.renderIdeas()}
            </List>
        );
    }
}

module.exports = IdeaList;
