import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, TouchableOpacity } from "react-native";

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Login</Text>


      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={Text}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="numeric"
      />

      <TouchableOpacity>
        <Text style={styles.pass}>Cadastre-se</Text>
      </TouchableOpacity>

      <Button styles={styles.button} color="#06d37d" title="Acessar" onPress={() => { }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 0.4,
    padding: 10,
    borderRadius: 10,
  },
  pass: {
    color: '#4CBE6C',
    textAlign: 'right',
    right: 15,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    color: '#FFF',
    borderRadius: 50,
    width: '50%',
    height: 40,
    margin: 12,
    padding: 10,
  }
});