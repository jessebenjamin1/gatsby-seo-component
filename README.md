# Gatsby SEO Component

This is a component which can be used to set common meta tags in the <code>head</code> of pages in a Gatsby site.

You can set a default title, description, and image in the site's Gatsby config. When using the component. It is recommended to always pass <code>title</code> and <code>description</code> as props to avoid duplicate titles and metadescriptions. These props will set title & description meta tags, as well as associated Open Graph & Twitter tags.

When using this component, you should set default values for:

- filename of the default social sharing image in the graphql query
- the height and width of the default image
- default image alt text
