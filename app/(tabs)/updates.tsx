import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Updates() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Updates</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          
          <View style={styles.updateCard}>
            <View style={styles.updateHeader}>
              <View style={styles.updateIcon}>
                <Text style={styles.iconText}>🔧</Text>
              </View>
              <View style={styles.updateInfo}>
                <Text style={styles.updateTitle}>Pothole on Main Street Fixed</Text>
                <Text style={styles.updateTime}>2 hours ago</Text>
              </View>
            </View>
            <Text style={styles.updateDescription}>
              The pothole reported last week has been successfully repaired. Thank you for your report!
            </Text>
            <View style={styles.updateStatus}>
              <Text style={styles.statusText}>Status: Completed</Text>
            </View>
          </View>

          <View style={styles.updateCard}>
            <View style={styles.updateHeader}>
              <View style={styles.updateIcon}>
                <Text style={styles.iconText}>🌳</Text>
              </View>
              <View style={styles.updateInfo}>
                <Text style={styles.updateTitle}>New Park Bench Installed</Text>
                <Text style={styles.updateTime}>1 day ago</Text>
              </View>
            </View>
            <Text style={styles.updateDescription}>
              A new bench has been installed at Central Park as requested by the community.
            </Text>
            <View style={styles.updateStatus}>
              <Text style={styles.statusText}>Status: Completed</Text>
            </View>
          </View>

          <View style={styles.updateCard}>
            <View style={styles.updateHeader}>
              <View style={styles.updateIcon}>
                <Text style={styles.iconText}>🚦</Text>
              </View>
              <View style={styles.updateInfo}>
                <Text style={styles.updateTitle}>Traffic Light Maintenance</Text>
                <Text style={styles.updateTime}>3 days ago</Text>
              </View>
            </View>
            <Text style={styles.updateDescription}>
              Scheduled maintenance on the traffic light at Oak Street intersection. Work in progress.
            </Text>
            <View style={styles.updateStatus}>
              <Text style={styles.statusText}>Status: In Progress</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Announcements</Text>
          
          <View style={styles.announcementCard}>
            <Text style={styles.announcementTitle}>Monthly Community Meeting</Text>
            <Text style={styles.announcementDate}>Next meeting: March 15th, 7:00 PM</Text>
            <Text style={styles.announcementDescription}>
              Join us for our monthly community meeting to discuss upcoming projects and address any concerns.
            </Text>
            <TouchableOpacity style={styles.rsvpButton}>
              <Text style={styles.rsvpButtonText}>RSVP</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 12,
  },
  updateCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  updateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  updateIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  updateInfo: {
    flex: 1,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  updateTime: {
    fontSize: 12,
    color: '#666',
  },
  updateDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 12,
  },
  updateStatus: {
    alignSelf: 'flex-start',
    backgroundColor: '#d4edda',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#155724',
    fontWeight: '500',
  },
  announcementCard: {
    backgroundColor: '#fff3cd',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  announcementTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#856404',
    marginBottom: 8,
  },
  announcementDate: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  announcementDescription: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 20,
    marginBottom: 16,
  },
  rsvpButton: {
    backgroundColor: '#856404',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  rsvpButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
