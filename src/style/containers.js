import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	button: {
		backgroundColor: 'black',
		borderTopWidth: 1,
		borderTopColor: 'white',
	},
	buttonContent: {
		color: 'white'
	},
	header: {
		backgroundColor: 'black'
	},
	footer: {
		backgroundColor: 'black',
		flexDirection: 'column',
		height: 100,
	},
	subFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	}
});