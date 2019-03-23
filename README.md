# THE STORE

## About

This is a fake store website created with `React` + `Redux`. It is a fairly simple store, but it is pretty much fully functional. For full capability it should be connected with an outer database to track warehouse items.
`localStorage` was used for the sake of comfort when using forms and to avoid all these 'OMG' moments.

I know it is not perfect:
1. components could be smaller,
2. I could make a better split between container and presentational components,
3. there could be some filtering options added besides only search,
4. I could still better implement PayPal API to receive a payment ID which could be sent to a buyer. I guess I will do it in the future but for now I feel it should be OK.

### Preview
You can watch working version here:
[watch preview](https://the-store.netlify.com/)

## Technologies used:
`React` for building an app.
`Redux` for global state management. 
`Netlify forms` for connection :). It works really great. You can use a contact form and item ordering form and I will receive an e-mail.
`PayPal API` I have used it for payment. Currently it is in sandbox mode, so if you have a sandbox account, then you can try it out.
`styled-components` for styling and some animations.
`Pose` from `Popmotion` for animations.

I wanted to make it as fast as possible withoud too much addtional loading time. I optimized images using `Gimp` but due to .png format it is not perfect and you will see a loading screen. Additionally, `Lazy-loading` is used for additional performance boost. 

I am not designer. For this purpose I based heavily on [Snickers eShop — UI animations concept](https://dribbble.com/shots/5449304-Snickers-eShop-UI-animations-concept?utm_source=Clipboard_Shot&utm_campaign=VCSlav&utm_content=Snickers%20eShop%20%E2%80%94%20UI%20animations%20concept&utm_medium=Social_Share) designed by [Slava](https://dribbble.com/VCSlav), which I found on [dribbble](https://dribbble.com/). Please check it out. His designs are super awsome. I also found some inspiration from: [Shopping Cart UI](https://dribbble.com/shots/4828084-Shopping-Cart-UI?utm_source=Clipboard_Shot&utm_campaign=Tamarashvili&utm_content=Shopping%20Cart%20UI&utm_medium=Social_Share) designed by [Giga Tamarashvili](https://dribbble.com/Tamarashvili).

### Routing
For routing served by browser I used `React` router. Transitions made with `Pose` from `Popmotion`.

Server side routing fixed with `_redirects` file.

## Config
The project was bootstrapped with [Create React App + Redux + React Router](https://github.com/notrab/create-react-app-redux).

## Usage
These are instructions needed for you in order to download this repo and run it on your local machine.

### Prerequistes
In order to run this repository and modify it you need [**NodeJS**][2] and **npm package manager** installed on you computer. 

### Installing

1. Clone the repo to your local environment:
```
git clone https://github.com/RXstoinkboy/the-store.git
```

2. Install all dependencies used for building this project:
```
npm install
```

3. Run the local server with and start working on the project:
```
npm start
```

4. To prepare a production build:
```
npm run build
```

5. Feel free to modify the code and see he changes updated live in your browser. 

## Technology
1. [ES6][3] - used mostly 2015+ syntax in this project
2. [React][2] - JS open library to build awsome UIs.
3. [React-Router][7] - for routing in browser.
4. [Redux][15] - for global state.
5. [Netlify API][16] - for form management.
6. [PayPal API][17] - for payment.
7. [styled-components][8] - library for using CSS in JS.
8. [Pose][9] - awsome library for preparing easy to use animations from Popmotion.
9.  [webpack][4] + [Babel][5] - JS boundler and transpiling tool.
10. [Eslint][6] - style checker for JS syntax.

## License

This project is licensed under the MIT License - details in [LICENSE.md][1] file.

[1]: https://github.com/RXstoinkboy/rxstoinkboy/blob/master/LICENSE.md
[2]: https://nodejs.org/en/
[3]: https://www.ecma-international.org/default.htm
[4]: https://webpack.js.org/
[5]: https://babeljs.io/
[6]: https://eslint.org/
[7]: https://github.com/ReactTraining/react-router
[8]: https://www.styled-components.com/
[9]: https://popmotion.io/pose/
[15]: https://redux.js.org/
[16]: https://www.netlify.com/
[17]: https://developer.paypal.com/

## Credits

Icon made by Freepik (http://www.freepik.com) from www.flaticon.com 