'use strict'

import React from 'react'

import {StyleSheet, View, Component, Text} from 'react-native'


const styles = StyleSheet.create({
	description: {
		fontSize: 20,
		textAlign: 'center',
		color: 'blue',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
})
class Welcome extends React.Component {
	render() {
		return (
			<View style={styles.container}>

			<Text style={styles.description}>Welcome</Text>

			</View>
		)
	}
}

module.exports = Welcome;