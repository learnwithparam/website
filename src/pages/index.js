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
      description={`In the large JavaScript Ocean, I am exploring few of the Islands. On my way, I love to guide through those islands for beginners and professionals`}
      contents={[
        {
          title: `HTML, CSS and Everything`,
          description: `User interface is an art. HTML5 and CSS3 are the tools to create UI for web. Most web developers start their learning journey with HTML and CSS.`,
        },
        {
          title: `JavaScript++`,
          description: `JavaScript world has grown into an multi-verse. You can create any kind of applications targeting desktop, web and mobile using JS.`,
        },
        {
          title: `React and Move Faster`,
          description: `Ease of development and maintainability is the key for software development. React has been the game changer in development experience. More and more developers are learning react based web and mobile stack to boost up their career opportunities.`,
        },
        {
          title: `GraphQL and its Networks`,
          description: `GraphQL become buzzword in tech for recent times along with React. I foresee graphql is here to stay for long with strong communities and companies backing it. A nice to have knowledge will become must have skill on every job description in near future.`,
        },
        {
          title: `CSS-in-JS and CSS++`,
          description: `What CSS in JS? Are you kidding me? No, I am not. HTML is JS and CSS in JS aren't bad anymore. Its solves lot of development problems in recent times and one of the technologies for future along with React and GraphQL`,
        },
        {
          title: `Flirting with Flutter`,
          description: `Why flutter? Aren't react developers choose react native for mobile development? Well, I strongly believe in Horses for the Courses. Web and mobile frameworks requires different strategies. I like flutter for several reason, but the main one is, It helps me to learn good things from non JavaScript world. After all, Monopoly is bad, no?!`,
        },
        {
          title: `Gatsby Party`,
          description: `Isn't Gatsby belongs to React ecosystem? Yes it does. But I want to keep a special mention for this awesome framework. Gatsby along with headless CMS will replace a lot of traditional decades old websites. Oh boy, this is just a leaf out of whole Gatsby plant, I can't wait to see when the plants becomes a beautiful garden.`,
        },
      ]}
    />
  </Layout>
);

export default IndexPage;
