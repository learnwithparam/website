import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import TeachSection from '../components/teachSection';

import heroImage from './../images/programming.svg';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `teaching code`,
        `learn javaScript ecosystem`,
        `learn react`,
        `redux and mobx`,
        `learn with param`,
        `graphql`,
      ]}
    />
    <Hero
      title={`Hi, I'm Param 👋`}
      descriptions={[
        `I help people to learn web and mobile technologies through workshops, webinars and courses.`,
        `I prefer teaching through practical examples and encourage everyone to learn by doing.`,
      ]}
      image={heroImage}
    />
    <TeachSection
      title={`What I teach`}
      description={`In the large JavaScript Ocean, I explored few of the islands. I love to guide through those islands for beginners and professionals`}
      contents={[
        {
          title: `Introduction to web development`,
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
          title: `Advanced HTML and CSS`,
          description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
        },
        {
          title: `Getting started with JavaScript Programming`,
          description: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.`,
        },
        {
          title: `Modern Javascript`,
          description: `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire`,
        },
        {
          title: `Advanced Javascript`,
          description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested`,
        },
        {
          title: `React Fundamentals`,
          description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
        },
        {
          title: `Advanced React`,
          description: `Contrary to popular belief, Lorem Ipsum is not simply random text`,
        },
        {
          title: `State Management in React`,
          description: `The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.`,
        },
        {
          title: `Advanced React hooks`,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        },
        {
          title: `Gatsby for web apps`,
          description: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy`,
        },
        {
          title: `UI / UX for Developers`,
          description: `Various versions have evolved over the years, sometimes by accident, sometimes on purpose `,
        },
        {
          title: `Introduction to firebase`,
          description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        },
        {
          title: `Testing in Javascript`,
          description: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters`,
        },
        {
          title: `GraphQL in Javascript`,
          description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`,
        },
      ]}
    />
  </Layout>
);

export default IndexPage;
