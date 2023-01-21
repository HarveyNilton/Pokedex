import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from '../slice/username.slice'

export default configureStore({
  reducer: {
    userName: usernameSlice
	}
})