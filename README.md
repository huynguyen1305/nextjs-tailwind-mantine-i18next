### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/huynguyen1305/nextjs-tailwind-mantine-i18next.git my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

**Note: 
- Remove this remote origin: `git remote remove origin`
- Then add your remote repo: `git remote set-url origin git://new.url.here`

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.scss`: your SCSS file using Tailwind CSS
- `src/config/appSEOConfig.ts`: configuration SEO
- `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.


### Notes for workflow:
- All page/components must have below, for all page translated
```shell
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      // Will be passed to the page component as props
    },
  };
};
```
- All components inside page will write in /feature/folder-page
- All GENERAL or SHARED components will write in /components folder
- For Image outside, pass url to `remotePatterns` in `next.config.js`. 
- For Image Component: Limit use `fill` props because of it can't responsive. Use this:
```shell
<div style={{ position: 'relative', width: '300px' }}>
   <Image
     src="https://nxas.nexon.com/images/background/pc-background-07.png"
     alt="testPic"
     width={1280} // This will be resolution of image. Suggest: 1280x720 (HD)
     height={720} // This will be resolution of image. Suggest: 1280x720 (HD)
     style={{
       width: '100%',
       height: 'auto',
       maxHeight: 'calc(100vh - 68px)',
       objectFit: 'cover',
      }} // Treat image span full parent div width
    />
</div>
```


### Test workflow:
- Focus on Integration test method:
  - In (Arrange): prepare Input
  - Act: invoke function, trigger event click/change, ...
  - Out (Assert) : result output
- Priority: 
  - Feature components
  - Component in `/components`
  
 ### Git workflow:
- #### Before coding: 
  - Go to Jira and create task to get Task Code
  - Checkout new branch base on Task Code
- #### Before commit:
  - Check and change/update: `git status`
  - If has any, stash your code `git stash` and pull new change `git pull`
  - After pull, `git stash list` to show list stash. And choose stash {id}
  - (*Need Carefully) Check that stash have conflict with our local code `git stash show -p stash@{id}`. 
  - Then pick stash {id} `git stash apply stash@{id}` or `git stash pop` to get and clean up newest stash
  - Resolve conflict if have, then add `git add .`
  - After add, run `yarn commit` to start `cz`. Remember, subject will be the Jira Task Code
 
### Commit Message Format
```shell
yarn commit
```

### Deploy to production
```shell
$ yarn build
$ yarn start
```

---
---
---

### Features
Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🦺 Unit Testing with Jest and React Testing Library
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
yarn build-prod
```

All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.
### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

### License
Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com)

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

