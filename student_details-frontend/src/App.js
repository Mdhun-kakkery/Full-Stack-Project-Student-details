import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import Students from './component/Students';
import Footer from './component/Footer';


function App() {
  
  return (
    <div className='App'>
   <Nav/>

  <Students/>

  <Footer/>
    </div>
  );
}

  
export default App;

