import { supabase } from '@/libs/supabase';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert('Sign Up Error', error.message);
    } else {
      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => {
            // Redirect to home page after successful sign up
            router.replace('/(tabs)');
          }
        }
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
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
      <TouchableOpacity style={styles.signUpBtn} onPress={signUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    gap: 12, 
    backgroundColor: 'white' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    marginBottom: 20, 
    textAlign: 'center', 
    color: 'black' 
  },
  input: { 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 12, 
    width: '70%',
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderColor: '#ddd'
  },
  signUpBtn: {
    width: '70%',
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
});
