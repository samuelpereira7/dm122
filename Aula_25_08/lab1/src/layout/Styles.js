import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
    color: {
        backgroundColor: '#F3C853'
    },
    header: {
        paddingTop: StatusBar.currentHeight,
        height: 54 + StatusBar.currentHeight
    }
});