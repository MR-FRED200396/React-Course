import { useDispatch } from 'react-redux';
import { addNewUsers } from '../action';

function AddUser() {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        let data = event.target.elements;

        dispatch(
            addNewUsers(data.passport.value, data.name.value, data.age.value),
        );
    };

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input
                        type="text"
                        name="passport"
                        defaultValue="qwerty123"
                    />
                </div>
                <div>
                    <input type="text" name="name" defaultValue="Oleg" />
                </div>
                <div>
                    <input type="text" name="age" defaultValue="55" />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;
