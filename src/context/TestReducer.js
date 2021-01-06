const TestReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_TRAVEL_DATA_TO_STATE':
      return {
        ...state,
        travelData: action.payload,
        flagDataAlreadyRetrieved: action.flag
      }
    default:
      return state
  }
}

export default TestReducer
