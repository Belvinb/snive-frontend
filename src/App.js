import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NoteForm from './components/NoteForm';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ViewNote from './Pages/ViewNote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/add-note" element={<NoteForm/>} />
      <Route path="/edit-note/:id" element={<NoteForm/>} />
      <Route path="/view-note/:id" element={<ViewNote/>} />

    </Routes>
  );
}

export default App;
