import {StyleSheet} from 'react-native'
import {colors,measures, fonts} from '../../styles'

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: measures.padding
    },
    text: {
       justifyContent: "space-between",
       fontSize: fonts.bigger,
       color: colors.base,
       borderBottomColor: colors.dark,
       borderBottomWidth: 1,
       padding: measures.padding,
       fontWeight: "bold"
    }
})

export default style;
