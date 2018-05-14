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
		flex: 1,
	},
	footer: {
		backgroundColor: 'black',
		flexDirection: 'column',
		height: 100,
	},
	smallFooter: {
		backgroundColor: 'black',
		flexDirection: 'column',
		height: 50,
	},
	subFooter: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderTopColor: 'white',
		borderTopWidth: 1,
	},
	logo: {
		flex: 1,
		width: null,
		height: null,
	},
	buttonContent: {
		color: 'white',
	},
	selButtonContent: {
		color: 'green',
	},
	timeContainer: {
		flexDirection: 'row'
	},
	dayText: {
		flex: 1,
		color: 'white',
	},
	timeText: {
		flex: 2,
		color: 'white',
	},
	picker: { // OrderForm Ort-Picker
		marginLeft: 5,
	},
	orderedItems: {
		marginTop: 5,
		borderTopColor: 'black',
		borderTopWidth: 2,
	},
	header2: {
		marginLeft: 5,
		marginTop: 20,
		fontSize: 24,
		fontWeight: 'bold',
	}
});