import { configureStore } from '@reduxjs/toolkit'
import combineReducers from '../reducers/index'
import thunk from 'redux-thunk'

//reducer: rootReducer, 
// adalah kita menggunakan kumpulan reducer pada combine reducer

//rak
export default configureStore({
  reducer: combineReducers,
  //menggunakan redux thunk untuk middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})