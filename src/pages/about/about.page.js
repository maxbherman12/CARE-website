import React from 'react'
import './about.styles.css'

import {Link} from 'react-router-dom'
import {Link as Anchor} from 'react-scroll'

import Max from './img/max.jpeg'
import Natasha from './img/natasha.JPG'
import AnnaMaria from './img/annamaria.jpeg'

import TeamMember from '../../components/team-member/team-member.component'

const AboutPage = () => (
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
                <Anchor
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
                </Anchor>
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
        <div className="page" id="team">
            <h1>Our Team</h1>
            <div className="team-container">
                <TeamMember
                    img={Max}
                    name='Max Herman'
                    position='President, CTO'
                    bio='Max is a rising sophomore at Vanderbilt University pursuing a double major in the Communication of Science and Technology and Computer Science with minors in Business and Vocal Performance. Aside from his studies, Max is also passionate about music, travel, and the Miami Dolphins. When he’s not studying or watching yet another unsuccessful game at Hard Rock Stadium, you can find him singing with his college a cappella group, Harmonic Notion.'
                />
                <TeamMember
                    img={Natasha}
                    name='Natasha Johnson'
                    position='VP of Philanthropy'
                    bio='Natasha is a rising freshman at the University of Pennsylvania, where she will be attending Wharton and hopes to concentrate in Marketing or Finance with a minor in Computer Science. When she is not in the classroom, she enjoys writing spoken words and immersing herself in her Jamaican and Black culture through reading and activism. She also loves to run, listen to music, and travel to new places with her friends.'
                />
                <TeamMember
                    img={AnnaMaria}
                    name='AnnaMaria Fernandez'
                    position='VP of Alternative Fundraising and Outreach'
                    bio='AnnaMaria is a rising freshman at Muhlenberg College with intentions of pursuing a double major in Theater and Dance with minors in Sociology and Vocal Performance. Aside from her studies, AnnaMaria is also passionate about all types of art, food, and making people happy. When she’s not baking or watching Criminal Minds, you can find her outside learning tik tok dances with her friends.'
                />
            </div>
        </div>
    </div>
)

export default AboutPage;