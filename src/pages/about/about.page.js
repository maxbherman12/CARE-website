import React from 'react'
import './about.styles.css'

import {Link} from 'react-router-dom'
import {Link as Anchor} from 'react-scroll'

// import TeamMember from '../../components/team-member/team-member.component'

class AboutPage extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="about">
                <div className="navigation-circles">
                    <div className="circle-container">
                        <Anchor
                                to='about-landing'
                                smooth={true}
                                offset={-70}
                                duration={1000}
                        >
                            <div className="nav-circle" id="d1">
                                <div className="text-container">
                                    <span>About Us</span>
                                </div>
                            </div>
                        </Anchor>
                        <Anchor
                            to='mission'
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <div className="nav-circle" id="2">
                                <div className="text-container">
                                    <span>Our Mission</span>
                                </div>
                            </div>
                        </Anchor>
                        {/* <Anchor
                            to='team'
                            smooth={true}
                            offset={-65}
                            duration={1000}
                        >
                            <div className="nav-circle" id="3">
                                <div className="text-container">
                                    <span>Our Team</span>
                                </div>
                            </div>
                        </Anchor> */}
                    </div>
                </div>
                <div className='page' id="about-landing">
                    <h4>CARE.</h4>
                    <div className="about-title">
                        <h1>About Us</h1>
                    </div>
                    <div className="about-summary">
                        <p>We are CARE, a nonprofit organization based out of Westport, CT dedicated to servicing local Black communities and fighting for change in our local area. <br/> <br/> In partnership with the Westport Public Library, CARE. is currently planning a virtual benefit concert that will feature both local and professional musicians and speakers to support the Black Lives Matter movement. The event will be live streamed on August 2nd at 6pm. A link to access the live stream can be purchased on our <Link to='/donate' className='home-link'>Donate page. </Link> To be notified with any updates regarding our event, <a className='home-link' href="https://docs.google.com/forms/d/e/1FAIpQLSfdU_PfSdNbhinxtIDkfdZgpgcnzmBLsb5OLq-Ek3OzsesIMw/viewform?usp=sf_link">subscribe to our email list!</a> </p>
                    </div>
                </div>
                <div className="page" id="mission">
                    <div className="mission-title">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="mission-statement">
                        <p>
                            Our mission is to educate and raise awareness of the inherent, deeply rooted issues surrounding racial inequity in voting, education, and housing in our community to ensure it is one driven by acceptance and justice for the next generation of young people. 
                        </p>
                    </div>
                </div>
                {/* <div className="page" id="team">
                    <h1>Our Team</h1>
                    <div className="team-container">
                        <TeamMember />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default AboutPage;