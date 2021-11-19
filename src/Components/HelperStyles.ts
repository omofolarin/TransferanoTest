import {Dimensions, StyleSheet} from 'react-native';

import {AppTheme} from '../Configs';

export const sx = StyleSheet.create({
  danger: {
    color: AppTheme.palette.error?.main,
  },

  bgDanger: {
    backgroundColor: AppTheme.palette.error.main,
  },

  bgWhite: {
    backgroundColor: AppTheme.palette.common.white,
  },

  bgTransparent: {
    backgroundColor: 'transparent',
  },

  bgLightAccent: {
    backgroundColor: '#FAF5F0',
  },

  flex1: {
    flex: 1,
  },

  flex10: {
    flex: 0.1,
  },

  flex20: {
    flex: 0.2,
  },

  flex25: {
    flex: 0.25,
  },

  flexHalf: {
    flex: 0.5,
  },

  flexOneThird: {
    flex: 0.33,
  },

  flexTwoThird: {
    flex: 0.66,
  },

  flex75: {
    flex: 0.75,
  },

  flex80: {
    flex: 0.8,
  },

  flexRow: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },

  justifyStart: {
    justifyContent: 'flex-start',
  },

  justifyEnd: {
    justifyContent: 'flex-end',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  /**
   *   justifyContent: 'space-between',
   */
  justifyBetween: {
    justifyContent: 'space-between',
  },

  justifyAround: {
    justifyContent: 'space-around',
  },

  justifyEven: {
    justifyContent: 'space-evenly',
  },

  itemsStart: {
    alignItems: 'flex-start',
  },

  itemsEnd: {
    alignItems: 'flex-end',
  },

  itemsCenter: {
    alignItems: 'center',
  },

  itemsBaseline: {
    alignItems: 'baseline',
  },

  itemsStretch: {
    alignItems: 'stretch',
  },

  paddingX2: {
    paddingHorizontal: 2,
  },

  paddingX4: {
    paddingHorizontal: 4,
  },

  paddingX8: {
    paddingHorizontal: 8,
  },

  paddingX10: {
    paddingHorizontal: 10,
  },

  paddingX12: {
    paddingHorizontal: 12,
  },

  paddingX14: {
    paddingHorizontal: 14,
  },

  paddingX16: {
    paddingHorizontal: 16,
  },

  paddingX18: {
    paddingHorizontal: 18,
  },

  paddingX20: {
    paddingHorizontal: 20,
  },

  paddingX22: {
    paddingHorizontal: 22,
  },

  paddingX24: {
    paddingHorizontal: 24,
  },

  paddingBottom0: {
    paddingBottom: 0,
  },

  paddingBottom2: {
    paddingBottom: 2,
  },

  paddingBottom4: {
    paddingBottom: 4,
  },

  paddingBottom6: {
    paddingBottom: 6,
  },

  paddingBottom8: {
    paddingBottom: 8,
  },

  paddingBottom10: {
    paddingBottom: 10,
  },

  paddingBottom12: {
    paddingBottom: 12,
  },

  paddingBottom14: {
    paddingBottom: 14,
  },

  paddingY2: {
    paddingVertical: 2,
  },

  paddingY4: {
    paddingVertical: 4,
  },

  paddingY8: {
    paddingVertical: 8,
  },

  paddingY10: {
    paddingVertical: 10,
  },

  paddingY12: {
    paddingVertical: 12,
  },

  paddingY14: {
    paddingVertical: 14,
  },

  paddingY16: {
    paddingVertical: 16,
  },

  padding0: {
    padding: 0,
  },

  padding2: {
    padding: 2,
  },

  padding4: {
    padding: 4,
  },

  padding8: {
    padding: 8,
  },

  margin0: {
    margin: 0,
  },

  margin2: {
    margin: 2,
  },

  margin4: {
    margin: 4,
  },

  margin8: {
    margin: 8,
  },

  margin16: {
    margin: 16,
  },

  marginBottom16: {
    marginBottom: 16,
  },

  marginX2: {
    marginLeft: 2,
    marginRight: 2,
  },

  marginX4: {
    marginLeft: 4,
    marginRight: 4,
  },

  marginX8: {
    marginLeft: 8,
    marginRight: 8,
  },

  marginX16: {
    marginLeft: 16,
    marginRight: 16,
  },

  marginX18: {
    marginLeft: 18,
    marginRight: 18,
  },

  marginX20: {
    marginLeft: 20,
    marginRight: 20,
  },

  marginY2: {
    marginTop: 2,
    marginBottom: 2,
  },

  marginY4: {
    marginTop: 4,
    marginBottom: 4,
  },

  marginY8: {
    marginTop: 8,
    marginBottom: 8,
  },

  marginY16: {
    marginTop: 16,
    marginBottom: 16,
  },

  wScreen: {
    width: Dimensions.get('window').width,
  },

  hScreen: {
    height: Dimensions.get('window').height,
  },

  wScreenHalf: {
    width: Dimensions.get('window').width * 0.5,
  },

  wScreenQuarter: {
    width: Dimensions.get('window').width * 0.4,
  },

  wScreenOneThird: {
    width: Dimensions.get('window').width * 0.33,
  },

  wScreenTwoThird: {
    width: Dimensions.get('window').width * 0.66,
  },

  wScreen20: {
    width: Dimensions.get('window').width * 0.2,
  },

  wScreen80: {
    width: Dimensions.get('window').width * 0.8,
  },

  wScreen90: {
    width: Dimensions.get('window').width * 0.9,
  },

  hScreenHalf: {
    height: Dimensions.get('window').height * 0.5,
  },

  hScreenQuarter: {
    height: Dimensions.get('window').height * 0.4,
  },

  hScreenOneThird: {
    height: Dimensions.get('window').height * 0.33,
  },

  hScreenTwoThird: {
    height: Dimensions.get('window').height * 0.66,
  },

  hScreen20: {
    height: Dimensions.get('window').height * 0.2,
  },

  hScreen80: {
    width: Dimensions.get('window').height * 0.8,
  },

  screenSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  resizeModeCover: {
    resizeMode: 'cover',
  },

  resizeModeContain: {
    resizeMode: 'contain',
  },

  overflowScroll: {
    overflow: 'scroll',
  },

  overflowHidden: {
    overflow: 'hidden',
  },

  inset0: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },

  insetX0: {
    right: 0,
    left: 0,
  },

  insetY0: {
    top: 0,
    bottom: 0,
  },

  insetX2: {
    right: 2,
    left: 2,
  },

  insetY2: {
    top: 2,
    bottom: 2,
  },

  insetX4: {
    right: 4,
    left: 4,
  },

  insetY4: {
    top: 4,
    bottom: 4,
  },

  insetX8: {
    right: 8,
    left: 8,
  },

  insetY8: {
    top: 8,
    bottom: 8,
  },

  insetX16: {
    right: 2,
    left: 2,
  },

  insetY16: {
    top: 16,
    bottom: 16,
  },

  insetTop0: {
    top: 0,
  },

  insetBottom0: {
    bottom: 0,
  },

  insetRight0: {
    right: 0,
  },

  insetLeft0: {
    left: 0,
  },

  insetTop2: {
    top: 2,
  },

  insetBottom2: {
    bottom: 2,
  },

  insetRight2: {
    right: 2,
  },

  insetLeft2: {
    left: 2,
  },

  insetTop4: {
    top: 4,
  },

  insetBottom4: {
    bottom: 4,
  },

  insetRight4: {
    right: 4,
  },

  insetLeft4: {
    left: 4,
  },

  insetTop8: {
    top: 8,
  },

  insetBottom8: {
    bottom: 8,
  },

  insetRight8: {
    right: 8,
  },

  insetLeft8: {
    left: 8,
  },

  insetTop16: {
    top: 16,
  },

  insetBottom16: {
    bottom: 16,
  },

  insetRight16: {
    right: 16,
  },

  insetLeft16: {
    left: 16,
  },

  insetTop32: {
    top: 32,
  },

  insetTop64: {
    top: 64,
  },

  insetBottom32: {
    bottom: 32,
  },

  insetRight32: {
    right: 32,
  },

  insetLeft32: {
    left: 32,
  },

  border0: {
    borderWidth: 0,
  },

  iconButtonShadow: {
    shadowColor: 'rgb(176, 176, 176)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.65,

    elevation: 6,
  },

  iconMdSize: {
    width: 60,
    height: 60,
  },

  iconMdRadius: {
    borderRadius: 60,
  },

  iconSmSize: {
    width: 40,
    height: 40,
  },

  iconSmRadius: {
    borderRadius: 40,
  },

  windowHeaderButtonText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
