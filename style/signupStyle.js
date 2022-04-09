import {StyleSheet} from 'react-native';
import {fontFamily} from '../src/Styles/Fonts';

const signupStyle = StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 6,
  },
  parent: {
    alignItems: 'center',
  },
  imgDiv: {
    paddingTop: 9,
  },
  userLogo: {
    width: 260,
    height: 90,
  },
  businessLogo: {
    width: 220,

    height: 60,
  },
  heading: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 24,
  },
  subheading: {
    color: '#C3C5CF',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 18,
    paddingTop: 3,
    marginBottom: 9,
  },

  text: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 20,
  },
  formField: {
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    height: 37,
    borderColor: '#F9C633',

    borderWidth: 0.3,
    width: 330,
  },

  inputContainer: {
    paddingHorizontal: 14,
    paddingVertical: 0,
    justifyContent: 'center',
    fontFamily: fontFamily.crimsonRegular,
    color: '#ffffff',

    fontSize: 18,
  },

  conditionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
  },
  conditionText: {
    color: '#ffffff',
    fontSize: 13,
  },

  buttonParent: {
    marginTop: 8,
  },
  button: {
    borderRadius: 10,

    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 23,
  },
  link: {
    color: '#F9C633',
    fontSize: 16,

    fontFamily: fontFamily.crimsonRegular,
  },
  middleText: {
    color: '#FFFFFF', //'#8F92A1',
    marginTop: 3,

    fontSize: 22,
    fontFamily: fontFamily.crimsonRegular,
  },
  loginPage: {
    display: 'flex',
    flexDirection: 'row',

    paddingBottom: 4,
  },
  login: {
    color: '#F9C633',
    fontSize: 20,
    fontFamily: fontFamily.crimsonRegular,
  },

  socialContainer: {
    borderTopColor: '#4B4B4B',
    borderTopWidth: 1.2,

    paddingTop: 2,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
    marginTop: 8,
  },
  registerLogo: {
    width: 53,
    height: 53,
  },
});

export default signupStyle;
