import React, { Component } from "react";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // console.log(history)
        return this.props.userData && this.props.userData.id ? (
            this.props.children
        ) : 'Brak dostępu'
    }
}

export default Auth


//-----------to działa
// export default props => {
//     return props.userData && props.userData.id ? (
//         props.children
//     ) : 'Brak dostępu'
// }