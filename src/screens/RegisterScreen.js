import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList, KeyboardAvoidingView } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { fathernameValidator } from "../helpers/fathernameValidator";
import { cnicValidator } from "../helpers/cnicValidator";
import { citynameValidator } from "../helpers/cityValidator";
import { phonenumberValidator } from "../helpers/phoneValidator";
import { ScrollView } from "react-native-gesture-handler";



export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [fathername, setFatherName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [cnic, setCnic] = useState({ value: "", error: "" });
  const [phonenumber, setPhoneNumber] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [cityname, setCityName] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const fathernameError = fathernameValidator(fathername.value);
    const cnicError = cnicValidator(cnic.value);
    const emailError = emailValidator(email.value);
    const citynameError = citynameValidator(cityname.value);
    const numberError = phonenumberValidator(phonenumber.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError || numberError) {
      setName({ ...name, error: nameError });
      setFatherName({ ...fathername, error: fathernameError });
      setCnic({ ...cnic, error: cnicError });
      setCityName({ ...cityname, error: citynameError });
      setPhoneNumber({ ...phonenumber, error: numberError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    
    

    <Background>
    
      <BackButton goBack={navigation.goBack} />
      <View style={styles.logoViewBox}><Logo /></View>
      <Header>Create Account</Header>
      
      <ScrollView style={styles.scrollclass}>
          <TextInput
            style={styles.textStyle}
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={(text) => setName({ value: text, error: "" })}
            error={!!name.error}
            errorText={name.error}
          />
          <TextInput
            label="Father Name"
            returnKeyType="next"
            value={fathername.value}
            onChangeText={(text) => setFatherName({ value: text, error: "" })}
            error={!!fathername.error}
            errorText={fathername.error}
          />

          <TextInput
            label="CNIC"
            returnKeyType="next"
            value={cnic.value}
            onChangeText={(text) => setCnic({ value: text, error: "" })}
            error={!!cnic.error}
            errorText={cnic.error}
          />
          <TextInput
            label="Phone Number"
            returnKeyType="next"
            value={phonenumber.value}
            onChangeText={(text) => setPhoneNumber({ value: text, error: "" })}
            error={!!phonenumber.error}
            errorText={phonenumber.error}
          />
          <TextInput
            label="City Name"
            returnKeyType="next"
            value={cityname.value}
            onChangeText={(text) => setCityName({ value: text, error: "" })}
            error={!!cityname.error}
            errorText={cityname.error}
          />
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: "" })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
        
       </ScrollView>
        
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
    
  );
}

const styles = StyleSheet.create({
  
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
logoViewBox:{
  marginTop:150,
},
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 50,
  },
  scrollclass: {
   
    display: "flex",
    minWidth: "100%",
    height:"100%",
  },
});
