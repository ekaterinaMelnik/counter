export default function click(state = [0], action) {
    switch (action.type) {
        case 'INCREMENT':
            return state.map((counter, index) => {
                if (action.id === index) {
                    return counter + 1;
                }
                return counter;
            });
        case 'DECREMENT':
            return state.map((counter, index) => {
                if (action.id === index) {
                    return counter - 1 >= 0 ? counter - 1 : counter;
                }
                return counter;
            });
        case 'ADD_COUNTER':
            return [...state, 0];
        case 'DELETE_COUNTER':
            return state.slice(0, state.length - 1);
        default:
            return state;
    }
}