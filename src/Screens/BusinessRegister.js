import {
  Image,
  Stylesheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import logo from '../../assets/images/stallion-cx-logo1.png';
import signupStyle from '../../style/signupStyle';
import LinkedInLogo from '../../assets/images/LinkedIn.png';
import GoogleLogo from '../../assets/images/Google.png';
import AppleLogo from '../../assets/images/Apple.png';
import background from '../../assets/images/background.png';
import LinearGradient from 'react-native-linear-gradient';

const BusinessRegister = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <ImageBackground source={background} resizeMode="cover" style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={signupStyle.container}>
            <View style={signupStyle.parent}>
              <View style={signupStyle.imgDiv}>
                <Image source={logo} style={signupStyle.userLogo} />
              </View>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <Text style={signupStyle.heading}>
                  Sign up to your bussiness account
                </Text>
                <Text style={signupStyle.subheading}>
                  Fill the below details to register
                </Text>
              </View>
              <View>
                <View style={signupStyle.formField}>
                  <TextInput
                    style={signupStyle.inputContainer}
                    placeholder="Entity Name"
                    placeholderTextColor="#ffffff"
                  />
                </View>
                <View style={signupStyle.formField}>
                  <TextInput
                    style={signupStyle.inputContainer}
                    placeholder="Business Email"
                    placeholderTextColor="#ffffff"
                  />
                </View>
                <View style={signupStyle.formField}>
                  <TextInput
                    style={signupStyle.inputContainer}
                    placeholder="Entity Website"
                    placeholderTextColor="#ffffff"
                  />
                </View>
                <View style={signupStyle.formField}>
                  <TextInput
                    secureTextEntry={true}
                    style={signupStyle.inputContainer}
                    placeholder="Password(atleast 6 or more characters)"
                    placeholderTextColor="#ffffff"
                  />
                </View>
                <View style={signupStyle.formField}>
                  <TextInput
                    style={signupStyle.inputContainer}
                    placeholder="Mobile (OTP Verified)"
                    placeholderTextColor="#ffffff"
                  />
                </View>
                <View style={signupStyle.formField}>
                  <TextInput
                    style={signupStyle.inputContainer}
                    placeholder="Contact Person"
                    placeholderTextColor="#ffffff"
                  />
                </View>
              </View>

              <View style={signupStyle.conditionContainer}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  tintColors={{true: '#F9C633', false: '#F9C633'}}
                  style={signupStyle.checkbox}
                />

                <Text style={signupStyle.conditionText}>I agree to</Text>
                <TouchableOpacity>
                  <Text style={signupStyle.link}> Terms & Conditions</Text>
                </TouchableOpacity>
                <Text style={signupStyle.conditionText}> and</Text>
                <TouchableOpacity>
                  <Text style={signupStyle.link}> Privacy Policy</Text>
                </TouchableOpacity>
              </View>
              <View style={signupStyle.buttonParent}>
                <LinearGradient
                  colors={['#A76C39', '#FFCC33', '#A76C39']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{borderRadius: 10}}>
                  <TouchableOpacity
                    //    onPress={onPress}
                    style={signupStyle.button}>
                    <Text style={signupStyle.buttonText}>Register</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <Text style={signupStyle.middleText}>Or</Text>

              <View style={[signupStyle.loginPage, {paddingBottom: 7}]}>
                <Text style={signupStyle.text}>Already have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('BusinessLogin');
                  }}>
                  <Text style={signupStyle.login}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={[signupStyle.socialContainer, {paddingTop: 6}]}>
                <Text style={signupStyle.text}>
                  Continue with social media account
                </Text>
                <View style={signupStyle.social}>
                  <Image source={GoogleLogo} style={signupStyle.registerLogo} />

                  <Image
                    source={LinkedInLogo}
                    style={signupStyle.registerLogo}
                  />
                  <Image source={AppleLogo} style={signupStyle.registerLogo} />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default BusinessRegister;
