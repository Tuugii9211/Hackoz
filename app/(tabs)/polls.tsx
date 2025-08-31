import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Polls() {
  // Example live polls (replace with real data fetch if available)
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: 'Should we install more park benches?',
      likes: 12,
      dislikes: 3,
    },
    {
      id: 2,
      question: 'Do you support the new traffic light schedule?',
      likes: 8,
      dislikes: 5,
    },
    {
      id: 3,
      question: 'Should we organize a monthly community clean-up?',
      likes: 15,
      dislikes: 2,
    },
  ]);

  const handleLike = (id: number) => {
    setPolls(polls => polls.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };
  const handleDislike = (id: number) => {
    setPolls(polls => polls.map(p => p.id === id ? { ...p, dislikes: p.dislikes + 1 } : p));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Polls</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live Polls</Text>
          {polls.map(poll => (
            <View style={styles.pollCard} key={poll.id}>
              <Text style={styles.pollQuestion}>{poll.question}</Text>
              <View style={{ flexDirection: 'row', gap: 16, marginVertical: 8 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }} onPress={() => handleLike(poll.id)}>
                  <Text style={{ fontSize: 18, marginRight: 4 }}>↑</Text>
                  <Text style={{ fontWeight: 'bold' }}>{poll.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => handleDislike(poll.id)}>
                  <Text style={{ fontSize: 18, marginRight: 4 }}>↓</Text>
                  <Text style={{ fontWeight: 'bold' }}>{poll.dislikes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  pollCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  pollQuestion: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    lineHeight: 24,
  },
  pollOptions: {
    gap: 12,
    marginBottom: 16,
  },
  pollOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  optionPercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007bff',
  },
  pollStatus: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  resultCard: {
    backgroundColor: '#e8f5e8',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#c3e6c3',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#155724',
    marginBottom: 8,
  },
  resultSummary: {
    fontSize: 16,
    color: '#155724',
    marginBottom: 8,
    lineHeight: 22,
  },
  resultDate: {
    fontSize: 14,
    color: '#6c757d',
  },
  createButton: {
    backgroundColor: '#007bff',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 16,
  },
});
