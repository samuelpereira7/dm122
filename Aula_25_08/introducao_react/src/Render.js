import React, { Component } from 'react'

class Render extends Component{
    constructor(props){
        super(props)

        this.state = {
            show:true
        }

        //Binding
        this.hide = this.hide.bind(this);
    }

    hide(){
        if(this.state.show){
            this.setState({show:false})
        } else {
            this.setState({show:true})
        }
    }

    render(){
        return (
            <div>
                <button onClick={this.hide}>Hide</button>
                <Message show={this.state.show}/>
            </div>
        )
    }
}

const Message = props =>{
    
    if (!props.show) {
        return null
    }

    return(
        <h3>Show Component...</h3>
    )
}

export default Render;