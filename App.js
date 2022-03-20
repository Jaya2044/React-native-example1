import React, {useState} from 'react'
import { View, Text, Button, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoals = (goalTitle) => {
    setCourseGoals(currentGoals => 
      [...currentGoals, {key: Math.random().toString(), value: goalTitle}]
    )
  }

  return (
    <View style={styles.screen}>
        <GoalInput onAddGoal={addGoals} />
        <FlatList data={courseGoals} keyExtractor={(item, index) => item.id}
                  renderItem={itemData => <GoalItem title={itemData.item.value} /> }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})

export default App