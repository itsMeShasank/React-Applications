import {createSlice} from "@reduxjs/toolkit";
import {fetchUsers} from "../thunks/fetchUsers.js";
import {addUser} from "../thunks/addUser.js";

const userSlice = createSlice({
    name: "user",
    initialState: {
        data:[],
        isLoadingUser: false,
        isCreatingUser: false,
        deletingUser:false,
        error:null
        //the above fields are for below reason
        //1. data which it contains actual data which is fetched from Json-server/backend server
        //2. in initial stage we may have situation that server might take some to fetch content.
        // so if it true we will show Loading.... txt in screen if not we will show fetched content
        //3. error for any issues coming from server we will take those details and set as per requirement.
    },
    reducers: {},
    extraReducers(builder) {
        //fetchUsers.pending === 'users/fetch/pending'
        //fetchUsers.fulfilled === 'users/fetch/fulfilled'
        //fetchUsers.rejected === 'users/fetch/rejected'

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoadingUser = true;

        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoadingUser = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoadingUser = false;
            state.error = action.error;
        });

        builder.addCase(addUser.pending, (state, action) => {
            state.isCreatingUser = true;
        });
        builder.addCase(addUser.fulfilled,(state,action) => {
           state.isCreatingUser = true;
           state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected,(state,action) => {
           state.isLoading = false;
           state.error = action.error;
        });
    }
});

export const userReducer = userSlice.reducer;