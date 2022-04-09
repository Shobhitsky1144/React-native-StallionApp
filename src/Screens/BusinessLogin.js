import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../assets/images/stallion-cx-logo1.png';
import loginStyle from '../../style/loginStyle';
import LinkedInLogo from '../../assets/images/LinkedIn.png';
import GoogleLogo from '../../assets/images/Google.png';
import AppleLogo from '../../assets/images/Apple.png';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import background from '../../assets/images/background.png';

const BusinessLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={loginStyle.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={loginStyle.image}>
        {/* <View> */}
        <SafeAreaView style={{flex: 1}}>
          <View style={loginStyle.parent}>
            <View style={loginStyle.imgDiv}>
              <Image source={logo} style={loginStyle.logo} />
            </View>
            <View style={{display: 'flex', alignItems: 'center'}}>
              <Text style={loginStyle.heading}>
                Login to your business account
              </Text>
              <Text style={loginStyle.subheading}>
                Fill the below details to login
              </Text>
            </View>
            <View>
              <View style={loginStyle.formField}>
                <TextInput
                  style={loginStyle.inputContainer}
                  placeholderTextColor="#ffffff"
                  placeholder="Business Email"
                  //   onChangeText={text => setState({email})}
                  //   value={email}
                />
              </View>
              <View style={loginStyle.formField}>
                <TextInput
                  style={loginStyle.inputContainer}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="#ffffff"

                  //   onChangeText={text => setState({password})}
                  //   value={password}
                />
              </View>
            </View>
            <View style={loginStyle.forgetPasswordContainer}>
              <TouchableOpacity style={loginStyle.forgotBtn}>
                <Text style={loginStyle.link}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={loginStyle.buttonParent}>
              <LinearGradient
                colors={['#A76C39', '#FFCC33', '#A76C39']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{borderRadius: 10}}>
                <TouchableOpacity
                  //    onPress={onPress}
                  style={loginStyle.button}>
                  <Text style={loginStyle.buttonText}>Login</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <Text style={loginStyle.middleText}>Or</Text>

            <View style={loginStyle.footer}>
              <Text style={loginStyle.text}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BusinessRegister');
                }}>
                <Text style={loginStyle.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={loginStyle.socialContainer}>
              <Text style={loginStyle.text}>
                login with your social media account
              </Text>
              <View style={loginStyle.social}>
                <Image source={LinkedInLogo} style={loginStyle.socialLogo} />
                <Image source={GoogleLogo} style={loginStyle.socialLogo} />
                <Image source={AppleLogo} style={loginStyle.socialLogo} />
              </View>
            </View>
          </View>
          {/* </View> */}
          {/* </RadialGradient> */}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BusinessLogin;
