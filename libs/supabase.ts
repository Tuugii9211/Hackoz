import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://vqwzzrrmuqffgvtaguoi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd3p6cnJtdXFmZmd2dGFndW9pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NDcyNzMsImV4cCI6MjA3MjEyMzI3M30.L9C9BPTliomT-NjGxsEO-o5uw8lyOhZfHsdMYA3_3Jg'; // safe to ship in client (with RLS!)

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // RN has no URL redirects by default
  },
});