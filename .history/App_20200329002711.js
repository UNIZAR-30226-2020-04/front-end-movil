// import React, { Component } from 'react';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
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
import { Font } from 'expo';

export default class App extends React.Component {
constructor () {
super ()
this.state = {fontLoaded: false}
}
async componentDidMount() {
await Font.loadAsync ({
'Roboto': require ('./assets/fonts/Roboto-Bold.ttf')
});
this.setState({fontLoaded: true});
}
render () {
return({
  this.state.fontLoaded ? (

            <Text style = {{fontFamily: 'Roboto', fontSize: 56 }}>
            SYED JAFFER SATHIK
            </Text>
                                     ) : null
            }
    </View>)
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',

},
});