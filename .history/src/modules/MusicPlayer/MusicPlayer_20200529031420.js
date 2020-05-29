import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	AsyncStorage,
} from 'react-native';
import Slider from 'react-native-slider';
import {Audio} from 'expo-av';
//import {Font} from 'expo-font';
import { Asset } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationEvents} from 'react-navigation';

class PlaylistItem {
	constructor(name, uri, image) {
		this.name = name;
		this.uri = uri;
		this.image = image;
	}
}


const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#FFFFFF';
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = 'Loading...';
const BUFFERING_STRING = 'Buffering...';
const RATE_SCALE = 3.0;

//var PLAYLIST = [];
var PLAYLIST_NUEVA = [];
var PLAYLIST_OLD = [
	new PlaylistItem(
		'Comfort Fit - “Sorry”',
		'http://pruebaslistenit.herokuapp.com/Cancion?idsong=13a@a.com.mp3',
		'https://images.app.goo.gl/RpPc6R2ALjVBimiN7'
	),
	new PlaylistItem(
		'Mildred Bailey – “All Of Me”',
		'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
	new PlaylistItem(
		'Podington Bear - “Rubber Robot”',
		'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
];

var PLAYLIST = [
	new PlaylistItem(
		'Comfort Fit - “Sorry”',
		'http://pruebaslistenit.herokuapp.com/Cancion?idsong=13a@a.com.mp3',
		'https://images.app.goo.gl/RpPc6R2ALjVBimiN7'
	),
	new PlaylistItem(
		'Mildred Bailey – “All Of Me”',
		'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
	new PlaylistItem(
		'Podington Bear - “Rubber Robot”',
		'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
		'https://facebook.github.io/react/img/logo_og.png'
	),
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.index = 0;
		this.isSeeking = false;
		this.shouldPlayAtEndOfSeek = false;
		this.playbackInstance = null;
		this.state = {
			playbackInstanceName: LOADING_STRING,
			playbackInstancePosition: null,
			playbackInstanceDuration: null,
			shouldPlay: false,
			isPlaying: false,
			isBuffering: false,
			isLoading: true,
			fontLoaded: false,
			volume: 1.0,
			rate: 1.0,
			portrait: null,
			
		};
	}

	storePlaylist= async () => {
		try {
		  await AsyncStorage.setItem('PlaylistNow', JSON.stringify(PLAYLIST));
		  console.log("Guardando this.user...")
		} catch (error) {
			console.log("Fallo al guardar..")
		  // Error saving data
		}
	  };

	retrievePlaylist = async () => {
		try {
		  const retrieveItem = await AsyncStorage.getItem('PlaylistNow');
		  //console.log("retrieve item:", retrieveItem)
		  if (retrieveItem !== null) {
			//We have data!!
			console.log("AQUI BN")
			const item = JSON.parse(retrieveItem)
			console.log("Playlist item: ", item);
			return item;
		  }
		} catch (error) {
		  //Error retrieving data
		  console.log("Error al obtener datos Music")
		}
	};

	componentDidMount() {
		console.log("PLAYLIST: ", PLAYLIST)
		console.log("PLAYLIST: ", this.props.route.params)
		//console.log("PLAYLIST: ", this.props.route.params.PLAYLIST)
		console.log("PLAYLIST: ", this.props)
			this.storePlaylist().then(res => {
			//const {playlist} = this.props.route.params
			this.retrievePlaylist().then( res => {
				PLAYLIST = res;
				console.log("PLAYLIST", PLAYLIST)
				Audio.setAudioModeAsync({
					allowsRecordingIOS: false,
					interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
					playsInSilentModeIOS: true,
					shouldDuckAndroid: true,
					interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
					playThroughEarpieceAndroid: true
				});
				// (async () => {
				// 	await Font.loadAsync({
				// 		roboto: require('./assets/fonts/Roboto.ttf'),
				// 	});
						this.setState({ fontLoaded: true });
				// })();
		
				this._loadNewPlaybackInstance(false);
			})

		})

		//Hacer cada X segs
		setInterval(() => {
			this.setState(() => {
				this.retrievePlaylist().then( res => {
					PLAYLIST_OLD = PLAYLIST
					PLAYLIST_NUEVA = res
					console.log("PLAYLIST_OLD",PLAYLIST_OLD)
					console.log("PLAYLIST_NUEVA",PLAYLIST_NUEVA);
					
					var playold_string = PLAYLIST_OLD.map(function(item) {
						return item['uri'].toString();
					  });
					
					var playnew_string = PLAYLIST_NUEVA.map(function(item) {
						return item['uri'].toString();
					});

					var n = playold_string.toString().localeCompare(playnew_string.toString());
					console.log("COMPARACION", playold_string.toString()==playnew_string.toString() )
					
					// var result = new Boolean(false);
					// for(element of playnew_string){
					// 	result = (playold_string.)
					// }


					 console.log("OLD", playold_string.toString())
					 console.log("NEW", playnew_string.toString())
					console.log("N: ", n)
					if(n != 0){//PLAYLIST_OLD.toString() != PLAYLIST_NUEVA.toString()
						console.log("DENTRO IFIFIFIFIFIFIFIFIFIF")
						PLAYLIST = PLAYLIST_NUEVA
						Audio.setAudioModeAsync({
							allowsRecordingIOS: false,
							interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
							playsInSilentModeIOS: true,
							shouldDuckAndroid: true,
							interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
							playThroughEarpieceAndroid: true
						});

						this.setState({ fontLoaded: true });
				
						this._loadNewPlaybackInstance(false);
					}else{
						console.log(" IGUALES")
					}
				
				});
		  	});
		},6000)
	}
	//Comprobar si nueva playlist es diferente a la vieja, y si es así acutalizar

	async _loadNewPlaybackInstance(playing) {
		if (this.playbackInstance != null) {
			await this.playbackInstance.unloadAsync();
			this.playbackInstance.setOnPlaybackStatusUpdate(null);
			this.playbackInstance = null;
		}

		const source = { uri: PLAYLIST[this.index].uri };
		const initialStatus = {
			shouldPlay: playing,
			rate: this.state.rate,
			volume: this.state.volume,
		};

		const { sound, status } = await Audio.Sound.create(
			source,
			initialStatus,
			this._onPlaybackStatusUpdate
		);
		this.playbackInstance = sound;

		this._updateScreenForLoading(false);
	}

	_updateScreenForLoading(isLoading) {
		if (isLoading) {
			this.setState({
				isPlaying: false,
				playbackInstanceName: LOADING_STRING,
				playbackInstanceDuration: null,
				playbackInstancePosition: null,
				isLoading: true,
			});
		} else {
			this.setState({
				playbackInstanceName: PLAYLIST[this.index].name,
				portrait: "http://metaltrip.com/wp-content/uploads/2015/05/Bullet-For-My-Valentine-400x400.jpg",
				isLoading: false,
			});
		}
	}

	_onPlaybackStatusUpdate = status => {
		if (status.isLoaded) {
			this.setState({
				playbackInstancePosition: status.positionMillis,
				playbackInstanceDuration: status.durationMillis,
				shouldPlay: status.shouldPlay,
				isPlaying: status.isPlaying,
				isBuffering: status.isBuffering,
				rate: status.rate,
				volume: status.volume,
			});
			if (status.didJustFinish) {
				this._advanceIndex(true);
				this._updatePlaybackInstanceForIndex(true);
			}
		} else {
			if (status.error) {
				console.log(`FATAL PLAYER ERROR: ${status.error}`);
			}
		}
	};

	_advanceIndex(forward) {
		this.index =
			(this.index + (forward ? 1 : PLAYLIST.length - 1)) %
			PLAYLIST.length;
	}

	async _updatePlaybackInstanceForIndex(playing) {
		this._updateScreenForLoading(true);

		this._loadNewPlaybackInstance(playing);
	}

	_onPlayPausePressed = () => {
		if (this.playbackInstance != null) {
			if (this.state.isPlaying) {
				this.playbackInstance.pauseAsync();
			} else {
				this.playbackInstance.playAsync();
			}
		}
	};

	_onStopPressed = () => {
		if (this.playbackInstance != null) {
			this.playbackInstance.stopAsync();
		}
	};

	_onForwardPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(true);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onBackPressed = () => {
		if (this.playbackInstance != null) {
			this._advanceIndex(false);
			this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
		}
	};

	_onVolumeSliderValueChange = value => {
		if (this.playbackInstance != null) {
			this.playbackInstance.setVolumeAsync(value);
		}
	};

	_trySetRate = async rate => {
		if (this.playbackInstance != null) {
			try {
				await this.playbackInstance.setRateAsync(rate);
			} catch (error) {
				// Rate changing could not be performed, possibly because the client's Android API is too old.
			}
		}
	};

	_onRateSliderSlidingComplete = async value => {
		this._trySetRate(value * RATE_SCALE);
	};

	_onSeekSliderValueChange = value => {
		if (this.playbackInstance != null && !this.isSeeking) {
			this.isSeeking = true;
			this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
			this.playbackInstance.pauseAsync();
		}
	};

	_onSeekSliderSlidingComplete = async value => {
		if (this.playbackInstance != null) {
			this.isSeeking = false;
			const seekPosition = value * this.state.playbackInstanceDuration;
			if (this.shouldPlayAtEndOfSeek) {
				this.playbackInstance.playFromPositionAsync(seekPosition);
			} else {
				this.playbackInstance.setPositionAsync(seekPosition);
			}
		}
	};

	_getSeekSliderPosition() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return (
				this.state.playbackInstancePosition /
				this.state.playbackInstanceDuration
			);
		}
		return 0;
	}

	_getMMSSFromMillis(millis) {
		const totalSeconds = millis / 1000;
		const seconds = Math.floor(totalSeconds % 60);
		const minutes = Math.floor(totalSeconds / 60);

		const padWithZero = number => {
			const string = number.toString();
			if (number < 10) {
				return '0' + string;
			}
			return string;
		};
		return padWithZero(minutes) + ':' + padWithZero(seconds);
	}

	_getTimestamp() {
		if (
			this.playbackInstance != null &&
			this.state.playbackInstancePosition != null &&
			this.state.playbackInstanceDuration != null
		) {
			return `${this._getMMSSFromMillis(
				this.state.playbackInstancePosition
			)} / ${this._getMMSSFromMillis(
				this.state.playbackInstanceDuration
			)}`;
		}
		return '';
	}
	
	render() {
		return !this.state.fontLoaded ? (
			<View />
		) : (
			<View style={styles.container}>
				<View style={styles.portraitContainer}>
					<Image style={styles.portrait}
						source={{uri: this.state.portrait}}
					/>
				</View>
				<View style={styles.detailsContainer}>
					<Text>
						{this.state.playbackInstanceName}
					</Text>
					<Text>
						{this.state.isBuffering ? (
							BUFFERING_STRING
						) : (
							this._getTimestamp()
						)}
						Genero: genero
					</Text>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerTopRow,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				>	
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onBackPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="fast-rewind"
								size={40}
								color="#56D5FA"
							/>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onPlayPausePressed}
						disabled={this.state.isLoading}
					>
						<View>
							{this.state.isPlaying ? (
								<MaterialIcons
									name="pause"
									size={40}
									color="#56D5FA"
								/>
							) : (
								<MaterialIcons
									name="play-arrow"
									size={40}
									color="#56D5FA"
								/>
							)}
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onStopPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="stop"
								size={40}
								color="#56D5FA"
							/>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						underlayColor={BACKGROUND_COLOR}
						style={styles.wrapper}
						onPress={this._onForwardPressed}
						disabled={this.state.isLoading}
					>
						<View>
							<MaterialIcons
								name="fast-forward"
								size={40}
								color="#56D5FA"
							/>
						</View>
					</TouchableHighlight>
				</View>
				<View
					style={[
						styles.playbackContainer,
						{
							opacity: this.state.isLoading
								? DISABLED_OPACITY
								: 1.0,
						},
					]}
				>
					<Slider
						style={styles.playbackSlider}
						value={this._getSeekSliderPosition()}
						onValueChange={this._onSeekSliderValueChange}
						onSlidingComplete={this._onSeekSliderSlidingComplete}
						thumbTintColor="#000000"
						minimumTrackTintColor="#4CCFF9"
						disabled={this.state.isLoading}
					/>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerMiddleRow,
					]}
				>
					<View style={styles.volumeContainer}>
						<View>
							<MaterialIcons
								name="volume-down"
								size={40}
								color="#56D5FA"
							/>
						</View>
						<Slider
							style={styles.volumeSlider}
							value={1}
							onValueChange={this._onVolumeSliderValueChange}
							thumbTintColor="#000000"
							minimumTrackTintColor="#4CCFF9"
						/>
						<View>
							<MaterialIcons
								name="volume-up"
								size={40}
								color="#56D5FA"
							/>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.buttonsContainerBase,
						styles.buttonsContainerBottomRow,
					]}
				>
					<View>
						<MaterialIcons
							name="call-received"
							size={40}
							color="#56D5FA"
						/>
					</View>
					<Slider
						style={styles.rateSlider}
						value={this.state.rate / RATE_SCALE}
						onSlidingComplete={this._onRateSliderSlidingComplete}
						thumbTintColor="#000000"
						minimumTrackTintColor="#4CCFF9"
					/>
					<View>
						<MaterialIcons
							name="call-made"
							size={40}
							color="#56D5FA"
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: BACKGROUND_COLOR,
	},
	portraitContainer: {
        marginTop: 80,
	},
	portrait: {
        backgroundColor:'green',
		height: 200,
		width: 200,
	},
	detailsContainer: {
		height: 40,
		marginTop: 40,
		alignItems: 'center',
	},
	playbackContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	playbackSlider: {
		alignSelf: 'stretch',
		marginLeft: 10,
		marginRight: 10,
	},
	text: {
		fontSize: FONT_SIZE,
		minHeight: FONT_SIZE,
	},
	buttonsContainerBase: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonsContainerTopRow: {
		maxHeight: 40,
		minWidth: DEVICE_WIDTH / 2.0,
		maxWidth: DEVICE_WIDTH / 2.0,
	},
	buttonsContainerMiddleRow: {
		maxHeight: 40,
		alignSelf: 'stretch',
		paddingRight: 20,
	},
	volumeContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		minWidth: DEVICE_WIDTH - 40,
		maxWidth: DEVICE_WIDTH - 40,
	},
	volumeSlider: {
		width: DEVICE_WIDTH - 80,
	},
	buttonsContainerBottomRow: {
		alignSelf: 'stretch',
	},
	rateSlider: {
		width: DEVICE_WIDTH - 80,
	},
});