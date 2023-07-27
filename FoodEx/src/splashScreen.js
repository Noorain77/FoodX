import React from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';

export default function Splash() {
	return (
		<ImageBackground
			source={require('../assets/images/Splash.png')}
			resizeMode='cover'
			style={styles.imageBackground}
			imageStyle={{ opacity: 0.6 }}>
			<Image
				source={require('../assets/images/Splash.png')}
				style={styles.image}></Image>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2A5EE0',
	},
	image: {
		width: '100%',
		height: 900,
		resizeMode: 'cover',
	},
});