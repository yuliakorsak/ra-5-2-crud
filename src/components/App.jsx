import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewPost from './NewPost';
import ViewPost from './ViewPost';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<ViewPost />} />
        </Routes>
    </Router>
  )
}
