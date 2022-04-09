import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import logo from '../../assets/images/stallion-cx-logo1.png';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import background from '../../assets/images/background.png';
import {fontFamily} from '../Styles/Fonts';

export default function CreateAccount({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.parent}>
              <View style={styles.imgDiv}>
                <Image source={logo} style={styles.logo} />
              </View>
              <View>
                <Text style={styles.headertext}>
                  Let's find the best contract for you
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  style={styles.account}
                  onPress={() => {
                    navigation.navigate('BusinessRegister');
                  }}>
                  <Text style={styles.text}>BUSINESS ACCOUNT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.account}
                  onPress={() => {
                    navigation.navigate('UserRegister');
                  }}>
                  <Text style={styles.text}>INDIVIDUAL ACCOUNT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footer}>
                <LinearGradient
                  colors={['#A76C39', '#FFCC33', '#A76C39']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{borderRadius: 10}}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Create Account</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
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
  headertext: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular, //'CrimsonPro-VariableFont_wght',
    fontSize: 23,
  },
  account: {
    borderWidth: 0.3,
    borderColor: '#F9C633',
    marginTop: 19,

    alignItems: 'center',
    justifyContent: 'center',
    width: 330,
    height: 37,

    borderRadius: 10,
    margin: 4,
  },
  text: {
    color: '#ffffff',
    fontFamily: fontFamily.crimsonRegular, //'CrimsonPro-VariableFont_wght',
    fontSize: 20,
  },
  footer: {
    marginTop: 19,
  },
  button: {
    borderRadius: 10,

    width: 200,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'black',

    fontFamily: fontFamily.crimsonRegular, //'CrimsonPro-VariableFont_wght',
    fontSize: 23,
  },
});
