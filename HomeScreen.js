import { View, FlatList } from 'react-native';
import { universities } from '../data/data';
import UniversityCard from '../components/UniversityCard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={universities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UniversityCard
            item={item}
            onPress={() => navigation.navigate('Details', { item })}
          />
        )}
      />
    </View>
  );
}