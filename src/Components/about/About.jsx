import React from 'react'
import "./About.css"
import Navbar from '../Navbar/Navbar';
function About() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className='ourTeam'>Our Team Members </h1>
                <div className="Cards">

                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Teams/Adarshdev.jpg"} alt="Adarsh" />
                        <h5>Adarsh Kesarwani</h5>
                        <h5>Roll No:2112105011008</h5>
                        <h5>U.I.M (F.U.G.S)</h5>
                        <h6>BCA 3rd Year</h6>

                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Teams/Aryan.jpeg"} alt="Aryan" />
                        <h5>Aryan Jaiswal</h5>
                        <h5>Roll No:2112105011033</h5>
                        <h5>U.I.M (F.U.G.S)</h5>
                        <h6>BCA 3rd Year</h6>

                    </div>
                    <div className="card">
                        <img src={process.env.PUBLIC_URL + "/Teams/Aditya.jpeg"} alt="Avinash" />
                        <h5>Aditya Pandey</h5>
                        <h5>Roll No:2112105011012</h5>
                        <h5>U.I.M (F.U.G.S)</h5>
                        <h6>BCA 3rd Year</h6>
                    </div>

                </div>
            </div>


        </>
    )
}

export default About;