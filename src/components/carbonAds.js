import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const CarbonAdsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f6fc;
  padding: 0.5rem 0;
  min-height: 172px;
  @media (max-width: 575.98px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const CarbonAdsWideContainer = styled(CarbonAdsContainer)`
  #carbonads {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
  }

  #carbonads {
    display: block;
    position: relative;
    overflow: hidden;
  }

  #carbonads > span {
    position: relative;
    display: block;
  }

  #carbonads a {
    color: inherit;
    text-decoration: none;
  }

  #carbonads a:hover {
    color: inherit;
  }

  .carbon-wrap {
    display: flex;
    align-items: center;
  }

  .carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
  }

  .carbon-img img {
    display: block;
  }

  .carbon-text {
    display: flex;
    margin-bottom: 12px;
    position: relative;
    max-width: 500px;
    font-size: 16px;
    line-height: 1.4;
    padding: 8px 1em;
    text-align: left;
    align-items: center;
  }

  .carbon-text:after {
    display: table;
    content: 'Learn More';
    white-space: nowrap;
    margin-left: 20px;
    background-color: hsl(0, 0%, 20%);
    padding: 12px 16px;
    border-radius: 3px;
    line-height: 1;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  .carbon-poweredby {
    position: absolute;
    bottom: 0;
    left: 146px;
    white-space: nowrap;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #999 !important;
  }

  @media only screen and (min-width: 320px) and (max-width: 759px) {
    .carbon-text:after {
      display: none;
    }
  }
`;

const loadCarbonAdsScript = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src =
    '//cdn.carbonads.com/carbon.js?serve=CK7IC27J&placement=learnwithparamcom';
  script.id = '_carbonads_js';
  script.async = true;
  document.getElementById('carbonAdsContainer').appendChild(script);
};

const CarbonAdsWide = () => {
  useEffect(() => {
    loadCarbonAdsScript();
  }, []);

  return (
    <CarbonAdsWideContainer
      className="carbonAdsContainer"
      id="carbonAdsContainer"
    ></CarbonAdsWideContainer>
  );
};

const CarbonAds = () => {
  return (
    <CarbonAdsContainer
      className="carbonAdsContainer"
      id="carbonAdsContainer"
    ></CarbonAdsContainer>
  );
};

export { CarbonAdsWide };

export default CarbonAds;
