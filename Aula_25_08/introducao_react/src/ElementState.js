import React, {Component} from 'react';

class ElementState extends Component{

    constructor(props){
        super(props);

        this.state = {
            counter:0,
            counter2:0
        }

        this.counter2 = 0;

        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
        setInterval(
            () =>{
                
                this.setState({
                   counter: this.state.counter + 1,
                   counter2: this.state.counter + 1
                })
                this.counter2 = this.counter2 + 1;
            },2000
        )
    }

    componentWillMount(){
        console.log('componentWillMount');
    }


    render(){
        return (
            <h2>
                Counter: {this.state.counter}
                <br/>
                Counter2: {this.counter2}
                <br/>
                Counter2: {this.state.counter2}
            </h2>
        )
    }
}

export default ElementState;