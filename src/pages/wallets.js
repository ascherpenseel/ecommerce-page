const headerMenu = [
  {
    key: 'Shop',
    subItems: [
      {
        key: 'Collections',
        url: '/',
        items: [
          {
            key: 'Featured',
            url: '/',
            featured: true,
          },
          {
            key: 'New Products',
            url: '/',
          },
          {
            key: 'Ultimate Desk Setup',
            url: '/',
          },
          {
            key: 'Moment Photography',
            url: '/',
          },
          {
            key: 'Black Leather',
            url: '/',
          },
          {
            key: 'Rustic Brown Leather',
            url: '/',
          },
          {
            key: 'Active Leather',
            url: '/',
          },
          {
            key: 'Outlet Sale',
            url: '/',
            featured: true,
          },
        ],
      },
      {
        key: 'Cases',
        url: '/',
        items: [
          {
            key: 'Phones',
            url: '/',
            featured: true,
          },
          {
            key: 'iPhone 11 Pro Max',
            url: '/',
          },
          {
            key: 'iPhone 11 Pro',
            url: '/',
          },
          {
            key: 'iPhone 11',
            url: '',
          },
          {
            key: 'iPhone XS / XR',
            url: '',
          },
          {
            key: 'Pixel 4',
            url: '',
          },
          {
            key: 'iPad',
            url: '',
            featured: true,
          },
          {
            key: 'iPad Pro 12.9-inch',
            url: '/',
          },
          {
            key: 'iPad Pro 11-inch',
            url: '/',
          },
          {
            key: 'Headphones',
            url: '',
            featured: true,
          },
          {
            key: 'AirPods Pro',
            url: '/',
          },
          {
            key: 'AirPods',
            url: '/',
          },
          {
            key: 'Pixel Buds',
            url: '/',
          },
        ],
      },
      {
        key: 'Power',
        url: '/',
        items: [
          {
            key: 'Wireless',
            url: '/',
            featured: true,
          },
          {
            key: 'Tesla Model 3',
            url: '/',
          },
          {
            key: 'Apple Watch',
            url: '/',
          },
          {
            key: 'Cables',
            url: '/',
            featured: true,
          },
          {
            key: 'Lightning',
            url: '/',
          },
          {
            key: 'Universal',
            url: '/',
          },
          {
            key: 'USB-C',
            url: '/',
          },
          {
            key: 'Battery Pack',
            url: '/',
            featured: true,
          },
        ],
      },
      {
        key: 'Straps',
        url: '/',
        items: [
          {
            key: 'Leather',
            url: '/',
            featured: true,
          },
          {
            key: 'Horween Leather',
            url: '/',
          },
          {
            key: 'Active Leather',
            url: '/',
          },
          {
            key: 'Slim Straps',
            url: '/',
          },
          {
            key: 'Shell Cordovan',
            url: '/',
          },
          {
            key: 'Waterproof',
            url: '/',
            featured: true,
          },
          {
            key: 'Sport Straps',
            url: '/',
          },
          {
            key: 'Active Leather',
            url: '/',
          },
          {
            key: 'Metal Bands',
            url: '/',
            featured: true,
          },
          {
            key: 'Titanium',
            url: '/',
          },
          {
            key: 'Steel',
            url: '/',
          },
        ],
      },
      {
        key: 'Gear',
        url: '/',
        items: [
          {
            key: 'Wallets',
            url: '/',
            featured: true,
          },
          {
            key: 'Slim Wallets',
            url: '/',
          },
          {
            key: 'Passport Wallets',
            url: '/',
          },
          {
            key: 'Other',
            url: '/',
            featured: true,
          },
          {
            key: 'Moment Lenses',
            url: '/',
          },
          {
            key: 'Wrist Strap',
            url: '/',
          },
          {
            key: 'Mousepads',
            url: '/',
          },
          {
            key: 'Key Chains',
            url: '/',
          },
          {
            key: 'Hats',
            url: '/',
          },
        ],
      },
    ],
  },
]

const products = [
  {
    name: 'Slim Wallet',
    description: 'Tile Tracking Edition',
    price: 79.95,
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007533_B_360x.jpg?v=1578064816 360w',
    hover:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007533_G_3_e45cdc82-cca1-4ea1-afaa-1e58b2020ef5_360x.jpg?v=1536795041 360w 360h',
    tags: ['with Tile Tracking'],
    url: '/',
  },
  {
    name: 'Slim Wallet',
    description: 'Tile Tracking Edition',
    price: 79.95,
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/856504015060_B_360x.jpg?v=1578064761 360w',
    hover:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/856504015060_G_360x.jpg?v=1553719436 360w 360h',
    tags: ['with Tile Tracking'],
    url: '/',
  },
  {
    name: 'Slim Wallet',
    description: 'Standard Edition',
    price: 59.95,
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007533_B_a44ec24b-6d98-46d7-9bb4-0e93d6f5398d_360x.jpg?v=1578064742 360w',
    hover:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007533_G_360x.jpg?v=1548886411 360w 360h',
    tags: ['without Tile Tracking'],
    url: '/',
  },
  {
    name: 'Slim Wallet',
    description: 'Standard Edition',
    price: 59.95,
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/856504015626_B_360x.jpg?v=1577972437 360w',
    hover:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/856504015626_G_360x.jpg?v=1566492260 360w 360h',
    tags: ['without Tile Tracking'],
    url: '/',
  },
  {
    name: 'Money Clip',
    description: 'Horween Leather',
    price: 29.95,
    image:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007526_A_360x.jpg?v=1577974135 360w',
    hover:
      'https://cdn.shopify.com/s/files/1/0384/6721/products/855848007526_B_360x.jpg?v=1548100273 360w 360h',
    tags: ['Money Clip'],
    url: '/',
  },
]

