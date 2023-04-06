# weatherproject#

This project is a Vanilla Javascript, HTML and CSS application created during The Jump's Full Stack Software Engineering Bootcamp.

## **Installation**

To install the project, first clone the repository from GitHub:

_git clone https://github.com/davidpiper89/weatherproject.git_

## **Usage**

To run the application, download the extension _Live Server_ by _Ritwick Dey_ on Visual Studio Code.

This will create a Go Live icon on the bottom blue bar.

Clicking on this will start a development server and open the application in your default web browser.

## **Files**

The project consists of 2 html, 3 js and 1 css file.

- _index.html_ : The main HTML file for the application. It includes buttons to select Cricket Grounds which will then display the weather, date, time and forecast at the location.
- _index2.html_ : The second HTML file for the application. It includes a search form and displays the weather information and forecast for the selected location.
- _styles.css_ : The stylesheet for the application. It defines the layout and styling for the HTML elements.
- _js.js_ : The JavaScript file for the main _index.html_ file. It handles the search form submission and makes requests to the OpenWeather API to retrieve the weather information and forecast for the selected location. It also updates the HTML with the retrieved information.
- _js2.js_ : The JavaScript file for the second _index2.html_ file. Simular to the first JS file but handles the form submission.

## **API**

The application makes use of a Weather API to retrieve information about the weather. The API is accessed using the axios library, and the results are displayed on the DOM.

## **Credits**

This project was created by David Piper
