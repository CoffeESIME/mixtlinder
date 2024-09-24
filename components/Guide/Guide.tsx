import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function GuideProfile({ guide = {
  name: "John Doe",
  image: "https://i.imgur.com/BoN9kdC.png",
  about: "Experienced mountain guide with over 10 years of experience in the Alps.",
  contact: {
    email: "john.doe@example.com",
    phone: "+1 234 567 8900"
  },
  reviews: [
    { id: 1, author: "Alice", text: "Great experience! John is very knowledgeable.", rating: 5 },
    { id: 2, author: "Bob", text: "Safe and fun trip. Highly recommend!", rating: 4 }
  ]
} }) {
  const handleContact = (method, value) => {
    if (method === 'email') {
      Linking.openURL(`mailto:${value}`);
    } else if (method === 'phone') {
      Linking.openURL(`tel:${value}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: guide.image }} style={styles.image} />
        <Text style={styles.name}>{guide.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre mi</Text>
        <Text style={styles.aboutText}>{guide.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contacto</Text>
        <TouchableOpacity onPress={() => handleContact('email', guide.contact.email)}>
          <Text style={styles.contactText}>Email: {guide.contact.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleContact('phone', guide.contact.phone)}>
          <Text style={styles.contactText}>Phone: {guide.contact.phone}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resenias</Text>
        {guide.reviews.map((review) => (
          <View key={review.id} style={styles.review}>
            <Text style={styles.reviewAuthor}>{review.author}</Text>
            <Text style={styles.reviewText}>{review.text}</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}/5</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
  },
  contactText: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 5,
  },
  review: {
    marginBottom: 15,
  },
  reviewAuthor: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 5,
  },
  reviewRating: {
    fontStyle: 'italic',
  },
});