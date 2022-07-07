import {StyleSheet} from 'react-native';
import {Colors, Sizes} from '$themes/index';

export default StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: Colors.white,
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: Sizes.pad10 * 2,
    flex: 1,
    color: Colors.primary,
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: Colors.lightGreen,
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderRadius: Sizes.gutterSize,
  },
  container: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.darkGreen,
  },
});
