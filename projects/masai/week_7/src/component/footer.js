import React from 'react';
import './ms.css';

class Footer extends React.Component {
    render() {
        return (


            <div className="jumbotron jumbotron-fluid">
                <div className="row">
                    <div className="container col-2">
                        <h5>What's new</h5>
                        <p className="mt-3"><small>Surface Go</small></p>
                        <p><small>Surface Pro</small></p>
                        <p><small>Windows 10 apps</small></p>
                        <p><small>Office apps</small></p>
                    </div>

                    <div className="container col-2 ">
                        <h5>Education</h5>
                        <p className="mt-3"><small>Microsoft in education</small></p>
                        <p><small>Office for students</small></p>
                        <p><small>Office 365 for schools</small></p>
                        <p><small>Microsoft Azure in education</small></p>

                    </div>
                    <div className="container col-2 ">
                        <h5>Microsoft Store</h5>
                        <p className="mt-3"><small>Account profile</small></p>
                        <p><small>Download Center</small></p>
                        <p><small>Returns</small></p>
                        <p><small>Order tracking</small></p>

                    </div>
                    <div className="container col-2 ">
                        <h5>Developer</h5>
                        <p className="mt-3"><small>Microsoft Visual Studio</small></p>
                        <p><small>Developer Network</small></p>
                        <p><small>TechNet</small></p>
                        <p><small>Office Dev Center</small></p>

                    </div>
                    <div className="container col-2 ">
                        <h5>Enterprise</h5>
                        <p className="mt-3"><small>Azure</small></p>
                        <p><small>AppSource</small></p>
                        <p><small>Automotive</small></p>
                        <p><small>Government</small></p>
                        <p><small>Healthcare</small></p>
                        <p><small>Manufacturing</small></p>
                        <p><small>Financial services</small></p>
                        <p><small>Retail</small></p>

                    </div>
                    <div className="container col-2 ">
                        <h5>Company</h5>
                        <p className="mt-3"><small>Careers</small></p>
                        <p><small>About Microsoft</small></p>
                        <p><small>Privacy at Microsoft</small></p>
                        <p><small>Investors</small></p>
                        <p><small>Security</small></p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">

                        <p><small>English (India)</small></p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-2">
                                <p><small>Contact Microsoft</small></p>

                            </div>
                            <div className="col-md-2">
                                <p><small>Privacy & cookies</small></p>

                            </div>
                            <div className="col-md-2">
                                <p><small>Terms of use</small></p>

                            </div>
                            <div className="col-md-2">
                                <p><small> Trademarks</small></p>

                            </div>
                            <div className="col-md-2">
                                <p><small> About our ads</small></p>

                            </div>
                            <div className="col-md-2">
                                <p><small>© Microsoft 2019</small></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;