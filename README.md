# Problem description
You will be given and URL of a page that you will have to reproduce in this repository, using the approach described bellow.

Steps you need to take are:

1. Break down the page into horizontal sections - react components
2. Implement those components
3. Build the page object that will render the page

### How do Components work?

- Components are defined in `src/components/` directory. There are some examples provided for you
- Each component consists of three files:
  - `index.js` - component code that has a default export of component
  - `styles.css` - component styles
    - Should follow [SuitCSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#components)
    - We only use component css, we don't use any global.css only what's initially provided in `src/global.css`
  - ComponentName.stories.js containing the stories demonstrating component API
- Only absolute imports can be used in components, do not use relative imports (There's an alias defined for composing components that you can use as [shown in this example](./src/components/Button/index.js))
- Even though you're only building a single page, treat components as reusable, like if you were building multiple pages with different content but the same UI. You can take a look at some other pages of the site and consider what could be configurable in component
- Component should be exported from `src/components/index.js`

### How do pages work?
Pages are basically an array of component names and their props. You can define your page in `src/pages`, there's an example provided you can check out. Don't forget to export it using `src/pagePathsMapping.js`.
Page should be server-side renderable. (You don't have to implement server-side renderer though)

### How do I see my changes?
After you build you components, build page object and add it to `pagePathsMapping.js` you should see your page on the route you used. Take a look at `App.js` to see how exactly routing works.

### Can I add dependencies?
In order to keep app small, try not to, but feel free to add them if you need it.

### Which files can I modify and which ones I cannot?
You should only work on:

- `src/components` and `src/pages` directories
- `src/pagePathsMapping.js` file

and leave the rest as is

### Do I have to reproduce *everything*?
The main goal is for the page to look and feel the same. You don't need to reproduce functionality of anything that's interacting with back-end or some 3rd party services, like:

- Add to cart button
- Cart
- Reviews

But you still need to implement the UI for them


### How do I contact you if I have a question about a task?
If the question is about the implementation try to make a decision yourself, consider that as a part of the task.

# Linting and formatting

Eslint and prettier are set up in this repo. You can use IDE extension or manually run `yarn lint:fix`


# Running the app

```
# Install dependencies
yarn install

# Start the development server
yarn start

# Start storybook
yarn storybook
```

# Submitting the result
Upload the result to Github and drop us a link on email. Good luck!

