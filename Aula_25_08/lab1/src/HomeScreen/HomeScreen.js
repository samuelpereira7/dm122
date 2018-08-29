import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Fab, Right, Icon, Text } from 'native-base';
import Style from '../layout/Styles';
import ListItemComponent from './ListItemComponent';
import taskService from '../services/TodoService';

class HomeScreen extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            title:"DM122",
            tasks:[]
        }

        //bindings
        this.goToAdd = this.goToAdd.bind(this);
    }

    goToAdd(){
        this.props.navigation.navigate('Details',{item: null});
    }

    componentWillMount(){
        taskService.listAll(
            tasks => {
                this.setState({
                    tasks
                })
            }
        )
    }

    render(){
        const { header, color } = Style;
        return (
            <Container>
                <Header style={[header, color]}>
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                </Header>
                <Content padder>
                    <ListItemComponent 
                        items={this.state.tasks}
                        navigation={this.props.navigation}
                    />
                </Content>
                <Fab position="bottomRight" style={color}
                     onPress={() => {this.goToAdd()}}>
                 <Icon name="add"/>   
                </Fab>
            </Container>
        )
    }
}

export default HomeScreen;