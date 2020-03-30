// import React, { Component } from 'react';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import * as Font from 'expo-font'
// export default class AnatomyExample extends Component {
//   render() {
    
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content>
//           <Text>
//             Viva Unai!!!!!! 
//           </Text>
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

import React from 'react';
import { StyleSheet, Text, View, AcivityIndicator } from 'react-native';
import * as Font from 'expo';
import App2 from './src/app'
import { Root } from "native-base";
import {AppLoading } from "expo";



export default class App extends React.Component {
constructor (props) {
  super (props)
  this.state = {
    fontLoaded: false
  };
}
async componentDidMount() {
  await Font.loadAsync ({
  'Roboto': require ('./Roboto.ttf'),
  'Roboto_medium': require ('./Roboto_medium.ttf')
  });
  this.setState({fontLoaded: true});
}

  
render () {
  
  if (state.fontLoaded) {
    return (
      <Root>
        <AppLoading />
      </Root>
    );
  }
  return (
                // <Text>
                // SYED JAFFER SATHIK
                // </Text>
                //<App2/>
                <View>
                  {/* <Text style={{font: 'Roboto'}}>Hola</Text>
                  <Text style={{font: 'Roboto_medium'}}>Hola</Text> */}
                  <View>
                  <App2/>
                  </View>
                </View>
                
                
        )
    }
  }
