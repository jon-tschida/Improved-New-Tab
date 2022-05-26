## Improved New Tab

View the working version [HERE](https://improved-new-tab.netlify.app/)

#### Languages/Technology
- React
- CSS
- OpenWeather API for weather info
- Messari.io API for Crypto prices 
- PTV Developer API for location Lattitude and Longitude


### Purpose for creating this project

After doing a quick course on Scrimba about React, I wanted to sink my teeth in to a project built entirely in React. I didn't want to make another to-do list app, I thought about re-doing my weather app in React, but I wanted something unique, and something to solve a problem I had. I hated the window my browser opened when I opened up a new tab or a new browser window, it didn't have any of the info I needed or wanted, so I decided to make my own. 

### What I learned

I could go on and on about what I learned from this project, I'd say the biggest thing was using data from one API to provide props/paramaters for another API. For example, the location data is gathered from the PTV Developer API, the Latitude and Longitude returned from that API are then passed as props into the OpenWeather API. We then save that info in local storage so the user doesn't have to enter their location each time. 

State management is more complicated than I thought it would be. I didn't use context for this project, so there is quite a bit of state initiated in the parent App component which is then passed down into child props. I'm not sure if this is best practice or not, but I wanted to keep most of my state at a higher level so I could pass it into future components that may need that data as well. 
