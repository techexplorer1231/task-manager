# TODO APP

## Description

1. This App is a perfect solution for managing your day-to-day tasks. It is a simple and easy to use app that allows you to add, edit and delete tasks. You can also mark tasks as completed or uncompleted.
2. You can create and store multiple Todo lists. You can also add, edit and delete lists.
3. It is a responsive app that can be used on any device and follows the mobile-first approach.
4. It app supports resuming editing of tasks and lists even after the user has moved to another list and comes back.
5. It also supports deleting multiple tasks by selecting them and clicking on the delete button.
6. The app uses context API for managing sidebar state and useReducer hook for managing tasks and lists state.
7. The entire app styling is done using styled-components.
8. The app has reusable custom hooks like useFocusInput and useSidebarContext.
9. Used webp images for faster loading.
10. The app consists of two sidebars - one for desktop and one for mobile. The sidebar for mobile is a drawer that can be opened by clicking on the hamburger icon.

## Folder Structure

- `src/`: Contains the main source code of your application.
  - `components/`: Reusable UI components.
  - `assets/wrappers/`: Styled-Components for each component.
  - `reducers/`: Reducers for managing tasks and lists state.
  - `hooks/`: Reusable custom hooks.
  - `constants/`: Constants used in the app.
  - `containers/`: Components that contain multiple components.
  - `utils/`: Utility functions and modules.
  - `App.js`: Root component of your app.
  - `index.js`: Entry point for your app.
- `public/`: Static assets that are directly copied to the build folder.
- `node_modules/`: Dependencies installed via npm/yarn.
- `package.json`: Configuration file for your project.
- `README.md`: This file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
