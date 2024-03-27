import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthScreen = ({ navigation }: any) => {
  // State variables to store email and password input
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigator = useNavigation();

  // Function to handle login button press
  const handleLoginPress = () => {
    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
    if (emailValue === "hritik" && passwordValue === "hritik") {
      Alert.alert("Login Successful");
      navigation.navigate("Drawer");
    } else {
      Alert.alert("Invalid Credentials");
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      {/* Auth Screen Header */}
      <Text style={styles.header}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmailValue(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPasswordValue(text)}
        secureTextEntry
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLoginPress} />

      {/* Register Text with Navigation Link */}
      <Text style={styles.registerText} onPress={() => navigation.navigate('Registration')}>
        Don't have an account? Register here
      </Text>
    </View>
  );
};

// Styles for the AuthScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Changed background color to white
    paddingHorizontal: 20, // Added horizontal padding for better spacing
  },
  header: {
    fontSize: 28, // Increased font size for header
    marginBottom: 30, // Increased margin bottom for header
    color: '#333333', // Changed header color for better visibility
    fontWeight: 'bold', // Added font weight for header
  },
  input: {
    width: '100%', // Changed input width to 100%
    height: 50, // Increased input height for better touch area
    borderColor: '#cccccc', // Changed input border color for better visibility
    borderWidth: 1,
    marginBottom: 20, // Increased margin bottom for inputs
    paddingLeft: 15, // Increased left padding for inputs
    borderRadius: 8, // Added border radius for inputs
  },
  registerText: {
    marginTop: 20,
    color: '#007bff', // Changed register text color for better visibility
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import Layout from './home/Layout'
// import { useNavigation } from '@react-navigation/native';

// const LoginScreen = ({ navigation }) => {
//   // State variables to store email and password input
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const navigation = useNavigation();

//   // Function to handle login button press
//   const handleLogin = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//     if(email=="hritik" && password=="hritik"){
//       alert("Login Successfully");
//       navigation.navigate("IPOs");
//     }else{
//       alert("Invalid Credentials");
//       navigation.navigate("Login");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Login Screen Header */}
//       <Text style={styles.header}>Login</Text>

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />

//       {/* Login Button */}
//       <Button title="Login" onPress={handleLogin} />

//       {/* Register Text with Navigation Link */}
//       <Text style={styles.registerText} onPress={() => navigation.navigate('Registration')}>
//         Don't have an account? Register here
//       </Text>
//     </View>
//   );
// };

// // Styles for the LoginScreen component
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ecf0f1', 
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#2c3e50', 
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     borderColor: '#3498db', 
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//     color: '#2c3e50', 
//   },
//   registerText: {
//     marginTop: 20,
//     color: '#e74c3c', 
//     textDecorationLine: 'underline', 
//   },
// });

// export default LoginScreen;

