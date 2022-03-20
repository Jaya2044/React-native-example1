import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");

    const changleHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={enteredGoal} onChangeText={changleHandler} />
                <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
})

export default GoalInput