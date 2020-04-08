import React, { Component } from 'react'
import {
  Animated,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  TabBar,
  TabViewAnimated,
  TabViewPagerPan,
  TabViewPagerScroll,
} from 'react-native-tab-view'
import PropTypes from 'prop-types'
import { image } from '../../utils'

import profileStyles from './ProfileStyle'

const styles = StyleSheet.create({ ...profileStyles })

class Profile3 extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    tabContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        imageHeight: PropTypes.number,
        imageWidth: PropTypes.number,
        postWidth: PropTypes.number,
      })
    ).isRequired,
  }

  static defaultProps = {
    containerStyle: {},
    tabContainerStyle: {},
  }

  state = {
    tabs: {
      index: 0,
      routes: [
        { key: '1', title: 'PHOTOS', count: 687 },
        { key: '3', title: 'FOLLOWERS', count: '1.3 M' },
        { key: '2', title: 'FOLLOWING', count: 90 },
      ],
    },
    postsMasonry: {},
  }

  componentWillMount() {
    this.setState({
      postsMasonry: image.mansonry(this.props.posts, 'imageHeight'),
    })
  }

  _handleIndexChange = index => {
    this.setState({
      tabs: {
        ...this.state.tabs,
        index,
      },
    })
  }

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorTab}
        pressOpacity={0.8}
        renderLabel={this._renderLabel(props)}
        style={styles.tabBar}
      />
    )
  }

  _renderScene = ({ route: { key } }) => {
    switch (key) {
      case '1':
        return this.renderMansonry2Col()
      case '2':
        return this.renderMansonry2Col()
      case '3':
        return this.renderMansonry2Col()
      default:
        return <View />
    }
  }

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? 'black' : 'gray')
    )
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    })

    return (
      <View style={styles.tabRow}>
        <Animated.Text style={[styles.tabLabelNumber, { color }]}>
          {route.count}
        </Animated.Text>
        <Animated.Text style={[styles.tabLabelText, { color }]}>
          {route.title}
        </Animated.Text>
      </View>
    )
  }

  _renderPager = props => {
    return Platform.OS === 'ios' ? (
      <TabViewPagerScroll {...props} />
    ) : (
      <TabViewPagerPan {...props} />
    )
  }

  renderContactHeader = () => {
    const { avatar, avatarBackground, name, bio } = this.props
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: avatarBackground,
            }}
            style={styles.coverImage}
          >
            <View style={styles.coverTitleContainer}>
              <Text style={styles.coverTitle} />
            </View>
            <View style={styles.coverMetaContainer}>
              <Text style={styles.coverName}>{name}</Text>
              <Text style={styles.coverBio}>{bio}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
    )
  }

  renderMansonry2Col = () => {
    return (
      <View style={styles.mansonryContainer}>
        <View>
          <Posts
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.leftCol}
          />
        </View>
        <View>
          <Posts
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.rightCol}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>
            {this.renderContactHeader()}
            <TabViewAnimated
              navigationState={this.state.tabs}
              onIndexChange={this._handleIndexChange}
              renderHeader={this._renderHeader}
              renderPager={this._renderPager}
              renderScene={this._renderScene}
              style={[styles.tabContainer, this.props.tabContainerStyle]}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default 
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Element from '../../DashBoard/containers/element'

// const Tabs = createBottomTabNavigator();
// const Menu = createStackNavigator();
// export default class Profile extends Component{
//   state={
//     user:{
//       email: "edu@edu.edu",
//       username: "ediaz",
//       info: "info"
//     }
//   }
//   goToSettings = () => {this.props.navigation.navigate("Settings")}

  
  // render(){
  //   return(
  //     <View style={styles.container}>
  //       <ScrollView style={styles.screen}>

  //         {/* Contenedor de info y imagen */}
  //         <View style={{flexDirection : 'row', height: 200, marginTop: 50, marginLeft: 10, marginRight: 10}}>
  //           <View style={styles.info}>
  //             <View style={{marginLeft: 5}}>
  //               <Text style={[styles.text, {fontSize: 24,fontWeight: '600', marginTop: 10}]}>{this.state.user.username}</Text>
  //               <Button title="Settings" onPress={this.goToSettings}/>
  //             </View>
  //           </View>
  //           <View style={styles.profileImage}>
  //             <Image source={require('../../../Wallpapers/profileImage.jpg')} style={{flex:1,width:null, height: null, resizeMode: 'cover'}} />
  //           </View>
  //         </View>
          

  //         <View style={styles.container}>
  //           <Text style={styles.title}>
  //             Your songs 
  //           </Text>
  //           <View style={{height: 200, marginTop: 20}}>
  //             <ScrollView
  //               horizontal={true}
  //             >
  //               <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg'}} album_name="Venom" song_name="cualquiera"></Element>
  //             </ScrollView>
  //           </View>
  //         </View>


  //         <View style={styles.container}>
  //           <Text style={styles.title}>
  //             Your playlists
  //           </Text>
  //           <View style={{height: 200, marginTop: 20}}>
  //             <ScrollView
  //               horizontal={true}
  //             >
  //               <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'https://bucket3.glanacion.com/anexos/fotos/79/2667179h1080.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //             </ScrollView>
  //           </View>
  //         </View>

  //         <View style={styles.container}>
  //           <Text style={styles.title}>
  //             Your podcasts
  //           </Text>
  //           <View style={{height: 200, marginTop: 20}}>
  //             <ScrollView
  //               horizontal={true}
  //             >
  //               <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //               <Element type='song' image={{uri: 'https://www.federico-toledo.com/wp-content/uploads/2017/07/podcast-image.jpg'}} album_name="Redención" song_name="cualquiera"></Element>
  //             </ScrollView>
  //           </View>
  //         </View>
  //       </ScrollView>
  //     </View>
      
  //   );
  // }
  // }


  // const styles = StyleSheet.create({
  //   info: {
  //     flex: 1,
  //     flexDirection : 'row'
  //   },

  //   profileImage: {
  //     flex: 1,

  //   },

  //   container: {
  //     flex:1,
  //     backgroundColor: '#000',
  //     paddingTop: 20,
  //   },

  //   screen: {
  //     marginTop: 0,
  //     backgroundColor: '#000',   
  //     resizeMode: "cover", 
  //   },
    
  //   text: {
  //     color : 'white'
  //   },

  //   container: {
  //     flex:1,
  //     backgroundColor: '#000',
  //     paddingTop: 20
  //   },

  //   title:{
  //     color:'white',//'#64EE85',
  //     fontSize: 24,
  //     fontWeight: '600',
  //     paddingHorizontal: 20
  //   },

  // });
  
  