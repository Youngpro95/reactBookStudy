export function userReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case 'DELETE':
      return state.filter((item)=>item.id !== action.data.id)
    default:
      throw new Error("asd");
  }
}
