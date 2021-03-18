export default {
  widgets: [
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
                  buildHookId: '6053a20eca112700881438e7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-project-studio',
                  apiId: 'cc2a0c3f-6609-41e9-b856-324da5430688'
                },
                {
                  buildHookId: '6053a20e7c07b700cecdb89e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-project',
                  apiId: 'bde545ea-fb2c-4dd2-bf37-e79e96159245'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bichan17/sanity-kitchen-sink-test-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-project.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
