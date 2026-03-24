import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        {item.university}
      </Text>
      <Text style={{ marginTop: 10 }}>{item.country}</Text>
      <Text style={{ marginTop: 10 }}>{item.description}</Text>
    </View>
  );
}