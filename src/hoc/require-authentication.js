import { useLocation, Navigate } from 'react-router-dom';
import {connect} from "react-redux";

const RequireAuthentication = ({children, user}) => {
    const location = useLocation();

    if (!user) {return <Navigate to="/sign-in" state={{from: location}} />}

    return children;
};

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(RequireAuthentication);