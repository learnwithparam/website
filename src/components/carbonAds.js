import React from 'react';
import { Helmet } from 'react-helmet';

const CarbonAds = () => {
  return (
    <>
      <Helmet>
        <script
          async
          type="text/javascript"
          src="//cdn.carbonads.com/carbon.js?serve=CK7IC27J&placement=learnwithparamcom"
          id="_carbonads_js"
        ></script>
      </Helmet>
    </>
  );
};

export default CarbonAds;
