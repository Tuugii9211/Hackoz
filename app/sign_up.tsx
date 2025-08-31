import { supabase } from '@/libs/supabase';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

    const signUp = async () => {
    try {
      if (!fullName.trim() || !email.trim() || !username.trim() || !password.trim()) {
        Alert.alert('Error', 'Please fill in all required fields');
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            username: username.trim(),
            phone_number: phoneNumber.trim() || null,
          },
        },
      });

      if (error) {
        Alert.alert('Sign Up Error', error.message);
        return;
      }

      // If the user already exists, Supabase may return a user with no identities
      if (data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        Alert.alert('Email already registered', 'This email is already in use. Please sign in instead.');
        return;
      }

      // Try to mirror into profiles, but don't block success if it fails
      try {
        const { data: userResp } = await supabase.auth.getUser();
        const user = userResp?.user;
        if (user) {
          await supabase
            .from('profiles')
            .upsert({
              id: user.id,
              full_name: fullName.trim(),
              username: username.trim(),
              email: user.email ?? email.trim(),
              phone_number: phoneNumber.trim() || null,
            });
        }
      } catch (_) {
      }

      Alert.alert(
        'Check your email',
        'We sent you a confirmation link. After confirming, come back and sign in.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/login'),
          },
        ]
      );
    } catch (e: any) {
      const msg = e?.message ?? 'Sign up failed. Please try again.';
      Alert.alert('Error', msg);
    }
  };

  // // Prevent already logged-in users from signing up again
  // React.useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     const { data: { user } } = await supabase.auth.getUser();
  //     if (user) {
  //       Alert.alert('Already logged in', 'You are already logged in. Please log out before creating a new account.', [
  //         {
  //           text: 'OK',
  //           onPress: () => router.replace('/(tabs)')
  //         }
  //       ]);
  //     }
  //   };
  //   checkLoggedIn();
  // }, []);

  // const signUp = async () => {
  //   if (!fullName.trim() || !email.trim() || !username.trim() || !password.trim()) {
  //     Alert.alert('Error', 'Please fill in all required fields');
  //     return;
  //   }

  //   const { error } = await supabase.auth.signUp({ email, password });
  //   if (error) {
  //     Alert.alert('Sign Up Error', error.message);
  //   } else {
  //     Alert.alert('Success', 'Account created successfully!', [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           router.replace('/login');
  //         }
  //       }
  //     ]);
  //   }
  // };

  const navigateToSignIn = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <TextInput
        placeholder="Full Name *"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Username *"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Email *"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      
      <TextInput
        placeholder="Password *"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Phone Number (Optional)"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />
      
      <TouchableOpacity style={styles.signUpBtn} onPress={signUp}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInLink} onPress={navigateToSignIn}>
        <Text style={styles.signInText}>Already have an account? Log In</Text>
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
  signInLink: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 8,
  },
  signInText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
