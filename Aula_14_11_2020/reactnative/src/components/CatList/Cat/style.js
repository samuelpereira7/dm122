import { StyleSheet, Dimensions } from 'react-native';
import { colors, measures, fonts } from '../../../styles';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: measures.padding,
        backgroundColor: colors.white
      },
      image: {
        width: 75,
        height: 75,
        resizeMode: 'contain',
        marginBottom: measures.padding,
      },
      description: {
        fontSize: fonts.bigger
      },
      items: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        color: colors.base
      },
      touchable: {
        flexDirection: "row",
        borderBottomColor: colors.light,
        borderBottomWidth: 1
      }
})

export default style;
