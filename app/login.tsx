import { supabase } from '@/libs/supabase';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Login Error', error.message);
    else Alert.alert('Logged in!');
  };

  const navigateToSignUp = () => {
    router.push('/sign_up');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
      <TouchableOpacity style={styles.signInBtn} onPress={signIn}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpLink} onPress={navigateToSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 12, backgroundColor: 'white' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20, textAlign: 'center', color: 'black' },
  input: { 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 12, 
    width: '70%',
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black'
  },
  signInBtn: {
    width: '70%',
    backgroundColor: '#c8e6c9',
    borderColor: '#388e3c',
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  signUpLink: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 8,
  },
  signUpText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
