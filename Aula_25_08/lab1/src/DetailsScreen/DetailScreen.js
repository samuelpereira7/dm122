import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Text } from 'native-base';
import Style from '../layout/Styles';
import FormComponent from './FormComponent';

class DetailScreen extends Component{
    constructor(props){
        super(props);

        this.state = {
            title:"Screen Details"
        }
    }

    componentWillMount(){
        const {item} = this.props.navigation.state.params;
        this.taskToEdit = item;
    }

    render() {
        const { header, color } = Style;
        return (
            <Container>
                <Content padder>
                    <FormComponent task={this.taskToEdit} />
                </Content>
            </Container>
        )
    }
}

export default DetailScreen;