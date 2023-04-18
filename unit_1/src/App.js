import logo from './logo.svg';
import './App.css';
let text = 'text variable';

function App() {
    let text2 = '222';
    const style = {
        fontSize: '24px',
        fontStyle: 'italic',
        color: 'red',
    };
    return (
        <>
            <div className="container">
                <h1 style={style}>app_1</h1>
                <img src="/images/8664885_hand_peace_icon.png" alt="test" />
                <ul>
                    <li>Hello</li>
                    <li>{text + text2}</li>
                </ul>
            </div>
        </>
    );
}
export default App;
