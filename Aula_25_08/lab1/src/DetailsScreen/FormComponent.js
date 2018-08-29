import React, { Component } from 'react';
import {
    Container,
    Content,
    Button,
    Text,
    Form,
    Item,
    Picker,
    Input

} from 'native-base';

import Task from '../model/Task';
import taskService from '../services/TodoService';

class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priority: 'urgente',
            name: '',
            detail: ''
        }

        this.onSave = this.onSave.bind(this);
    }

    onSave() {
        const {task} = this.props;
        if(!task){//item null então é adição
            const { name, detail, priority } = this.state;
            let newTask = new Task(name, detail, priority);
            taskService.add(newTask).then(
                console.log('Dados salvos com sucesso')
            );   
        } else {
            task.name = this.state.name;
            task.detail = this.state.detail;
            task.priority = this.state.priority;
            taskService.edit(task).then(
                console.log('Dados editados com sucesso')
            )
        }
    }

    onValueChange(value){
        this.setState({
            priority:value
        })
    }

    componentWillMount(){//atualiza os campos do form com os dados para editar
        const {task} = this.props;
        if(task){
            this.setState({
                priority:task.priority,
                name:task.name,
                detail:task.detail
            });
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                value={this.state.name}
                                placeholder="Task"
                                onChangeText={(name) => this.setState({ name })} />
                        </Item>
                        <Item>
                            <Input
                                value={this.state.detail}
                                placeholder="Detalhes"
                                onChangeText={(detail) => this.setState({ detail })}
                            />
                        </Item>
                        <Picker note={true} mode="dropdown"
                            selectedValue={this.state.priority}
                            onValueChange={this.onValueChange.bind(this)}>
                            <Picker.Item label="Urgente" value="urgente" />
                            <Picker.Item label="Média" value="media" />
                            <Picker.Item label="Baixa" value="baixa" />
                        </Picker>
                        <Button full onPress={this.onSave}>
                            <Text>Salvar</Text> 
                        </Button> 
                        </Form> 
                        </Content> 
                    </Container>
        )
    }
}

export default FormComponent;
