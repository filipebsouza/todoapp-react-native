import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default class TodoApp extends Component {
    render() {
        state = {
            todos: [],
            visibilityFilter: 'SHOW_ALL_TODOS'
        }

        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
});
