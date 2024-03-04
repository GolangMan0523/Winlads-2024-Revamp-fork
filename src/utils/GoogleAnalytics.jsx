import React from "react";
import { Helmet } from "react-helmet";

const GoogleAnalytics = ({ trackingCode }) => (
    <Helmet>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingCode}`}></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', '${trackingCode}');
      `}
    </script>
  </Helmet>
);

export default GoogleAnalytics;


