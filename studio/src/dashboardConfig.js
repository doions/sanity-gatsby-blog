export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '603e502eff51841461c0f9e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-us7mg7a5',
                  apiId: '93794700-68fe-40e0-a720-1de48b076b48'
                },
                {
                  buildHookId: '603e502e04a9c8129e386a58',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k2e9pau9',
                  apiId: 'd37cf824-7a27-44d6-93c2-b511a0bd85d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/doions/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k2e9pau9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
