import { View, Text, StyleSheet, TextField } from "react-native";

export function Login() {
  return (
    <View style={styles.container}>
      <TextField
        label={'Email'}
        placeholder={'Digite seu email'}
        onChangeText={text => setValue('email', text)}
      />
      <TextField
        label={'Senha'}
        placeholder={'Digite sua senha'}
        onChangeText={text => setValue('password', text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});