import Mylayout from "../Layouts/Mylayout";
import React, { Suspense } from "react";
const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ProjectsPage = React.lazy(() => import("../pages/ProjectsPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const Home = () => {
  return (
    <>
      <Mylayout>
        <Suspense fallback={<div>Loading.....</div>}>
          <HomePage />
        </Suspense>
      </Mylayout>
    </>
  );
};
const About = () => {
  return (
    <Mylayout>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
    </Mylayout>
  );
};
const Projects = () => {
  return (
    <Mylayout>
      <Suspense fallback={<div>Loading....</div>}>
        <ProjectsPage />
      </Suspense>
    </Mylayout>
  );
};
const Blog = () => {
  return (
    <Mylayout>
      <Suspense fallback={<div>Loading....</div>}>
        <BlogPage />
      </Suspense>
    </Mylayout>
  );
};
const Contact = () => {
  return (
    <Mylayout>
      <Suspense fallback={<div>Loading....</div>}>
        <ContactPage />
      </Suspense>
    </Mylayout>
  );
};

const navigations = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
];
export default navigations;
