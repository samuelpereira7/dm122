import React, {Component} from 'react';
import Expo from 'expo'
import RouterManager from './src/index.js'

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      isReady:false
    }
  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Iconicons: require("native-base/Fonts/Ionicons.ttf"),
    })
    
    this.setState({
      isReady:true
    })
  }

  render(){
    if(!this.state.isReady){
        return <Expo.AppLoading />
    }

    return(
      <RouterManager />
    )
  }

}

export default App