/* jshint module: true */
import React from 'react';
import {List, ListItem, Text} from 'native-base';

class IdeaList extends ParseComponent {
    constructor(props) {
        super(props);
    }

    observe(props, state) {
      return {
        ideas: new this.props.parse.Query('Idea').addDescending('updatedAt')
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
