import React, { useEffect, useState } from 'react';
import './css/Timeline1.css';
// Import AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

function Timeline() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Initialize AOS
    useEffect(() => {
        // Make sure the component is mounted
        setIsLoaded(true);
        
        // Delay AOS initialization slightly to ensure DOM is ready
        const timer = setTimeout(() => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                startEvent: 'DOMContentLoaded',
                disable: 'mobile' // Temporarily disable on mobile for debugging
            });
            
            // Force update after initialization
            AOS.refresh();
        }, 100);
        
        // Refresh AOS on window resize
        window.addEventListener('resize', AOS.refresh);
        
        // Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', AOS.refresh);
        };
    }, []);

    // Add inline styles to ensure visibility
    const containerStyle = {
        display: 'block',
        visibility: 'visible',
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        backgroundColor: '#121212', // Fallback for --dark-bg
        position: 'relative',
        overflow: 'hidden'
    };

    return (
        <div className='timebody' id="Timeline" style={containerStyle}>
            <div className="timeline_head" style={{color: 'white', textAlign: 'center'}}>TIMELINE</div>
            <div className="maintimeline" style={{position: 'relative', maxWidth: '1200px', margin: '2rem auto'}}>
                {/* Timeline content */}
                <div className="maincontainer left-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box lt">
                        <h2><b>Problem Statement</b></h2>
                        <small>25th April</small>
                        <p>Problem Statement displayed on the website.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box rt">
                        <h2><b>Idea Submissions</b></h2>
                        <small>26th April</small>
                        <p>Idea submissions link will be open from 26th of April.</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer left-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box lt">
                        <h2><b>Closing of Idea Submissions</b></h2>
                        <small>13th May</small>
                        <p>The submission link for the idea submission will be closed and the shortlisting/evaluation of the idea submissions will be begin.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box rt">
                        <h2><b>Announcement of Shortlisted teams</b></h2>
                        <small>15th May</small>
                        <p>Results to be announced on the website and socialmedia handles of the shortlisted teams for the aventus hackathon</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer left-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box lt">
                        <h2><b>Commencement of Aventus 2.0</b></h2>
                        <small>18th May</small>
                        <p>Inauguration of the aventus and kickstarting of the event.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer right-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box rt">
                        <h2><b>Hackathon DAY-1</b></h2>
                        <small>18th May</small>
                        <p>Day 1 - of the event </p>
                        <p>Further detailed timeline of the day 1 can be viewed in the brochure.</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>

                <div className="maincontainer left-container">
                    <div className='timelineimgdiv'></div>
                    <div className="text-box lt">
                        <h2><b>Hackathon Day-2</b></h2>
                        <small>19th May</small>
                        <p>Results of the hackathon and price distribution.</p>
                        <p>Further detailed timeline of the day 2 can be viewed in the brochure.</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;