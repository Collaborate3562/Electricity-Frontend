import { Component } from 'react';
class Logout extends Component {
    render() {
        window.location = "/";
        return localStorage.clear();
    }
}
export default Logout;