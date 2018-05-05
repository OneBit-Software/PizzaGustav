import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#000',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		height: 100
	},
	image: {
		height: 88,
		width: 88,
		margin:5,
		resizeMode: 'stretch'
	},
	subContainer:{
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flex:1,
		margin: 5
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	price: {
		
	},
	orderText: {
		textAlignVertical: 'center',
		marginRight: 30,
	},
	subSubContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		marginRight: 25,
	},
	buttonIcon: {
		width: 30,
		textAlign: 'center',
		left: -2.5,
	},
	button: {
		borderRadius: 15,
		borderWidth: 2,
		borderColor: '#000000',
		padding: 0,
		width: 30,
	},
	input:{
		borderWidth: 1,
		borderColor: '#000000',
		width: 30,
		padding: 0,
		textAlign: 'center',
	}
});