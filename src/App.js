import './App.css';
import { Layout } from './component/Layout/Layout';
import { Navbar } from './component/Navbar/Navbar';
import { Routes } from './routes/Routes';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Routes/>
    </Layout>
  );
}

export default App;
