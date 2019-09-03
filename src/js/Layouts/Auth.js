import React from "react";

export default props => {
    return props.userData && props.userData.id ? (
        props.children
    ) : "BRAK DOSTĘPU";
}