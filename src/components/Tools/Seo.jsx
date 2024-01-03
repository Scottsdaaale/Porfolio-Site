import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function SEO({title, description, name, type, image, url}) {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content="artical" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />}
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
{ /* End Twitter tags */ }
</Helmet>
)
}