import Navbar from './components/Layout/Navbar';
import MainLayout from './components/Layout/MainLayout';
import DiceTray from './components/DiceTray/DiceTray';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <MainLayout />
      <DiceTray />
    </div>
  );
}