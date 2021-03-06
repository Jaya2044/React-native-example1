import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.listItems}>
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
      }
})

export default GoalItem