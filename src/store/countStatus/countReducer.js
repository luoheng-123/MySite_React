const initialState = {
  count: 13,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_REQUEST':
      return { ...state, count: action.val+state.count };
    case 'INCREMENT_SUCCESS':
      return { ...state, count: state.count + 1, loading: false };
    default:
      return state;
  }
};

export default reducer;