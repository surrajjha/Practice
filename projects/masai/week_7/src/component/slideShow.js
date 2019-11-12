import React from 'react';
import './ms.css';

class Slideshow extends React.Component {
    render() {
        return (
            <div>

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2PeLK?ver=9a00&q=60&m=6&h=472&w=1259&b=%23FFFFFFFF&l=f&o=t&x=1440&y=250&aim=true" className="d-block w-100 image-size" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="http://getwallpapers.com/wallpaper/full/3/1/a/658215.jpg" className="d-block w-100 image-size" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src="" className="d-block w-100 image-size" alt="..."></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

            </div>
        );
    }
}
export default Slideshow;