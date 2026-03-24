import { View, Text, TouchableOpacity } from 'react-native';

export default function UniversityCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 15, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.university}</Text>
      <Text>{item.country}</Text>
      <Text numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );
}