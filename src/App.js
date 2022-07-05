import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './Home'
import Questions from './accordian/components/questions'
import GroceryHome from './grocery/components/GroceryHome'
import './App.css'
import GalleryHome from './gallery/components/GalleryHome';
import MultiForm from './mlti-step-form/components/MultiForm';
import Main from './pagination/components/Main'
import Protected from './protected/Protected';
import Admin from './admin/Admin';
import SpeechHome from './speech-recognition/components/SpeechHome'

function App() {
   const [user, setUser] = useState(null);
   const handleLogin = () => setUser({ id: '1', name: 'robin' })
  const handleLogout = () => setUser(null)
  return (
    <>
      <Home />
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}

      <Routes>
        <Route path="accordian" element={<Questions />} />
        <Route path="grocery" element={<GroceryHome />} />
        <Route path="gallery" element={<GalleryHome />} />
        <Route path="multistepform" element={<MultiForm />} />
        <Route path="pagination" element={<Main />} />
        <Route path="protected" element={<Protected user={user} ><Admin /></Protected>} />
        <Route path="speech" element={<SpeechHome />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  )
}

export default App
