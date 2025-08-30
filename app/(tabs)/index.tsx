import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

// Placeholder QuickActions component
function QuickActions() {
  return (
    <View style={[styles.section, {backgroundColor: 'rgba(175, 238, 238, 0.5)'}]}>
      <Text style={[styles.section, { fontWeight: 'bold', color: 'blue'}]}>Reported Issues</Text>
      <Text style={[styles.sectionTitle, {fontWeight: 'bold'}]}>3 Active</Text>
      <Text style={styles.description}>[QuickActions placeholder]</Text>
    </View>

    
  );
}

// Placeholder RecentIssues component
function RecentIssues() {
  return (
    <View style={[styles.section, {backgroundColor: 'rgba(152, 251, 152, 0.5)'}]}>
      <Text style={[styles.section, { fontWeight: 'bold', color: 'green'}]}>Active Polls</Text>
      <Text style={[styles.sectionTitle, {fontWeight: 'bold'}]}>2 New Polls</Text>
      <Text style={styles.description}>[RecentIssues placeholder]</Text>
    </View>
  );
}

// Placeholder LatestUpdates component
function LatestUpdates() {
  return (
    <View style={[styles.section, {backgroundColor: 'rgba(226, 221, 90, 0.5)'}]}>
      <Text style={[styles.section, { fontWeight: 'bold', color: 'goldenrod'}]}>Recent Updates</Text>
      <Text style={[styles.sectionTitle, {fontWeight: 'bold'}]}>1 New Update</Text>
      <Text style={styles.description}>[LatestUpdates placeholder]</Text>
    </View>
  );
}

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

      <View style={{ 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "stretch",
        paddingHorizontal: 16
      }}>
        <Text style={styles.title}>Dashboard</Text>
        
        <Text style={{alignItems: "flex-end"}}>
          Welcome,{"\n"}
          <Text style={{ fontWeight: "bold" }}>Tengis</Text>
        </Text>
      </View>
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
    borderRadius: 10,
    padding: 5,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#888',
  },
  
});


