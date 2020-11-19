import { StyleSheet } from 'react-native';
import { measures, colors, fonts} from '../../styles';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: measures.headerHeight,
        paddingTop: measures.headerPadding,
        paddingHorizontal: measures.padding,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.base
    },

    baseStyle: {
        fontSize: fonts.big,
        color: colors.white
    },

    cartContainer: {
        flexDirection: 'row',
        padding: measures.padding
    },

    text: {
        position: 'absolute',
        right: 0,
        top: 2,
        fontSize: fonts.small
    }
})

export default style;