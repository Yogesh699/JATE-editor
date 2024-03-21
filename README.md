#  JATE ( Just Another Text Editor )

## Description:
 JATE is an innovative text editor designed to operate directly within the browser as well as offline, offering user a convenient platform to create and store notes or code snippets, regardless of internet connectivity. Serving as a single-page application that meets Progressive Web App (PWA) criteria, JATE ensures reliability and accessibility, enabling users to reliably retrieve their content for later use.

## Table of Contents:

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Technologies Used](#technologies-used)
6.  [Deployed Link](#deployed-link)


### Installation: 
To utilize JATE locally, follow these steps:

1.  Clone the repository to obtain all necessary files.
2.  Run "npm install" in your terminal to install dependencies.
3.  Execute "npm run start:dev" to initiate the backend and serve the client.
4.  Navigate to the application's URL ([http://localhost:3001](http://localhost:3001)) to begin usage.

###  Usage: 

Access the deployed URL to open the application. Within JATE:

-   Input code snippets or notes directly into the editor.
-   Content is automatically saved in IndexedDB when the window is unfocused.
-   Upon reopening the text editor, previously entered content is retrieved from IndexedDB.
-   Clicking the Install button downloads the web application as an icon to the desktop.
-   JATE functions seamlessly without an internet connection.

### Technologies Used: 
JATE leverages the following technologies:

-   Node.js
-   Express.js
-   IndexedDB
-   PWA
-   Render

### Deployed Link:
 Access the JATE Text Editor at: [https://jate-editor.onrender.com/](https://jate-editor.onrender.com/)
