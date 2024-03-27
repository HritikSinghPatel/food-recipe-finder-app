import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const SignUpScreen = ({ navigation }: any) => {
  const [userNameValue, setUserNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSignUp = () => {
    console.log('Username:', userNameValue);
    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
    Alert.alert("Successfully Signed Up");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUserNameValue(text)}
      />  
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmailValue(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPasswordValue(text)}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', 
  },
  header: {
    fontSize: 28, 
    marginBottom: 30, 
    color: '#007bff', 
    fontWeight: 'bold', 
  },
  input: {
    width: '85%', 
    height: 45, 
    borderColor: '#ced4da', 
    borderWidth: 2, 
    marginBottom: 15, 
    paddingLeft: 12, 
    fontSize: 16, 
  },
});

export default SignUpScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const RegistrationScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     alert("Successfully Register");
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Registration</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={(text) => setUsername(text)}
//       />  
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa', 
//   },
//   header: {
//     fontSize: 28, 
//     marginBottom: 30, 
//     color: '#007bff', 
//     fontWeight: 'bold', 
//   },
//   input: {
//     width: '85%', 
//     height: 45, 
//     borderColor: '#ced4da', 
//     borderWidth: 2, 
//     marginBottom: 15, 
//     paddingLeft: 12, 
//     fontSize: 16, 
//   },
// });


// export default RegistrationScreen;
