import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	button: {
		backgroundColor: 'black',
		borderTopWidth: 1,
		borderTopColor: 'white',
	},
	fgWhite: { color: 'white' },
	bgBlack: { backgroundColor: 'black' },
	list: {
		backgroundColor: 'black',
		flex:1,
	},
	footer: {
		backgroundColor: 'black',
		flexDirection: 'column',
		height: 100,
	},
	subFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	logo:{
		flex:1,
		width: null,
		height: null,
	},
});