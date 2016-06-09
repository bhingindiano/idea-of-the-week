/* jshint module: true */

import React, {Component} from 'react';
import {Container, Content, InputGroup, Input, Button} from 'native-base';

class PostBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    <InputGroup borderType="regular" >
                       <Input />
                    </InputGroup>

                    <Button primary>Share</Button>

                </Content>
            </Container>
        );
    }
}

module.exports = PostBox;
