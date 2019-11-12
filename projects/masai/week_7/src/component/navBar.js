import React from 'react';


class NavBar extends React.Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"></a>
                    <div class="media">
                        <img src="https://via.placeholder.com/50" class="align-self-start mr-3" alt="Microsoft"></img>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Office <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Windows <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Surface <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Xbox <span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Support <span class="sr-only">(current)</span></a>
                                </li>
                            </ul>
                            <div className="float-lg-right mr-5">
                                <a className="nav-link" href="#">Sign In</a>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;













