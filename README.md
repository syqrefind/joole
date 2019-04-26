## Notes

#### Login Page

Login Margin: 34%, 1- 65.8% = 34.2%

Login Width: 31.8%

Login top margin: 24%

Sign up: 6.6% to top; 3.4% to right

Logo Text: 17vh, 

Description Text: 3vh

Input box font:

Placeholder Text:

Login Button: 2.5vh, #6384a3, #ffffff

### Search Bar

select: \#d9d9d9

Color and triangle: #595959

search icon: \#443f3f

Size:722x41 (661)

| 83.0% |
| ----- |
| 4.7%  |
| 76.0% |

Position

| 53.2% |
| ----- |
| 48.4% |
| 42.2% |
| 48.9% |





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# joole plus

> The state-of-art MERN-Stack web application implementing an B2B E-Commerce (procurement) business model.

List of additional technologies to be used in this upgraded project:

- Sass/SCSS
- Jest
- Enzyme
- Jenkins/CircleCI
- AWS
- (Docker)
- HTTPS
- WebSocket

List of NO's:

- No Bootstrap
- No Material Design Libraries
- No Glyphcons (Use Fontawesome 5 icons instead)



### Thoughts on Project Management:

Issues with separating work as per component full-stack: 

- **Backend APIs** are not necessarily separated **component-wis**e, resulting in overlapping responsibilities of different **CRUD APIs**

- **Dependency Injection** results in overlapping responsibilities of **services/contexts/actions** & **dispatcher** & **reducers**/**interceptors**

- **Solution**:

  1. ==Build Dummy Data (as subtasks)==
  2. ==<u>Build/Test UI Components with dummy data (as subtasks)</u>==

  3. ==<u>Build/Test Services/Contexts/Redux Flow with dummy data (as subtasks)</u>==

  4. ==<u>Build/Test APIs mapping CRUD operations (as subtasks)</u>==

  5. ==<u>Build "global services" (i.e. Interceptors/Error Handlers) (as subtasks)</u>==

  6. ==<u>Build Backend Middleware (as subtasks)</u>==