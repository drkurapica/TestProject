//display one specific photo
'use strict';

import React, { Component } from 'react';
import {
	View,
  ListView,
	Text,
  TextInput,
	StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

class Photo extends Component{
	render() {
		var photo = this.props.photoInfo;
		var url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
		return (
			<View style={styles.imageContainer}>
        <Image
          source={{uri: url}}
          style={styles.image}
        />
      </View>
		)
	}
}

var styles = StyleSheet.create({
	imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
})

module.exports = Photo;
