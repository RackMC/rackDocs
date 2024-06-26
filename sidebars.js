/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
//   sidebar: [
//     'index',
//     {
//       type: 'category',
//       label: 'Creative',
//       link: {type: 'doc', id: 'Creative/index'},
//       items: [],
//     },
//   ]
// ,
  docs: [
    'index',
    {
      type: 'category',
      label: 'Factions',
      link: {
        type: 'generated-index',
        title: 'Factions Documentation',
        description: 'Documentaion for the factions server',
        slug: '/Factions',
      },
      items: ['Factions/factions-starting', 'Factions/factions-commands', 'Factions/factions-powerranking'],
    },
    {
      type: 'category',
      label: 'Creative',
      link: {
        type: 'generated-index',
        title: 'Creative Documentation',
        description: 'Documentaion for the creative server',
        slug: '/Creative',
      },
      items: ['Creative/creative-basics'],
    },
    {
      type: 'category',
      label: 'Lands',
      link: {
        type: 'generated-index',
        title: 'Lands Documentation',
        description: 'Documentaion for the lands server',
        slug: '/Lands',
      },
      items: ['Lands/lands-basics', 'Lands/lands-getting-started', 'Lands/lands-subareas', 'Lands/lands-rent', 'Lands/lands-nations', 'Lands/lands-wars', 'Lands/lands-commands', 'Lands/lands-jobs', 'Lands/lands-chestshops', 'Lands/lands-rtp', 'Lands/lands-mcmmo', 'Lands/lands-pvp', 'Lands/lands-auction', 'Lands/lands-brewery', 'Lands/lands-imageframe', 'Lands/lands-elevators'],
    },
  ],
};

module.exports = sidebars;
