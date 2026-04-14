import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { 
  ArrowLeft, 
  Camera, 
  MapPin, 
  Send, 
  Trash2, 
  ShieldAlert, 
  Construction 
} from 'lucide-react-native';

export default function ReportIssue({ navigation }) {
  const [category, setCategory] = useState('Garbage');
  const [description, setDescription] = useState('');

  const categories = [
    { name: 'Garbage', icon: Trash2 },
    { name: 'Sanitation', icon: ShieldAlert },
    { name: 'Infrastructure', icon: Construction },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="#161d19" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Issue</Text>
        <View style={{ width: 40 }} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.label}>VISUAL PROOF</Text>
          <TouchableOpacity style={styles.uploadArea}>
            <View style={styles.uploadIcon}>
              <Camera size={32} color="#006c49" />
            </View>
            <Text style={styles.uploadTitle}>Take a photo</Text>
            <Text style={styles.uploadSub}>Tap to capture the issue</Text>
          </TouchableOpacity>

          <Text style={styles.label}>CATEGORY</Text>
          <View style={styles.categoryGrid}>
            {categories.map((cat) => (
              <TouchableOpacity 
                key={cat.name}
                style={[
                  styles.categoryItem,
                  category === cat.name && styles.categoryItemSelected
                ]}
                onPress={() => setCategory(cat.name)}
              >
                <cat.icon size={20} color={category === cat.name ? '#fff' : '#006c49'} />
                <Text style={[
                  styles.categoryText,
                  category === cat.name && styles.categoryTextSelected
                ]}>
                  {cat.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>DETAILS</Text>
          <TextInput 
            style={styles.input}
            placeholder="Describe the situation..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.label}>LOCATION</Text>
          <View style={styles.locationCard}>
            <View style={styles.locationIcon}>
              <MapPin size={20} color="#006c49" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.locationTitle}>Green Valley Parkway</Text>
              <Text style={styles.locationSub}>District 7 • Detected Automatically</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.adjustText}>Adjust</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit Report</Text>
            <Send size={20} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#161d19',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: '#6c7a71',
    letterSpacing: 1,
    marginBottom: 12,
    marginTop: 20,
  },
  uploadArea: {
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#e8f0e9',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  uploadIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#f4fbf4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#161d19',
  },
  uploadSub: {
    fontSize: 12,
    color: '#6c7a71',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eef6ee',
  },
  categoryItemSelected: {
    backgroundColor: '#006c49',
    borderColor: '#006c49',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006c49',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    fontSize: 16,
    color: '#161d19',
    minHeight: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#eef6ee',
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#eef6ee',
  },
  locationIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f4fbf4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#161d19',
  },
  locationSub: {
    fontSize: 10,
    color: '#6c7a71',
    fontWeight: '600',
  },
  adjustText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#006c49',
  },
  submitButton: {
    backgroundColor: '#006c49',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 20,
    gap: 10,
    marginTop: 40,
    shadowColor: '#006c49',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});
