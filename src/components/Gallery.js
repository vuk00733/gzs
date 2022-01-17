import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";
import { ProjectOne, ProjectTwo, ProjectThree, ProjectFour } from "./Data";

const MyGallery = (props) => {
  const projects = [ProjectOne, ProjectTwo, ProjectThree, ProjectFour];
  let clickedProject = {};
  projects.forEach((project) => {
    if (project.id === props.project.id) {
      clickedProject = project;
    }
  });
  const images = [
    {
      original: `../${clickedProject.img1}`,
      thumbnail: `../${clickedProject.img1}`,
    },
    {
      original: `../${clickedProject.img2}`,
      thumbnail: `../${clickedProject.img2}`,
    },
    {
      original: `../${clickedProject.img3}`,
      thumbnail: `../${clickedProject.img3}`,
    },
    {
      original: `../${clickedProject.img4}`,
      thumbnail: `../${clickedProject.img4}`,
    },
    {
      original: `../${clickedProject.img5}`,
      thumbnail: `../${clickedProject.img5}`,
    },
    {
      original: `../${clickedProject.img6}`,
      thumbnail: `../${clickedProject.img6}`,
    },
    {
      original: `../${clickedProject.img7}`,
      thumbnail: `../${clickedProject.img7}`,
    },
    {
      original: `../${clickedProject.img8}`,
      thumbnail: `../${clickedProject.img8}`,
    },
    {
      original: `../${clickedProject.img9}`,
      thumbnail: `../${clickedProject.img9}`,
    },
    {
      original: `../${clickedProject.img10}`,
      thumbnail: `../${clickedProject.img10}`,
    },
    {
      original: `../${clickedProject.img11}`,
      thumbnail: `../${clickedProject.img11}`,
    },
    {
      original: `../${clickedProject.img12}`,
      thumbnail: `../${clickedProject.img12}`,
    },
    {
      original: `../${clickedProject.img13}`,
      thumbnail: `../${clickedProject.img13}`,
    },
    {
      original: `../${clickedProject.img14}`,
      thumbnail: `../${clickedProject.img14}`,
    },
  ];
  return (
    <div>
      <div style={{marginTop:"100px"}}></div>
      <ImageGallery items={images}></ImageGallery>
      <div style={{marginTop:"100px"}}></div>
    </div>
  );
};

export default MyGallery;
