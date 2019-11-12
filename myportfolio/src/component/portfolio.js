import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class Home extends React.Component {
    render() {
        return (
            <div className=" pl-3 pr-3">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 jumbotron" style={{ backgroundColor: "#0E6E84" }}>
                        <img src="portfolio1.jpeg" className="offset-1" style={{ borderRadius: "75%", border: "7px solid yellow", height: "150px", width: "150px",marginRight:"200px" }}></img>
                        <div className="offset-5">
                            <h1 style={{ fontFamily: "Open Sans", fontSize: "38px",marginRight:"100px" }} className="text-light"><b>Suraj</b></h1>
                            <h1 style={{ fontFamily: "Open Sans", fontSize: "38px",marginRight:"100px" ,marginLeft:"20px"}} className="text-light"><b>Kumar</b></h1>
         
                            <h5 className="offset-1"style={{marginRight:"80px",marginLeft:"70px"}}><b>Full Stack Develpoer</b></h5>
                            <div className="row mt-3">
                                <div className="col-2 ml-2 " >
                                    <img src="location.svg" style={{ float: "left", height: "20px", width: "50px", marginLeft: "50px" }}></img>
                                </div>
                                <h6 className="col-8 ml-3"> Bengaluru, Karnataka, India</h6>
                            </div>
                            <h6 className="mt-3 text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias sequi ipsam quia expedita, at iure architecto consequuntur cupiditate perferendis totam accusantium vitae cum excepturi quae saepe cumque maiores. Eos, alias?
                                </h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 jumbotron" style={{ backgroundColor: "#36ADA4" }}>
                        <div className="row">
                            <div className="col-4">
                                <img src="html.svg" style={{ height: "80px", width: "80px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>HTML</h3>
                            </div>
                            <div className="col-4">
                                <img src="css.svg" style={{ height: "80px", width: "80px" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>CSS</h3>
                            </div>
                            <div className="col-4">
                                <img src="js.svg" style={{ height: "80px", width: "80px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Javascript</h3>
                            </div>
                        </div>
                        <br></br>
                        <div className="row">
                            <div className="col-4">
                                <img src="bootstrap.svg" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Bootstrap</h3>
                            </div>
                            <div className="col-4">
                                <img src="react.svg" style={{ height: "100px", width: "100px" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>React</h3>
                            </div>
                            <div className="col-4">
                                <img src="redux.png" style={{ height: "100px", width: "100px", borderRadius: "50%" }}></img><br></br><br></br>
                                <h3 className="text-lighth" style={{ fontSize: "18px" }}>Redux</h3>
                            </div>
                        </div>
                        <br></br>
                        <div className="offset-3">
                            <div className="col-4">
                                <img className="offset-5" src="python.svg" style={{ height: "100px", width: "100px", marginLeft: "90px" }}></img><br></br><br></br>
                                <h3 style={{ fontSize: "18px", marginLeft: "110px" }}>Python</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="jumbotron-fluid pl-3 pr-3">
                    <h1 className="text-center">Proficiencies</h1><br></br><br></br>
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="frontend.jpeg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>Frontend</h3>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="backend.jpeg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>Backend</h3>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <img src="react.svg" style={{ height: "110px", width: "110px" }}></img>
                            <h3>React App</h3>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="jumbotron-fluid pl-3 pr-3 mt-5">
                    <h1 className="text-center">Projects</h1> <br></br><br></br>
                    <CardDeck className="row">
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w1.png" />
                            <Card.Body>
                                <Card.Title>Week 1</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w2.png" />
                            <Card.Body>
                                <Card.Title>Week 2</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w3.png" />
                            <Card.Body>
                                <Card.Title>Week 3</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                    </CardDeck>
                    <CardDeck className="row">
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w4.png" />
                            <Card.Body>
                                <Card.Title>Week 4</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w5.png" />
                            <Card.Body>
                                <Card.Title>Week 5</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w6.png" />
                            <Card.Body>
                                <Card.Title>Week 6</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                    </CardDeck>
                    <CardDeck className="row">
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w7.png" />
                            <Card.Body>
                                <Card.Title>Week 7</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="w8.png" />
                            <Card.Body>
                                <Card.Title>Week 8</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                        <Card className="col-lg-4 col-md-12 col-sm-12">
                            <Card.Img variant="top" src="final.png" />
                            <Card.Body>
                                <Card.Title>Major Project</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <button className="btn btn-outline-danger mb-5">View Project</button>
                        </Card>
                    </CardDeck>
                </div>
                    <hr></hr>
                <div className="jumbptron-fluid pl-3 pr-3" style={{ backgroundColor: "#0E6E84" }}>
                    <div className="row text-center pl-3">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "white white #06BEB6 #06BEB6" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" ,marginRight:"10px"}}>
                                    200+
                                 </div>
                            </div>
                            <div className=" display-4 mt-3 font-weight-bold " style={{ color: "#5D86B4",marginRight:"120px" ,fontSize: "40px"}}>Hours</div>
                            <div className="offset-1" style={{ fontSize: "25px", marginRight: "130px", color: "#5D86B4" }}>
                                of full stack coding
                                 </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "white white #06BEB6 #06BEB6" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" }}>
                                    100+
                                 </div>
                            </div>
                            <div className=" display-4 mt-3 font-weight-bold" style={{ color: "#5D86B4" ,fontSize:"40px",marginRight:"120px"}}>HackerRank </div>
                            <div className="offset-1" style={{ fontSize: "25px", marginRight: "130px", color: "#5D86B4" }}>
                                Problems</div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="mt-5 offset-2" style={{ width: "150px", height: "150px", background: "#C8F2EE", borderRadius: "50%", border: "20px solid", borderColor: "white white #06BEB6 #06BEB6" }}>
                                <div className="text-center display-5 font-weight-bold" style={{ marginTop: "40px" }}>
                                    150+
                                 </div>
                            </div>
                            <div className=" display-4 mt-3 font-weight-bold" style={{ color: "#5D86B4",marginRight:"120px" ,fontSize:"40px"}}>Git</div>
                            <div className="offset-1" style={{ fontSize: "25px", marginLeft: "-5px", color: "#5D86B4",marginRight:"120px" }}>
                                Commits
                                 </div>
                        </div>
                    </div>
                   
                </div>
            </div>



        )
    }
}
export default Home;