import { supabase } from '@/libs/supabase';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Sign Up Error', error.message);
    else Alert.alert('Success', 'Check your email for confirmation!');
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Login Error', error.message);
    else Alert.alert('Logged in!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login / Register</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.signUpBtn} onPress={signUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBtn} onPress={signIn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 12 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 8,
  },
  signUpBtn: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    borderColor: '#00bcd4',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 6,
  },
  signInBtn: {
    flex: 1,
    backgroundColor: '#c8e6c9',
    borderColor: '#388e3c',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginLeft: 6,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#222',
  },
});
