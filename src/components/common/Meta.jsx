import { Helmet } from 'react-helmet-async';

export default function Meta({ title, description, imgUrl, imgPath }) {
  return (
    <Helmet>
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      {imgUrl ? (
        <meta property="og:image:url" content={imgUrl} />
      ) : (
        imgPath && <meta property="og:image" content={imgPath} />
      )}
      <meta property="og:image:width" content="600" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="ko_KR" />
      <title>{title}</title>
    </Helmet>
  );
}
