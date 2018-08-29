import React, { Component } from 'react';
import { ListView } from 'react-native';
import {
    Container,
    Content,
    Button,
    Icon,
    List,
    ListItem,
    Text
} from 'native-base';
import taskService from '../services/TodoService'

class ListItemComponent extends Component{
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id != r2.id
        })
        this.state = {
            listViewData: []
        }

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }

    edit(data){
        this.props.navigation.navigate('Details',{item: data});
    }

    delete(id, secId, rowId, rowMap){
        //remove a linha, secId, rowId, rowMap são atributos do component List
        rowMap[`${secId}${rowId}`].props.closeRow();

        //remove a task no firebase
        taskService.remove(id).then(
            console.log('Task removida com sucesso')
        )
    }

    render(){
        return (
            <Container>
                <Content>
                    <List
                    rightOpenValue={-75}
                    leftOpenValue={75}
                    dataSource={this.ds.cloneWithRows(this.props.items)}
                    renderRow={
                       data =>
                           <ListItem>
                              <Text>{data.name} | {data.detail}</Text> 
                           </ListItem>
                    }
                    renderLeftHiddenRow={
                        (data) =>
                            <Button full onPress={() => this.edit(data)}>
                                <Icon active name="information-circle"/>
                            </Button>
                    }
                    renderRightHiddenRow={
                        (data, secId, rowId, rowMap) =>
                            <Button full danger onPress={() => this.delete(data.id, secId, rowId, rowMap)}>
                                <Icon active name="trash"/>
                            </Button> 
                    }
                    >
                    </List>
                </Content>
            </Container>
        )
    }
}

export default ListItemComponent;