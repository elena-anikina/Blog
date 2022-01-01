import React from "react";
import {connect} from "react-redux";
import classes from './header.module.scss';
import Title from "./components/title";
import LogBtn from "./components/log-btn";
import User from "../user/user";
import HeaderNotAuthorized from "./header-not-authorized";
import HeaderAuthorized from "./header-authorized";

const Header = ({authorized}) => {
    return authorized ? <HeaderAuthorized /> : <HeaderNotAuthorized />;
};



const mapStateToProps = ({authorized}) => ({authorized});

export default connect(mapStateToProps)(Header);