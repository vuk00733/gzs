import React, { useEffect } from "react";
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour, ProjectFive} from "./Data";
import { GroupOne, GroupTwo, GroupThree, GroupFour, GroupFive } from "./Data";
import { SponsorOne, SponsorTwo, SponsorFour,SponsorFive, PartnerOne, PartnerTwo,PartnerThree, PartnerFour, PartnerFive } from "./Data";
import Sponsors from "./Sponsors";
import MyGallery from "./Gallery";
import "./ProjectDetail.css";
import Footer from "./Footer";
import DividerProjects from "./DividerProjects";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDetail = ({ match }) => {
  const projects = [ProjectOne, ProjectTwo, ProjectThree, ProjectFour,ProjectFive];
  let clickedProject = {};
  projects.forEach((project) => {
    if (project.id === match.params.id) {
      clickedProject = project;
    }
  });

  const sponsors = [SponsorOne, SponsorTwo,SponsorFour,SponsorFive];
  const partners = [PartnerOne, PartnerTwo,PartnerThree,PartnerFour,PartnerFive];
  let clickedSponsors = [];
  let clikcedPartners = [];
  sponsors.forEach((sponsor, i) => {
    if (sponsor.id === match.params.id) {
      clickedSponsors[i] = sponsor;
    }
  });
  partners.forEach((partner, i) => {
    if (partner.id === match.params.id) {
      clikcedPartners[i] = partner;
    }
  });

  const groups = [GroupOne, GroupTwo, GroupThree, GroupFour,GroupFive];
  let clickedGroup = {};
  let clickedGroupNames = [];
  let clickedGroupImages = [];
  let clickedGroupLinks = [];
  let clickedGroupEmails = [];
  groups.forEach((group) => {
    if (group.idProject === match.params.id) {
      clickedGroup = group;
    }
  });
  for (const property in clickedGroup) {
    clickedGroupImages.push(`${clickedGroup[property]}`);
    clickedGroupLinks.push(`${clickedGroup[property]}`);
    clickedGroupEmails.push(`${clickedGroup[property]}`);
    clickedGroupNames.push(`${property}`);
  }
  clickedGroupEmails.splice(0, 14);
  clickedGroupLinks.splice(0, 8);
  clickedGroupLinks.splice(6);
  clickedGroupImages.splice(8);
  clickedGroupImages.splice(0, 2);
  clickedGroupNames.splice(0, 2);
  clickedGroupNames.splice(6);

  useEffect(() => {
    AOS.init({});
  }, []);
  const background = {
    background: `url('../${clickedProject.backgroundimage}') center center/cover no-repeat`,
  };
  return (
    <div>
      <div className="backgroundimage" style={background}>
        <h1 style={{color:"white"}}>{clickedProject.title}</h1>
      </div>
      <div className="headline-wrapper">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h2 style={{color:"#840c0c"}}>{clickedProject.headline}</h2>
        </div>
      </div>
      <DividerProjects {...clickedProject} />

      <h1 className="margin-bigger">Tim Koordinatora</h1>
      <div className="person-cnt">
        <div>
          <h2>{clickedGroupNames[0]}</h2>
          <img
            className="person-img"
            src={`../${clickedGroupImages[0]}`}
            alt=""
            style={{width: '400px', height: '300px',marginBottom:'10px'}}
          />
          <p>{clickedGroupEmails[0]}</p>{" "}
          <a href={clickedGroupLinks[0]}>
            <i className="fab fa-linkedin person-icon" />
          </a>
        </div>
        <div>
          <h2>{clickedGroupNames[1]}</h2>
          <img
            className="person-img"
            src={`../${clickedGroupImages[1]}`}
            alt=""
            style={{width: '400px', height: '300px',marginBottom:'10px'}}
          />
          <p>{clickedGroupEmails[1]}</p>{" "}
          <a href={clickedGroupLinks[1]}>
            <i className="fab fa-linkedin person-icon" />
          </a>
        </div>
      </div>
      <Sponsors {...clickedSponsors[clickedSponsors.length - 1]}></Sponsors>
      <Sponsors {...clikcedPartners[clikcedPartners.length - 1]}></Sponsors>
      <MyGallery project={clickedProject} style={{ marginTop: "200px" }} />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
