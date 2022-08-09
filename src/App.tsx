import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Home } from './pages/Home'
import { PageNotFound } from './pages/pageNotFound'
import { Profile } from './pages/Profile'
import { SingleTweet } from './pages/SingleTweet'

function App() {

  return (
    <div className="App">
      <LeftMenu/>
    <main>
   
     <Routes>
     <Route index element={< Navigate to='/home' />} />
     <Route path= '/home' element={<Home/>}/>
     <Route path= '/home/:itemId' element={<SingleTweet/>}/>
     <Route path= '/profile/:itemId' element={<Profile/>}/>
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     </main>
     <RightMenu/>
    </div>
  )
}

export default App
