import React from 'react';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

export const withAuthRedirect = (Component)=> {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Navigate to={'/login'} replace={true} />

            return <Component {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    };

    return connect(mapStateToProps)(RedirectComponent);
}