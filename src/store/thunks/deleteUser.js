import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('user/delete',async (id) =>{
   const response = await axios.delete('http://localhost:3005/user/{id}');
   return response.data;
});

export {deleteUser};