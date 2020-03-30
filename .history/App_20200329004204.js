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
import app from './src/app'

export default class App extends React.Component {
constructor () {
super ()
this.state = {fontLoaded: false}
}
async componentDidMount() {
  await Font.loadAsync ({
  'Roboto': require ('./Roboto.ttf')
  });
  this.setState({fontLoaded: true});
}
  
render () {
    return (
                <Text>
                SYED JAFFER SATHIK
                </Text>
                <app></app>
        )
    }
  }
