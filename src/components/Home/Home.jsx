import React from 'react';
import AboutMe from './AboutMe';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Profile></Profile>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;