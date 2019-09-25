let nextId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: nextId++,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.id === action.id) ? { ...todo, completed: true } : todo);
        default:
            return state;
    }
}

export default todos;