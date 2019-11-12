import React from 'react';

class Image extends React.Component {
    render() {

        return (


            <div>
                <h3 className="work ml-5 mt-5">For Work</h3>
                <br></br>
                <div class="card-deck m-5">
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Windows 10 Enterprise</h5>
                            <p class="card-text">Download the free 90-day evaluation for IT professionals..</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" class="btn btn-outline-primary">DOWNLOAD ></button>
                        </div>

                    </div>
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Office 365 for Business</h5>
                            <p class="card-text">Access your files from anywhere, online or offline.</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                            <button type="button" class="btn btn-outline-primary">SHOP NOW ></button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3sKm8?ver=08d4&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Explore Kubernetes</h5>
                            <p class="card-text">Learn how Kubernetes works and get started with cloud native app development today.</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                            <button type="button" class="btn btn-outline-primary">Get Started ></button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Get Visual Studio 2019</h5>
                            <p class="card-text">Download Visual Studio 2019, the productive, modern and innovative IDE..</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                            <button type="button" class="btn btn-outline-primary">DOWNLOAD NOW ></button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Image;
