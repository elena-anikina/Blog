import React, {useEffect} from "react";
import {connect} from "react-redux";
import classes from './header.module.scss';
import Title from "./components/title";
import LogBtn from "./components/log-btn";
import User from "../user/user";
import HeaderNotAuthorized from "./header-not-authorized";
import HeaderAuthorized from "./header-authorized";
import * as actions from '../../redux/actions';
import {logOut} from "../../redux/actions";

const Header = ({authorized, user, checkingAuthentication, logOut}) => {
    useEffect(() => { checkingAuthentication() }, [])
    return user ? <HeaderAuthorized {...user} logOut={logOut} /> : <HeaderNotAuthorized />;
};



const mapStateToProps = ({authorized, user}) => ({authorized, user});

export default connect(mapStateToProps, actions)(Header);