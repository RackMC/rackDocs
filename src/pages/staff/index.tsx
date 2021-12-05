import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './staff.css'

function HomepageHeader() {

  return (
    <h1 className='staffHeader'> 
      Our Staff
    </h1>
  );
}

function StaffCard(props) {

    let color = "salmon"

    if (props.title == "Admin") {
      color = '#0F7998'
    } else if (props.title == "Manager") { 
      color = '#295E6E'
    } else if (props.title == "Moderator") { 
      color = '#6736E2'
    } else if (props.title == "Builder") { 
      color = '#BAB22A' 
    } else if (props.title == "Helper") { 
      color = '#1E9738'
    }

    return (
      <div className="cards" style={{backgroundColor: color}} >
        <img className="cardImg" src={props.image}></img>
        <div className="cardName">{props.name}</div>
        <div className="cardTitle">{props.title}</div>
        
      </div>
    );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      
      <main style={{display: 'block'}}>
        <HomepageHeader />
        <div className="cardContainer">
          <StaffCard name="NEvana" title="Admin" image="https://github.com/nevana0003.png" url="" />
          <StaffCard name="Hyp3r7" title="Admin" image="https://github.com/hyp3r7.png" url="" />
          <StaffCard name="Tactry3" title="Admin" image="https://github.com/tactryl3.png" url=""/>
          <StaffCard name="SleepyDubz" title="Admin" image="https://i.imgur.com/CzBPQyH.png" url=""/>
          <StaffCard name="Tuckersbro" title="Manager" image="https://i.imgur.com/CzBPQyH.png" url="" />
          {/* <StaffCard name="retard" title="Manager" image="https://i.imgur.com/CzBPQyH.png" url="" />
          <StaffCard name="gayass" title="Manager" image="https://i.imgur.com/CzBPQyH.png" url="" />
          <StaffCard name="idiot" title="Manager" image="https://i.imgur.com/CzBPQyH.png" url=""/>
          <StaffCard name="degen" title="Moderator" image="https://i.imgur.com/CzBPQyH.png" url="" />
          <StaffCard name="cumlord" title="Moderator" image="https://i.imgur.com/CzBPQyH.png" url="" />
          <StaffCard name="retard again" title="Builder" image="https://i.imgur.com/CzBPQyH.png" url="" />
          <StaffCard name="tac" title="Helper" image="https://i.imgur.com/CzBPQyH.png" url=""/> */}
        </div>
        
      </main>
    </Layout>
  );
}

// url: https://github.com/nevana0003
//   image_url: https://github.com/nevana0003.png

// hyp3r7:
//   name: Hyp3r7
//   title: Admin
//   url: https://hyp3r7.com
//   image_url: https://github.com/hyp3r7.png

// tactryl3:
//   name: Tactryl3
//   title: Admin
//   url: https://github.com/tactryl3
//   image_url: https://github.com/tactryl3.png