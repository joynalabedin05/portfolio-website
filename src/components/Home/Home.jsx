import React from 'react';
import AboutMe from './AboutMe';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <AboutMe></AboutMe>
            <Profile></Profile>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;