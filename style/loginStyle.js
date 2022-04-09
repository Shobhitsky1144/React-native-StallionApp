import {StyleSheet} from 'react-native';
import {fontFamily} from './../src/Styles/Fonts';

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  logo: {
    width: 260,

    height: 90,
  },
  heading: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 25,
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

  PlaceholderStyle: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular,
    fontSize: 21,
  },
  inputContainer: {
    paddingHorizontal: 14,
    paddingVertical: 0,
    justifyContent: 'center',
    fontFamily: fontFamily.crimsonRegular,
    color: '#ffffff',

    fontSize: 18,
  },

  forgetPasswordContainer: {
    marginTop: 4,
    alignItems: 'flex-end',
  },
  forgotBtn: {
    position: 'absolute',
    // left: 0,
    alignSelf: 'flex-end',
  },

  buttonParent: {
    marginTop: 44,
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    textAlign: 'center',
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
  middleText: {
    color: '#8F92A1',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    fontFamily: fontFamily.crimsonRegular,
    alignSelf: 'center',
  },
  link: {
    color: '#F9C633',
    fontSize: 19,
    fontFamily: fontFamily.crimsonRegular,
  },
  signuplink: {
    color: '#F9C633',
    fontSize: 20,
    fontFamily: fontFamily.crimsonRegular,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    borderTopColor: '#4B4B4B',
    borderTopWidth: 1.2,
    alignSelf: 'center',
    paddingTop: 12,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialLogo: {
    width: 58,
    height: 50,
  },
});

export default loginStyle;
