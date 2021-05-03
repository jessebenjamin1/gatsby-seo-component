import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    file(name: { eq: "defaultSocialShareImage" }) {
      publicURL
    }
  }
`;

const GatsbySEO = ({
  description,
  lang,
  meta,
  title,
  image,
  imageWidth,
  imageHeight,
  alt,
  type,
  slug,
  robots,
}) => {
  const data = useStaticQuery(getSiteData);
  const metaDescription = description || data.site.siteMetadata.description;
  const pageTitle = title || data.site.siteMetadata?.title;
  const url = data.site.siteMetadata.siteUrl;
  const shareImage = image || data.file.publicURL;
  const imageAlt = alt || "set the default image alt";
  const ogImageWidth = imageWidth || "1500";
  const ogImageHeight = imageHeight || "1000";
  const ogType = type;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: robots || "index",
        },
        {
          name: `googlebot`,
          content: robots || "index",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${url}${slug}`,
        },
        {
          property: `og:image`,
          content: `${url}${shareImage}`,
        },
        {
          property: `og:image:alt`,
          content: imageAlt,
        },
        {
          property: `og:image:width`,
          content: ogImageWidth,
        },
        {
          property: `og:image:height`,
          content: ogImageHeight,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${url}${shareImage}`,
        },
        {
          property: `twitter:image:alt`,
          content: imageAlt,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={`${url}${slug}`} />
    </Helmet>
  );
};

GatsbySEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

GatsbySEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default GatsbySEO;
