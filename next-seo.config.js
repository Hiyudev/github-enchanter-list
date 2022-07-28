const title = 'Github Enchanter List';
const description = 'List of cool static and dynamic badges for your README.';
const url = 'https://github-enchanter-list.vercel.app';

const SEO = {
  defaultTitle: title,
  description: description,
  additionalMetaTags: [
    {
      property: 'keywords',
      content:
        'github badges, github dynamic badges, github enchant list, github enchanter list, github stats readme, github readme list, github readme badges',
    },
    {
      name: 'theme_color',
      content: '#10B981',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/asset/favicon.ico',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: url,
    title: title,
    site_name: title,
    description: description,
    images: [
      {
        url: `${url}/static/Banner.png`,
        width: 1360,
        height: 768,
        alt: 'Og Image Alt',
      },
    ],
    imageWidth: 1360,
    imageHeight: 768,
  },
  twitter: {
    handle: '@Hiyudev',
    cardType: 'summary_large_image',
  },
};

export default SEO;
