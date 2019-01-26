'use strict';

import React, { Component } from 'react';
import {
	View,
  ListView,
	FlatList,
	Text,
  TextInput,
	StyleSheet,
  Image,
	Dimensions,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import { Badge } from 'react-native-elements';//third part library

import Photo from './Photo';//display photo page
import api from '../Utils/api'//api to store user's information

class Main extends Component{
	//initialize state
	constructor(props) {
		super(props);
		this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      photoInfo: {},
      sort: 'asc',
			currentPage: 1,
			isLoading: false,
			error: false,
			isActionButtonVisible: true
		}
	}
  handleChange(e){
    if (e.nativeEvent.text.length > 3) {
    	this.setState({
    		isLoading: true
    	});
      this.fetchData();
    }
  }
	//get response from webserver
	handleResponse(res) {
    if(res.photos.total === 0){
      this.setState({
        error: 'No photo was found!',
        isLoading: false,
				isActionButtonVisible: false
      })
    } else {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(res.photos.photo),
        photoInfo: res.photos.photo,
        isLoading: false,
        error: false,
				isActionButtonVisible: res.photos.pages>1?true:false
      });
    }
	}
	//the state:loding for get the photos
	componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.fetchData();
  }
	//fecth photos base on user's account
  fetchData() {
    api.getPhotos(this.state.currentPage)
    .then((jsonRes) => this.handleResponse(jsonRes))
    .catch((err) => {
      this.setState({
        isLoading: false,
        error: `There was an error: ${err}`
      })
    });
  }
	//display the clicked photo
  openPhoto(photo) {
    this.props.navigator.push({
      component: Photo,
      title: photo.title,
      passProps: {photoInfo: photo}
    })
  }
	//display the ViewGrid
  renderPhoto(rowData: string, sectionID: number, rowID: number) {
    var uri = `https://farm${rowData.farm}.staticflickr.com/${rowData.server}/${rowData.id}_${rowData.secret}.jpg`;
    return (
      <View style={styles.photContainer}>
        <TouchableHighlight onPress={() => this.openPhoto(rowData)} underlayColor="transparent">
          <Image
            source={{uri: uri}}
            style={styles.thumbnail}
          />
        </TouchableHighlight>
      </View>
    )
  }
	//event for load more button, the button will be dispeared after load all photos
	loadButtonPressed = () => {
		this.state.currentPage = this.state.currentPage +1
		this.fetchData()
  }
	//ViewGrid Page
	render() {
    var showErr = (
      this.state.error ? <Text style={styles.error}> {this.state.error} </Text> : <View></View>
    );
		return (
			<View style={styles.mainContainer}>
				<View style={styles.blankview} />
        <Text style={styles.title}>
          Recent Photos
        </Text>
				<Text style={styles.title2}>
          See what's happen in your community.
        </Text>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderPhoto.bind(this)}
            contentContainerStyle={styles.list}
            initialListSize={15}
        />
				{this.state.isActionButtonVisible ?
					<Badge
						wrapperStyle={{
							alignItems: 'center',
							justifyContent: 'center'
						}}
						containerStyle={{
							alignItems: 'center',
					    justifyContent: 'center',
							backgroundColor: '#ff0084',
							width:(Dimensions.get('window').width)*2/3
						}}
						onPress={() => this.loadButtonPressed()}
					>
	  				<Text style={styles.buttonText}>Load More</Text>
					</Badge>:null
				}
      </View>
		)
	}
}

var styles = StyleSheet.create({
	list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
		padding: 1
  },
  thumbnail: {
    width: (Dimensions.get('window').width-30)/3,
    height: (Dimensions.get('window').width-30)/3,
  },
  photContainer: {
    padding: 1
  },
	blankview:{
		marginTop: 60,
	},
	mainContainer: {
    flex: 1,
    padding: 10,
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 25,
    textAlign: 'left',
    color: '#000'
  },
	title2: {
    fontSize: 15,
    textAlign: 'left',
    color: '#000'
  },
  error: {
    color: 'red',
    padding: 1
  },
	button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0084',
    height: 47,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  }
})

module.exports = Main;