const footerMenu = [
  {
    title: 'Support',
    items: [
      {
        name: 'Return & Exchange',
        url: 'https://nomadgoods.com/pages/support',
      },
      {
        name: 'Shipping Info',
        url: 'https://nomadgoods.com/pages/shipping',
      },
      {
        name: 'FAQs',
        url: 'http://help.nomadgoods.com/',
      },
      {
        name: 'Log In',
        url: 'http://nomadgoods.com/account/login',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        name: 'Medical Supplies',
        url: 'https://nomadgoods.com/pages/medical-supplies',
      },
      {
        name: 'About Us',
        url: 'https://nomadgoods.com/pages/about',
      },
      {
        name: 'Press',
        url: 'https://nomadgoods.com/pages/press',
      },
      {
        name: 'Careers',
        url: 'https://nomadgoods.com/pages/careers',
      },
    ],
  },
  {
    title: 'Sales',
    items: [
      {
        name: 'Corporate Sales',
        url: 'https://nomadgoods.com/pages/corporate',
      },
      {
        name: 'Wholesale',
        url: 'https://nomadgoods.com/pages/wholesale-landing',
      },
      {
        name: "Where We're Sold",
        url: 'https://nomadgoods.com/pages/where-we-are-sold',
      },
      {
        name: 'Affiliates',
        url: 'https://nomadgoods.com/pages/affiliates',
      },
    ],
  },
  {
    title: 'Discover',
    items: [
      {
        name: 'The Nomadic',
        url: 'https://nomadgoods.com/pages/blog',
      },
      {
        name: 'Wallpapers',
        url: 'https://nomadgoods.com/pages/wallpapers',
      },
      {
        name: 'Puzzle for Good',
        url: 'https://nomadgoods.com/products/puzzle',
      },
      {
        name: 'Outlet Sale',
        url: 'https://nomadgoods.com/collections/outletsale',
      },
    ],
  },
]

export default {
  path: '/wallets',
  displayName: 'Wallets Collection',

  sections: [
    {
      componentName: 'Menu',
      props: {
        items: headerMenu,
        logo: 'https://cdn.shopify.com/s/files/1/0384/6721/files/logo_130x.png?v=1529008221',
        searchText: 'Search our store',
        announcement: 'Outlet Sale | Up to 70% off',
      },
    },
    {
      componentName: 'Hero',
      props: {
        as: 'h1',
        title: 'Wallets',
        subtitle: 'Horween Leather',
        bgImage:
          'https://cdn.shopify.com/s/files/1/0384/6721/collections/Gear_Wallets_19f23513-3ba8-43e4-a509-4ccf0575f942_1296x.jpg?v=1582755954',
      },
    },
    {
      componentName: 'TextBlock',
      props: {
        as: 'h3',
        title: 'Designed for the Adventurer',
        text:
          'Our wallets are designed with the same dedication to style and craftsmanship as all of our products. We use American Made Horween leather that will develop a beautiful patina with age, and offer integrated Tile tracking so you will never lose your wallet again',
      },
    },
    {
      componentName: 'ProductsByTags',
      props: {
        products: products,
      },
    },
    {
      componentName: 'Banner',
      props: {
        as: 'h3',
        url: 'https://nomadgoods.com/pages/finder',
        title: 'Looking for the Perfect Setup?',
        text: 'Answer a few questions and we’ll recommend the perfect gear curated just for you.',
        button: 'Take the Quiz',
        bgImage:
          'https://cdn.shopify.com/s/files/1/0384/6721/files/Collections_Banner_01_1.jpg?v=1589405403',
      },
    },
    {
      componentName: 'Footer',
      props: {
        menu: footerMenu,
        logo: 'https://cdn.shopify.com/s/files/1/0384/6721/files/logo_130x.png?v=1529008221',
        hasSubscribe: true,
        subscribeCTA: 'New products, blog updates, deals, and more.',
        subscribeUrl: '/',
        bgImage: 'https://cdn.shopify.com/s/files/1/0384/6721/t/110/assets/Topo_Footer_03.svg',
        socialLinks: {
          instagram: 'https://www.instagram.com/nomad/',
          facebook: 'https://www.facebook.com/nomadgoods',
          twitter: 'https://twitter.com/nomadgoods',
        },
      },
    },
  ],
}
