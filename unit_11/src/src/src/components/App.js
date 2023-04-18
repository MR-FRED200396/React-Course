import './App.css';
import AddUser from '../containers/AddUser';
import MapStateToProps from '../containers/UserList';

function App() {
    return (
        <>
            <AddUser />
            <MapStateToProps />
        </>
    );
}

export default App;
