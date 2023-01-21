import { createSlice } from '@reduxjs/toolkit';

// Cambiamos userName por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userName = createSlice({
		name: 'userName',
    initialState: '',
    reducers: {
        changeUserName:(state,actions)=>{
            const userName = actions.payload
            return userName
        }
    }
})

export const { changeUserName  } = userName.actions;

export default userName.reducer;