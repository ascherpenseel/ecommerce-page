export default {
  path: '/index',
  displayName: 'Example',

  sections: [
    {
      componentName: 'ExampleComponent',
      props: {
        as: 'h1',
        content: 'Hello World',
      },
    },
    {
      componentName: 'Button',
      props: {
        as: 'button',
        children: 'Another Button',
      },
    },
  ],
}
