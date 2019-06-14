import {connect} from 'react-redux';
import LoginForm from './component';
import {login} from '../../../../actions';

function mapStateToProps(state) {
    return {isTokenLoading: state.token.loading}
}

function mapDispatchToProps(dispatch) {

    function handleLogin(username, password) {
        dispatch(login({username, password}));
    }

    return {
        handleLogin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
