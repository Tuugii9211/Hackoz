import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const SUPABASE_URL = 'https://vqwzzrrmuqffgvtaguoi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_dqpaYhAZrRW-aAgGyf2U6g_hBonQIWj';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // RN has no URL redirects by default
  },
});