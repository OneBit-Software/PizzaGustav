import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        flex: 1,
        maxHeight: 200,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        marginTop: 10,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    countContainer: {
        flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        marginLeft: 10,
        marginRight: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
        marginLeft: 10,
        marginRight: 10,
    },
    contentCol1: {
        flexDirection: 'column',
        flex: 1,
    },
    contentCol2: {
        flexDirection: 'column',
        flex: 2,
    },
    checkbox: {
        flex: 1,
        padding: 10,
    },
    checkboxLabel: {
        color: 'black',
        fontSize: 16,
    },
    descriptionText: {
        flex: 1,
        padding: 10,
    },
    header2: {
		textAlignVertical: 'center',
        marginRight: 30,
        fontWeight: 'bold',
        fontSize: 24,
    },
    buttonIcon: {
		width: 30,
		textAlign: 'center',
		left: -2.5,
		color: 'white',
    },
	button: {
		borderRadius: 1,
		borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: 'black',
		padding: 0,
		width: 30,
    },
    input:{
        borderWidth: 2,
        borderRadius: 1,
		borderColor: '#000000',
		width: 30,
		padding: 0,
		textAlign: 'center',
		textAlignVertical: 'center'
    },
    footer: {
		backgroundColor: 'black',
		flexDirection: 'column',
		height: 50,
    },
    buttonContent: {
        color: 'white',
    },
});