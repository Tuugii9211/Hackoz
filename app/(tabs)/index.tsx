import { supabase } from '@/libs/supabase';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

type Item = { id: string; text: string; created_at: string };

export default function HomeScreen() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [newText, setNewText] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  // Sign in anonymously (fast demo) or swap to email/password later
  const ensureSignedIn = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      const { error } = await supabase.auth.signInAnonymously();
      if (error) Alert.alert('Auth error', error.message);
    }
  };

  const loadItems = async () => {
    const uid = (await supabase.auth.getUser()).data.user?.id;
    if (!uid) return;
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('user_id', uid)
      .order('created_at', { ascending: false });
    if (error) Alert.alert('Load error', error.message);
    else setItems((data ?? []) as Item[]);
  };

  const addItem = async () => {
    const uid = (await supabase.auth.getUser()).data.user?.id;
    if (!uid || !newText.trim()) return;
    const { error } = await supabase.from('items').insert({ user_id: uid, text: newText.trim() });
    if (error) Alert.alert('Insert error', error.message);
    setNewText('');
    loadItems();
  };

  useEffect(() => {
    (async () => {
      await ensureSignedIn();
      const u = (await supabase.auth.getUser()).data.user;
      setUserEmail(u?.email ?? 'Anonymous');
      loadItems();
    })();

    // Realtime updates
    const channel = supabase
      .channel('public:items')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'items' }, () => loadItems())
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Items</Text>
      <Text style={{ marginBottom: 8 }}>Signed in as: {userEmail}</Text>

      <View style={styles.row}>
        <TextInput
          placeholder="Add an item..."
          value={newText}
          onChangeText={setNewText}
          style={styles.input}
        />
        <Button title="Add" onPress={addItem} />
      </View>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.text}</Text>
            <Text style={styles.meta}>{new Date(item.created_at).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: '700' },
  row: { flexDirection: 'row', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderRadius: 8, padding: 10 },
  card: { borderWidth: 1, borderRadius: 10, padding: 12 },
  meta: { color: '#666', marginTop: 4, fontSize: 12 },
});
