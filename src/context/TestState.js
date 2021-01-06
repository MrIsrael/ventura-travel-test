import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import TestReducer from './TestReducer'

// Initial state
const initialState = {
  travelData: [],
  flagDataAlreadyRetrieved: false
}

// Create Context
export const TestContext = createContext(initialState)

// Provider component
export const TestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TestReducer, initialState)

  // Action / get travel plans data from spreadsheet, through Sheet Best service
  const getTravelData = async () => {
    console.log('Getting data for available trips...')
    const res = await axios.get('https://sheet.best/api/sheets/1c3a8d12-ffbb-4360-8cd5-b3194fd3d880')
    console.log(Object.entries(res.headers)[6])               // API requests to SheetBest remaining this month
    const arr = res.data.map(obj => Object.entries(obj))
    console.log(arr)
    dispatch({
      type: 'LOAD_TRAVEL_DATA_TO_STATE',
      payload: arr,
      flag: true
    })
  }

  return (
    <TestContext.Provider 
      value={{
        travelData: state.travelData,
        flagDataAlreadyRetrieved: state.flagDataAlreadyRetrieved,
        getTravelData
      }}
    >
      { children }
    </TestContext.Provider>
  )
}
