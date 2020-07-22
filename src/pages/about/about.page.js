import React from 'react'
import './about.styles.css'

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
            {/* <h4>CARE.</h4> */}
            <div className="about-title">
                <h1>About Us</h1>
            </div>
            <div className="about-summary">
                <p>We are CARE, a nonprofit organization based out of Westport, CT dedicated to servicing local Black communities. Following the murder of George Floyd, we took to the streets in protest with thousands of our peers. Inspired by their roaring cries for justice, we founded CARE to serve as a union for those demanding action.
                <br/><br/>
                CARE’s purpose is two-fold, to educate and to fundraise. We have created a curated library of resources for people who do not yet fully understand the deep rooted nature of the problems highlighted by the Black Lives Matter movement. Our repository includes an array of multimedia that illustrates the injustices Black people have faced, unveils hidden biases that people did not know they held, and challenges audiences to ask themselves uncomfortable questions regarding their own relationship with race.
                <br/><br/>
                Still, education is only half of the solution. Even if everyone who visited this page immediately understood their biases and could eradicate them instantly (which is no simple feat, it takes concerted time and effort), there will always be those who continue to balk at change. Hence, supporting organizations that protect against the malintent of those who refuse to listen and fight for real change is undeniably crucial.
                <br/><br/>
                We decided to tackle racial inequity with a local lens, as we feel it is critical to first acknowledge the issues that exist in our own community before undertaking the arduous task of stitching up our divided nation. To manifest our ambitions, we support local charitable organizations whose missions target eliminating any racial disparities in voting and education.
                <br/><br/>
                With CARE, we truly aspire to start an alliance of people in our community that refuse to remain bystanders to racial injustice. We hope you will join us on our journey.</p>
            </div>
        </div>
        <div className="page" id="mission">
            <div className="mission-content">
                <div className="mission-title">
                    <h1>Our Mission</h1>
                </div>
                <div className="mission-statement">
                    <p>
                        Our mission is to educate, raise awareness, and expunge the inherent, deeply rooted issues surrounding racial inequity in voting and education in our community to ensure it is one driven by acceptance and justice for the next generation of young people. 
                    </p>
                </div>
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