# Welcome!

Thanks for taking the time to look over my submission.  I have included directions for running it locally as well as somethings that I would add to it in the future to improve the code and UX/UI.
## Running this project locally

First, you'll need to do an install `npm install` and then run the development server `npm run dev`.

Then you'll be able to open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**NOTE: I ran my project locally with node version 19.**

## Elements I would add to improve the app to further improve the code and UX/UI in the future

1. Implement deliberate error handling throughout the app, especially in the Axios calls.  Right now I have `console.log`s in the request `catch()`s and some of the `then()`s.  API requests and working with backends is still something that I'm improving upon, so I'm sure there's a better way to handle those situations.  I would also look to add validation for the login fields.  This error handling and validation would include code changes as well as UI additions, such as alert banners or helper error text, to properly indicate and display errors in a user friendly manner.
2. Add unit and/or e2e tests to ensure code stability and long term health.
3. Add a dark/light mode toggle or a choice of different color schemes.  I love the idea of giving users the ability to select their own option and customize their experience in this way.  Plus, it's fun...or at least I think so!
4. Implement additional filtering options for location.
5. I would also like to make the match interface it's own route/page instead of a conditional UI of the `/search` route.  That was my original intention when I started, but had trouble finding a way to get the matched dog's data from the search page to the match page for it to be displayed there.  I'm sure there is a way to do this (and hopefully one day I'll take the extra time to figure it out), but how I have it works for now.