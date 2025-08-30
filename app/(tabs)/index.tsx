import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Placeholder QuickActions component
function QuickActions() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick Report</Text>
      <Text style={styles.placeholder}>[QuickActions placeholder]</Text>
    </View>
  );
}

// Placeholder RecentIssues component
function RecentIssues() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Report Issues</Text>
      <Text style={styles.placeholder}>[RecentIssues placeholder]</Text>
    </View>
  );
}

// Placeholder LatestUpdates component
function LatestUpdates() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Updates</Text>
      <Text style={styles.placeholder}>[LatestUpdates placeholder]</Text>
    </View>
  );
}

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Dashboard</Text>
        <QuickActions />
        <RecentIssues />
        <LatestUpdates />
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
    gap: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  section: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
  },
  
});


