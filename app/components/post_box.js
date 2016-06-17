/* jshint module: true */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, InputGroup, Input, Button, Text} from 'native-base';

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

class PostBox extends Component {
    constructor(props) {
        super(props);
        IdeaObject = this.props.parse.Object.extend("Idea");

        this.state = {
            description: null
        };
    }

    post() {
        if(this.state.description) {
            let Idea = new IdeaObject();
            Idea.save({description: this.state.description});
        }
    }

    render() {
        return (
            <Container>
                <Content style={styles.content}>
                    <Text>Post your idea no matter how crazy it sounds</Text>
                    <InputGroup style={styles.input} borderType="regular">
                       <Input multiline={true}
                              onChangeText={(text) => this.setState({description: text})}/>
                    </InputGroup>
                    <Button style={styles.button} onPress={()=>this.post()}>
                        Post
                    </Button>
                </Content>
            </Container>
        );
    }
}

module.exports = PostBox;
