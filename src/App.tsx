import { BrowserRouter as Router } from 'react-router-dom';

import PostsManagerPage from './pages/PostsManagerPage';
import Footer from './widgets/ui/Footer';
import Header from './widgets/ui/Header';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PostsManagerPage />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
