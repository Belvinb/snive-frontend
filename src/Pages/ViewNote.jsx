import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../Utils/axiosConfig';
import getAuthHeaders from '../Utils/getAuth';
import NoteForm from '../components/NoteForm';

const ViewNote = () => {
    const { id } = useParams();
    console.log(id,"sdfds")
    const [singleNote,setSingleNote] = useState(null)
    const [edit,setEdit] = useState(false)

    useEffect(()=>{
        fetchSingleNote()

    },[])

    const fetchSingleNote = async() =>{
        const data = await api.get(`/note/single-note/${id}`,getAuthHeaders())
        console.log(data.data)
        setSingleNote(data.data)

    }
    return (
        edit ? <NoteForm savedNote={singleNote} /> :
        
        <div className="min-h-screen flex justify-center items-center bg-gray-100 relative">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
    
    <button className="absolute top-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setEdit(true)}>
      Edit
    </button>
    {/* Note Details */}
    <h1 className="text-2xl font-bold mb-4">Note</h1>
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Title:</h2>
      <p className="text-gray-700">{singleNote?.title}</p>
    </div>
    <div className="mb-4">
      <h2 className="text-lg font-semibold">Description:</h2>
      <p className="text-gray-700">{singleNote?.description}</p>
    </div>
    <div>
      <h2 className="text-lg font-semibold">Content:</h2>
      <p className="text-gray-700">{singleNote?.content}</p>
    </div>
  </div>
</div>
    
      );
}

export default ViewNote