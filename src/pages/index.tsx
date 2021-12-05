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

  return (
    <div>
      <div className="wrapper">
        <div className="topline">Welcome to RackMC<p className="tab blink">_</p></div>
        
        <p className="subtitle bottomline">IP: PLAY.RACKMC.NET [JAVA 1.8-1.17]</p>

        <a href="https://discord.com/invite/PyeT9Dk2Dp" target="_blank" className="square_btn btn_discord">Discord</a>
        <a href="https://store.rackmc.net" target="_blank" className="square_btn btn_store">Store</a>
     </div>
    </div>
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


  return (
    <div style={{
      flex: 1,
      zIndex: 0
    }}>
      <Particles
      style={{flex: 1, position: "fixed"}}
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
      <main style={{display: "flex"}}>
        {/* <HomepageFeatures /> */}
        <Space/>
      </main>
    </Layout>
  );
}
