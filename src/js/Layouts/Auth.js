import React from "react";
import Login from '../Components/Login'

export default props => {
    return props.userData && props.userData.id ? (
        props.children
    ) : 'Brak dostępu'
}