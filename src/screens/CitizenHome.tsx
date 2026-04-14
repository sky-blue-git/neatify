import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { 
  Trophy, 
  Camera, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Bell
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function CitizenHome({ navigation }) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // In a real app, this would be a fetch to your API
    setReports([
      {
        id: '1',
        title: 'Overflowing Bin',
        location: '22 Oak St, District 7',
        status: 'in-progress',
        image: 'https://picsum.photos/seed/garbage1/400/300',
        time: '2h ago'
      },
      {
        id: '2',
        title: 'Graffiti on Mural',
        location: 'Riverside Walk',
        status: 'pending',
        image: 'https://picsum.photos/seed/graffiti1/400/300',
        time: '1d ago'
      }
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHpMAmamRAgW8DQXELiRLT8JbDl2qpCLDvj_m93AF7DEcq0r700HWPqBIq6VgYKyJN4ahA7n7V11FY_Bgr_hw8-Y7jyPooV8NlD1A3JmmS5DkjJBN_jsvdXLhim_NVqp7ABSpKK-fkRj4kWerCfOlGZ8VLX2ahZ7FvhX0sKokPY4W75xrEVUrwqpKxjYyrmIcFuE6f0KD6vXgdoB9X72ZgptRii5fPHw2j9oPwGXRushGq2LyjqrYpeJtIuXwmoOfjRlbvWWuASv4' }} 
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hello, Alex!</Text>
            <Text style={styles.subGreeting}>District 7 is looking great.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color="#006c49" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Points Card */}
        <View style={styles.pointsCard}>
          <View style={styles.pointsHeader}>
            <View>
              <Text style={styles.pointsLabel}>CURRENT RANK</Text>
              <Text style={styles.rankTitle}>Urban Guardian</Text>
            </View>
            <Trophy size={32} color="#ffb95f" />
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>Progress to Level 12</Text>
              <Text style={styles.progressValue}>850 / 1000 pts</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '85%' }]} />
            </View>
          </View>
        </View>

        {/* Report CTA */}
        <TouchableOpacity 
          style={styles.reportCta}
          onPress={() => navigation.navigate('Report')}
          activeOpacity={0.9}
        >
          <View style={styles.reportCtaContent}>
            <Text style={styles.reportCtaTitle}>Notice something out of place?</Text>
            <Text style={styles.reportCtaSub}>Help your community by reporting issues in seconds.</Text>
            <View style={styles.reportButton}>
              <Camera size={20} color="#fff" />
              <Text style={styles.reportButtonText}>Report New Issue</Text>
            </View>
          </View>
          <View style={styles.ctaCircle1} />
          <View style={styles.ctaCircle2} />
        </TouchableOpacity>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <CheckCircle2 size={20} color="#006c49" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>RESOLVED</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={20} color="#855300" />
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>PENDING</Text>
          </View>
        </View>

        {/* Recent Reports */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Active Reports</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {reports.map((report) => (
          <TouchableOpacity key={report.id} style={styles.reportCard}>
            <Image source={{ uri: report.image }} style={styles.reportImage} />
            <View style={styles.reportBadge}>
              <Text style={styles.badgeText}>{report.status.toUpperCase()}</Text>
            </View>
            <View style={styles.reportInfo}>
              <Text style={styles.reportTitle}>{report.title}</Text>
              <View style={styles.reportMeta}>
                <MapPin size={12} color="#6c7a71" />
                <Text style={styles.reportLocation}>{report.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbf4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#10b981',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '800',
    color: '#161d19',
    fontFamily: 'System',
  },
  subGreeting: {
    fontSize: 12,
    color: '#3c4a42',
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f0f7f0',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  pointsCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  pointsLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#3c4a42',
    letterSpacing: 1,
  },
  rankTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#006c49',
  },
  progressContainer: {
    gap: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#161d19',
  },
  progressValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e8f0e9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#006c49',
    borderRadius: 4,
  },
  reportCta: {
    backgroundColor: '#006c49',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  reportCtaContent: {
    zIndex: 1,
  },
  reportCtaTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  reportCtaSub: {
    fontSize: 14,
    color: '#e8f0e9',
    marginBottom: 20,
    maxWidth: '80%',
  },
  reportButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 16,
    gap: 8,
    alignSelf: 'flex-start',
  },
  reportButtonText: {
    color: '#006c49',
    fontWeight: '800',
    fontSize: 16,
  },
  ctaCircle1: {
    position: 'absolute',
    right: -40,
    top: -40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  ctaCircle2: {
    position: 'absolute',
    left: '50%',
    bottom: -60,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 25,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#eef6ee',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#161d19',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6c7a71',
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#161d19',
  },
  viewAll: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006c49',
  },
  reportCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eef6ee',
  },
  reportImage: {
    width: '100%',
    height: 160,
  },
  reportBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#006c49',
  },
  reportInfo: {
    padding: 16,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#161d19',
    marginBottom: 4,
  },
  reportMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reportLocation: {
    fontSize: 12,
    color: '#6c7a71',
  },
});
