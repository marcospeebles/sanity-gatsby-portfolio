export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9ffb873d4cf2a8e26eeaae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3smfz1nz',
                  apiId: '33f6e43e-058a-4c06-88e6-3fc10c9a1d1d'
                },
                {
                  buildHookId: '5d9ffb8737ec49a4fb7cd44a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xesr5ejk',
                  apiId: '557a3222-ca77-4f7a-addc-1c2df05c58d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcospeebles/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xesr5ejk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
