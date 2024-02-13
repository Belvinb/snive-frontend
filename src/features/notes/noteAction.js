import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Utils/axiosConfig";
import getAuthHeaders from "../../Utils/getAuth";


export const createNote = createAsyncThunk(
    '/create-note',
    async({title,description,content},{rejectWithValue})=>{
      try{
      
        const {data} = await api.post(
          "/note/new-note",
          {title,description,content},
          getAuthHeaders()
        )
       
        
        return data
      }catch (error){
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }else{
          return rejectWithValue(error.message)
        }
      }
    }
  )

  export const updateNote = createAsyncThunk(
    '/update-note',
    async({title,description,content,id},{rejectWithValue})=>{
      try{
      
        const {data} = await api.put(
          `/note/edit-note/${id}`,
          {title,description,content},
          getAuthHeaders()

        )
       
        console.log(data)
        return data
      }catch (error){
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }else{
          return rejectWithValue(error.message)
        }
      }
    }


  )

  export const deleteNote = createAsyncThunk(
    '/delete-note',
    async({id},{rejectWithValue})=>{
      try{

        console.log(id)
      
        const {data} = await api.delete(
          `/note/delete-note/${id}`,
          getAuthHeaders()

        )
        return data
      }catch (error){
        if(error.response && error.response.data.message){
          return rejectWithValue(error.response.data.message)
        }else{
          return rejectWithValue(error.message)
        }
      }
    }

    
  )