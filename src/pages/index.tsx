import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Particles from "react-tsparticles";
import "../css/old.css"

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const wrapper = {
    backgroundColor: "rgba(35, 39, 65, 0)",
     position: "absolute",
     top: "28%",
     left: "10%",
     color: "#ffffff",
     fontSize: "50px",
     textAlign: "left",
     textIndent: '4px',
     lineHeight: '14px',
     paddingBottom: '2px',
     fontFamily: 'Montserrat',
     //fontWeight: 'normal',
  }

  const tabBlink = {
    WebkitAnimation: "blink .75s linear infinite",
	  MozAnimation: "blink .75s linear infinite",
    animation: "blink .75s linear infinite",
    display: "inline-block",
  }
  return (
    <div className="wrapper">
  <div className="topline">Welcome to RackMC<p className="tab blink">_</p></div>
  
  <p className="subtitle bottomline">IP: PLAY.RACKMC.NET [JAVA 1.8-1.17]</p>

  <a href="https://discord.com/invite/PyeT9Dk2Dp" target="_blank" className="square_btn btn_discord">Discord</a>
  <a href="https://store.rackmc.net" target="_blank" className="square_btn btn_store">Store</a>
</div>
    // <div style={{
    //   backgroundColor: "rgba(35, 39, 65, 0)",
    //    position: "absolute",
    //    top: "28%",
    //    left: "10%",
    //    color: "#ffffff",
    //    fontSize: "50px",
    //    textAlign: "left",
    //    textIndent: '4px',
    //    lineHeight: '14px',
    //    paddingBottom: '2px',
    //    fontFamily: 'Montserrat'}}>
    //    <div style={{paddingBottom: '20px',
    //  lineHeight: '70px',
    //  wordWrap: 'break-word'}}>Welcome to RackMC<p style={{
    //   WebkitAnimation: "blink .75s linear infinite",
    //   MozAnimation: "blink .75s linear infinite",
    //   animation: "blink .75s linear infinite",
    //   display: "inline-block",
    // }}>_</p></div>
      
    //   <p class="subtitle bottomline">IP: PLAY.RACKMC.NET [JAVA 1.8-1.17]</p>

    //   <a href="https://discord.com/invite/PyeT9Dk2Dp" target="_blank" style={{display: 'inline-block',
    // padding: '0.5em 1em',
    // textDecoration: 'none',
    // color: '#FFF',
    // borderRadius: '3px',
    // fontSize: '25px',
    // backgroundColor: '#668ad8',
    // borderBottom: 'solid 4px #627295'}}>Discord</a>
    //   <a href="https://store.rackmc.net" target="_blank" style={{display: 'inline-block',
    // padding: '0.5em 1em',
    // textDecoration: 'none',
    // color: '#FFF',
    // borderRadius: '3px',
    // fontSize: '25px',
    // backgroundColor: '#4ebeab',
    // borderBottom: 'solid 4px #359671'}}>Store</a> 
    // </div>
  );
}

function Space() {
  const {siteConfig} = useDocusaurusContext();
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const css = {
    height: "1000px",
    position: 'relative'
  }

  return (
    <div style={{
      height: "1000px",
      position: 'relative'
    }}>
      <Particles
      style={{position: 'absolute'}}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#101011",
          },
          opacity: 0.5,
          size: "contain"
          
        },
        fpsLimit: 60,
        // interactivity: {
        //   events: {
        //     onClick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //     onHover: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     bubble: {
        //       distance: 400,
        //       duration: 2,
        //       opacity: 0.8,
        //       size: 40,
        //     },
        //     push: {
        //       quantity: 4,
        //     },
        //     repulse: {
        //       distance: 200,
        //       duration: 0.4,
        //     },
        //   },
        // },
        particles: {
          color: {
            value: "#53f8f8",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 0,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
        fullScreen: false
      }}
    />
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <Space/>
      </main>
    </Layout>
  );
}
