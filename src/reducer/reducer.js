const initial = {
  todo: [],
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case 'add_todo':
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
