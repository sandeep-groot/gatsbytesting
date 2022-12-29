import React from "react";

import { Router } from "@reach/router";
import BlogPage from "../components/ArticlePage";
import BlogDetail from "../components/ArticleDetailPage";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../components/HomePage";
import About from "../components/AboutPage";
import SEO from "../seo";
// import Contact from "../components/ContactPage";
// import LegalPage from "../components/LegalPage";

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Router>
        <HomePage path="/" />
        <About path="/about" />
        {/* <Contact path="/contact" />
      <LegalPage path="/legal" /> */}
        <BlogPage path="/blog" />
        <BlogDetail path="/blog/:blog-detail" />
        <ErrorPage default />
      </Router>
    </>
  );
};

export default IndexPage;
