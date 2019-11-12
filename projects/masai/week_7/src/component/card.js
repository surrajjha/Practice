import React from 'react';
import './ms.css';

class Card extends React.Component {
    render() {
        return (
            <div>
                <div class="card-deck m-5">
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ogje?ver=bdc6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">This is Your 365</h5>
                            <p class="card-text">Discover what’s possible every day with Office 365.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" class="btn btn-outline-primary">SHOP NOW ></button>
                        </div>

                    </div>
                    <div class="card">
                        <img src=" https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Surface Book 2</h5>
                            <p class="card-text">Powerhouse performance in the ultimate laptop.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" class="btn btn-outline-primary">SHOP NOW ></button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Xbox Game Pass Ultimate</h5>
                            <p class="card-text">Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" class="btn btn-outline-primary">SHOP NOW ></button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uWfh?ver=0868&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Xbox One S</h5>
                            <p class="card-text">The ultimate games and 4K entertainment system.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <button type="button" class="btn btn-outline-primary">Learn More ></button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;