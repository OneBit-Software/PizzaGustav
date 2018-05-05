import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    defaultBg: {
        backgroundColor: '#171618'
    },
    productCard: {
        height: 100,
        borderColor: '#171618',
        borderBottomWidth: 3,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row'
    },
    productCardInfoView: {
        flexDirection: 'column',
        flex: 0.8
    },
    productCardCountView: {
        flexDirection: 'column'
    },
    productCardTitle: {
        fontSize: 24,
        color: '#000'
    },
    logo: {
    }
});