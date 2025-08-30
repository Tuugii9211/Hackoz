import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Polls() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Polls</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Polls</Text>
          <View style={styles.pollCard}>
            <Text style={styles.pollQuestion}>What should we prioritize for community improvement?</Text>
            <View style={styles.pollOptions}>
              <TouchableOpacity style={styles.pollOption}>
                <Text style={styles.optionText}>Better street lighting</Text>
                <Text style={styles.optionPercentage}>45%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pollOption}>
                <Text style={styles.optionText}>More green spaces</Text>
                <Text style={styles.optionPercentage}>32%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pollOption}>
                <Text style={styles.optionText}>Improved public transport</Text>
                <Text style={styles.optionPercentage}>23%</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.pollStatus}>Voting ends in 3 days</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Results</Text>
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Community Safety Survey</Text>
            <Text style={styles.resultSummary}>78% of residents feel safe in the neighborhood</Text>
            <Text style={styles.resultDate}>Completed 2 weeks ago</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create New Poll</Text>
        </TouchableOpacity>
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
  createButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
