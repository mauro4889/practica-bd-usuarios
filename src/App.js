import './App.css';
import { Layout } from './component/Layout/Layout';
import { Navbar } from './component/Navbar/Navbar';
import { Usuarios } from './pages/usuarios/Usuarios';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Usuarios/>
    </Layout>
  );
}

export default App;
