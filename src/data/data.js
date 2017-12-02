const data = [
  {
    name: 'New Avenues for Youth',
    shopUrl: 'http://newavenues.org/',
    description: 'New Avenues for Youth provides resources for young people leaving the foster care system.',
    latitude: 45.549731,
    longitude: -122.676024,
    street: '909 N Beech St.',
    city: 'Portland',
    state: 'OR',
    zip: '97227',
    country: 'USA',
    category: 'Resource'
  },
  {
    name: 'Jim and Jane Bananas',
    shopUrl: 'http://www.heavenstea.com/',
    description: 'Tea is about making every moment special. We offer Public Tea Classes, Rare Tastings, Transformational Tea Journeys, Private Healing Sessions, Meditation and Tea in Nature outings. We are devoted to giving you an experience of Chinese tea in relation to self cultivation, meditation, healing and in support of your creative expression in the world.',
    latitude: 45.476545,
    longitude: -122.537125,
    street: '122nd Ave and SE Foster',
    city: 'Portland',
    state: 'OR',
    zip: '97215',
    country: 'USA',
    category: 'Family'
  },
  {
    name: 'Carrie and Samantha Johnson',
    shopUrl: 'http://www.taooftea.com/',
    description: 'Our focus is to offer teas from the Camellia Sinensis tea plants. Similar to grapes, the tea plants have many regions, varietals, processing methods, and seasons. More importantly, good tea sells out very quickly and is seldom made in large quantities. We as merchants are particular in working with growers to secure exceptional-tasting leaf each season. We pledge to share with you the artistry of the leaves, their origin, processing method, flavor vocabulary, and spirit.',
    latitude: 45.516211,
    longitude: -122.628746,
    street: '3430 SE Belmont St',
    city: 'Portland',
    state: 'OR',
    zip: '97214',
    country: 'USA',
    category: 'Family'
  },
  {
    name: 'Keeley Hammond and David Rappoccio',
    shopUrl: 'https://songtea.com/',
    description: 'Each year, we assemble a collection of traditional, rare and experimental tea from China and Taiwan. We look for skillfully crafted leaves from clean growing regions – teas with structure, texture, and complexity. More importantly, every tea in the collection needs to be delicious.',
    street: '2120 Sutter Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94115',
    country: 'USA',
    category: 'Family'
  },
  {
    name: 'Aung Si Sung',
    shopUrl: 'http://www.songfangtea.com/',
    description: 'Song Fang Maison de Thé specializes in the finest quality Chinese and French teas for sale and to savor on the premises. They offer a selection of 70 premium teas from China and France.',
    street: '227 Yongjia Rd',
    city: 'Shanghai',
    state: 'Xuhui Qu',
    zip: '200020',
    country: 'China',
    category: 'Mentor'
  },
  {
    name: 'Balaji Krishnamurthy',
    shopUrl: '',
    description: 'A cozy franchise shop based in the Yunnan province, specializing in oolongs.',
    street: 'Yunfang E Rd, Xishan Qu',
    city: 'Yunnan',
    state: 'Kunming',
    zip: '650034',
    country: 'China',
    category: 'Mentor'
  },
  {
    name: 'Susan Albright',
    shopUrl: 'http://www.lockcha.com/',
    description: 'Tranquil outfit in the middle of a park offering vegetarian dim sum dishes & premium teas.',
    street: 'Man Shing Industrial Building Suite 1601, 307-311',
    city: 'Hong Kong',
    state: '',
    zip: '',
    country: 'China',
    category: 'Family'
  },
  {
    name: 'Wisteria Tea House',
    shopUrl: 'http://www.wistariateahouse.com/',
    description: 'Wistaria House is a well-known and historically important teahouse located in the Daan District, of Taipei, Taiwan. The establishment is situated in a Japanese-style wooden house built in the 1920s on Xinsheng South Road. The teahouse is named after the three wisteria vines planted in the front courtyard forming a shaded area leading to the entrance of the building.',
    street: 'No. 1, Lane 16, Section 3, Xinsheng South Road, Da’an District',
    city: 'Taipei',
    state: '',
    zip: '106',
    country: 'Taiwan',
    category: 'tea house'
  },
  {
    name: 'Lin Ceramic\'s Studio',
    shopUrl: 'http://www.aurlia.com.tw/theme.php',
    description: 'Starting from make a small pot, it has now become an innovative brand name in tea wares in Great China. The classic kettle set has become an essential ware for teahouses as well as an important element in tea culture. In addition, Lin’s Ceramics Studio was also a sponsor of the Tea Serving Presentation in Taiwan Pavilion Expo 2010 Shanghai China.',
    street: 'No. 8, Lane 6, Yongkang Street, Da’an District',
    city: 'Taipei',
    state: '',
    zip: '106',
    country: 'Taiwan',
    category: 'tea shop'
  },
  {
    name: 'Far West Tea Traders',
    shopUrl: 'http://farwesttea.com/',
    description: 'We only procure teas that stand out with a distinctive and memorable character and supply them directly to you at the lowest possible price.  We are a company dedicated to enriching people’s lives through the love of tea and the alchemy of tea time.',
    street: 'No. 8, Lane 6, Yongkang Street, Da’an District',
    city: 'Santa Barbera',
    state: 'CA',
    zip: '',
    country: 'USA',
    category: 'tea production'
  },
  {
    name: 'Wan Ling Tea House',
    shopUrl: 'http://www.wanlingteahouse.com/section.php/116/1/shanghai-tea-house',
    description: 'Wan Ling Tea House is the coming together of tea lovers from opposite sides of the world. Our aim is to bring carefully selected loose leaf teas and a wealth of collected information together. Giving people the chance to better understand and explore the fascinating world of tea. And our actual ‘brick and mortar’ Shanghai tea house & tea shop.',
    street: 'Xizang Middle Rd, 268',
    city: 'Shanghai',
    state: 'Huangpu Qu',
    zip: '200000',
    country: 'China',
    category: 'tea house'
  },
  {
    name: 'Springs and Autumns',
    shopUrl: 'http://www.springsandautumns.com/',
    description: 'Based in Taipei\'s cultural district, Springs and Autumns is an online store sourcing teaware and objects of daily use from Taiwan and East Asia.',
    street: 'Online Retailer',
    city: 'Taipei',
    state: '',
    zip: 'Taiwan',
    country: '106',
    category: 'tea production'
  },
  {
    name: 'Red Blossom Tea Company',
    shopUrl: 'https://www.redblossomtea.com/',
    description: 'Red Blossom Tea Company is first and foremost a family owned tea shop in San Francisco\'s Chinatown, but we are also much more. We are direct importers, traveling thousands of miles in search of rare teas and artisan tea ware. We are educators, striving to bring the richness of traditional tea culture to our customers. And most importantly, we are tea lovers. We love to drink tea, talk tea, think tea and even obsess over tea.',
    street: '831 Grant Ave, CA 94108',
    city: 'San Francisco',
    state: 'CA',
    zip: '94108',
    country: 'united states',
    category: 'tea shop'
  }
];

export default data;