import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
export default function Login({ navigation }) {
  const [email, onChangeemail] = useState('')
  const [password, onChangePassword] = useState('')
  const loginUser = () => {
    if (email === 'ali' && password === '123') {
      alert('you are loged in')
      navigation.navigate('Home')
    }
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../components/images/logo1.png')}
      />

      <View style={styles.container1}>
        <Text style={styles.setText}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeemail}
        />
        <Text style={styles.setText}>password</Text>
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnbox} onPress={loginUser}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupcont}>
        <Text>Don't have and account yet?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Usersignup')}>
          <Text style={{ color: 'blue' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -110,
  },
  container1: {
    alignItems: 'center',
  },
  setText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupcont: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  inputBox: {
    marginVertical: 10,
    width: 300,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 150,
    height: 150,

    marginTop: 100,
  },
  btnbox: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: -80,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
