import { connect } from 'react-redux';
import List from '../components/List';

// !!!!!!!!!!!! Тут везде user
function mapStateToProps(state) {
    const { user } = state;
    return { user: user };
}

//!!!!!!!!!!! тут везде user написал

export default connect(mapStateToProps, null)(List);
