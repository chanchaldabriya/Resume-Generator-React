This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Intro
A React app creating a resume layout using the data provided.
Currently only has a single layout template.


# Usage
Add the relevant data in data.json file.
Replace the "photo.JPG" image to add your own image in the resume.

Run the npm script provided by create-react-app module to get a preview of the resume layout created :
### `npm start`

To generate resume, run the custom "pdf" generator script created by running the following command :
### `npm run generate`


# References
Used the "create-react-app" npm package to generate the skeleton of the app.
Used the "fortawesome" npm package to use FONTAWESOME icons.
Used the "puppeteer" node utility to create the script that actually generates the pdf file for the layout created.
