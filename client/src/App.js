import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import EditProfile from './pages/EditProfile';
// import ProductsCMS from './pages/ProductsCMS';
import RegisterCMS from './pages/RegisterCMS';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';

function App() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <div>abaikan</div>

      <div>
        <Login></Login>
        {/* <RegisterUser></RegisterUser> */}
        {/* <RegisterCMS></RegisterCMS> */}
        {/* <AddProduct></AddProduct> */}
        {/* <EditProduct></EditProduct> */}
        {/* <EditProfile></EditProfile> */}
        {/* <Card></Card>
        <div className="h-10"></div>
        <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;
