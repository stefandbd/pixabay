### Table of Contents  
- [App Configuration](#appconfig)
	- [How to run](#howtorun)
	- [VS Settings](#vssettings)
	- [ENVs](#envs)
- [App Architecture](#apparch)
    - [Theming & Styling](#theming)
    - [Navigation](#navigation)
- [Redux & Redux-Sagas](#redux)
- [Dashboard Page](#dashboard)
    - [Infinite Scrolling](#infinitescroll)
    - [Search](#search)
- [Details Page](#details)


<a name="appconfig"/>

# Pixabay App

This project was bootstrapped with

```sh
npx react-native init mvp --template react-native-template-typescript
```

<a name="howtorun"/>

### How to run

From your terminal run:
```sh
yarn
cd ios && pod install
```
After that from project root run:
```sh
npm start
```
<a name="vssettings"/>

### Recommended VS Settings 

<details>
  <summary>Expand...</summary>
  
```
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true,
  
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "[javascript]": {
        "editor.formatOnSave": false
    }
  }
```
</details>

<a name="envs"/>

### ENVs

The app contains for this exercise, only one environment: .env file
Configured with react-native-config

<a name="apparch"/>

# App Architecture

App's architecture follow a simple and pretty clean approach of React-Native applications. But the folders' naming conventions are as following:
- Reusable Generic Components: components/componentName/index.tsx (with style.ts)
- Screens: modules/screenName/screen.tsx (with style.ts)

Also used babel's module resolver as a shortcut for imports with $ symbol.

<a name="theming"/>

### Theming & Styling

For theming the application contains a folder with Sizes and Colors to use as constants in most of the places needed.
Coming to styling, styled-components are implemented.

<a name="navigation"/>

### Navigation

Using React-Navigation v6 with a single stack (main-navigator.tsx).

<a name="redux"/>

# Redux & Redux-Sagas

For the state management, Redux was used.
Redux-Sagas were used as a side effect manager, using ES6 generator functions to be able to to tackle parallel execution, task concurrency, task racing, task cancellation, and more.

<a name="infinitescroll"/>

### Infinite Scrolling

Using FlatList with it's best practices for performance and enabling infinite scroll with pagination from the API.
When the scrolling ends, another API call is made to fetch the next 10 items (as the next page).
Whenever the data ends (does not have a next page/more items), we handle this check in sagas, and we call API_LIST_END action.

<a name="search"/>

### Search

Search functionality works based on a simple TextInput, but there is a separate, reusable component for it (components/SearchBar).
Clear search functionality included that resets the input value and the redux data to an empty array.

<a name="details"/>

# Details Page

Using React-Navigation, we pass the item (entire object of the photo - which might not be the best case if we were talking about having deep links for example).
In the Details page, there is the picture loaded as long as other relevant information: user, resolution, downloads, likes, tags.

