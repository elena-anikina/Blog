import { useLocation, Navigate } from 'react-router-dom';
import {connect} from "react-redux";

const RequireAuthentication = ({children, user, loadingUser, errorMessages}) => {
    console.log(loadingUser);

    const location = useLocation();
    console.log(location);

    console.log(localStorage.getItem('token'));



    if (!user && !localStorage.getItem('token')) {return <Navigate to="/sign-in" state={{from: location}} />}

    return children;
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(RequireAuthentication);