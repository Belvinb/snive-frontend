import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, updateNote } from '../features/notes/noteAction';
import { useNavigate } from 'react-router-dom';


const NoteForm = ({  savedNote }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
    const [note, setNote] = useState({
      title: savedNote ? savedNote.title : '',
      description: savedNote ? savedNote.description : '',
      content: savedNote ? savedNote.content : '',
      id: savedNote ? savedNote._id :""
    });
  
    useEffect(() => {
      setNote({
        title: savedNote ? savedNote.title : '',
        description: savedNote ? savedNote.description : '',
        content: savedNote ? savedNote.content : '',
        id: savedNote ? savedNote._id : ''
      });
    }, [savedNote]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNote({
        ...note,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(savedNote){
        
        dispatch(updateNote(note))
        navigate("/home")
      }else{
        dispatch(createNote(note))
        navigate("/home")

      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col justify-center h-screen">
        <h1 className='text-center text-2xl mb-4 font-bold '>{savedNote?"Edit":"Add"} Note</h1>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={note.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={note.description}
            required
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">Content:</label>
          <textarea
            name="content"
            id="content"
            value={note.content}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          {savedNote ? 'Update' : 'Create'}
        </button>
      </form>
    );
  };
  
  export default NoteForm;