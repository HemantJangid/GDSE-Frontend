import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from 'react-gsap';


import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer"

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import cycle1 from "../assets/img/cycle1.png";
import cycle2 from "../assets/img/cycle2.png";
import _3dbtn from "../assets/img/3dbtn.svg";
import hexblack from "../assets/img/hexblack.svg";
import hexwhite from "../assets/img/hexwhite.svg";
import panel1 from "../assets/img/panel1.jpg";
// import video from '../assets/img/video.mp4';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return (
        <>
            <Header />
            <section id="hero">
                <AutoplaySlider play={true} bullets={false} interval={6000} organicArrows={false} className="hero-slider">
                    <div className="hero-slider-child">
                        <div className="container">
                            <div className="text">
                                <h1>Award Winning <br /> <span className="red">E-Bike</span>  Manufacturer</h1>
                                <p>12000 Sq. Ft. of manufacturing facility, World class Anti Dumping solution.</p>
                                <div className="btns mt-5">
                                    <Button text="Products" />
                                    <Button text="Virtual tour" />
                                </div>
                            </div>
                        </div>
                        <div className="td-cta">
                            <img src={_3dbtn} alt="3dbtn" />
                            <h4>View in 3d</h4>
                        </div>
                    </div>
                </AutoplaySlider>
            </section>


            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration="200%"
                    pin
                >
                    <Timeline
                        wrapper={<div id="pinContainer" />}
                    >
                        <section id="card1" className="hero-card">
                            <div className="bg-text">
                                <h1>Trible</h1>
                            </div>
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-6">
                                        <h3>Customise</h3>
                                        <h1>Get country specific specs</h1>
                                        <div className="btns">
                                            <div className="hex-btn mt-5">
                                                <img src={hexblack} alt="hex" />
                                                <h4>View models</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={cycle1} alt="cycle" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Tween
                            from={{ y: '100%' }}
                            to={{ y: '0%' }}
                        >
                            <section id="card2" className="hero-card">
                                <div className="bg-text">
                                    <h1>No. 1</h1>
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-lg-6">
                                            <img src={cycle2} alt="cycle" className="img-fluid" />
                                        </div>
                                        <div className="col-lg-6">
                                            <h3>World class</h3>
                                            <h1>After sale service</h1>
                                            <div className="btns">
                                                <div className="hex-btn mt-5">
                                                    <img src={hexblack} alt="hex" />
                                                    <h4>View models</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>

            <Footer />
        </>
    );
};

export default Home;
