import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Main/Sidebar';
import Footer from './Footer/Footer';

const site = {
    site_name: 'react test',
    site_title: 'my first site with react',
    nav: [
        { link: 'nav1', text: 'my link' },
        { link: 'nav2', text: 'my link 2' },
        { link: 'nav3', text: 'my link 3' },
    ],
};

function App() {
    return (
        <div className="App">
            <Header data={site}></Header>
            <Main></Main>
            <Sidebar data={site}></Sidebar>
            <Footer data={site}></Footer>
        </div>
    );
}

export default App;
