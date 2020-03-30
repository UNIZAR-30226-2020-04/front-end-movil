import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class App2 extends Component {
  render() {
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>HEAFOJSDOFDJS</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            Viva Unai!!!!!! 
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer cmon</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}