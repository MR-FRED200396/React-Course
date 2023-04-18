
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import Footer from './Footer';
import CategoryDescription from './CategoryDescription';
import Error from './Erorr';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
const navigation = {
  mainNav: [
    {link: '/', category: 'Главная'},
    {link: '/about', category: 'O сайте'},
    {link: '/cat', category: 'Категории'},
    
  ],
  categoryNav: [
    {link: '/notebook', category: 'Ноутбуки'},
    {link: '/monitor', category: 'Монитори'},
    {link: '/cellphone', category: 'Мобільні'},
  ], 
};

function App() {
  return (
    < >
    <Header data ={navigation}></Header>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route exact path='/cat' element={<Category data ={navigation}/>}></Route>
        <Route path='/cat/:userName' element={<CategoryDescription/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
