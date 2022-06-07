# Holler
Description of the App
Holler is a proof-of-concept web application where users can upload a PDF of their contract, view their PDF,  and perform a number of actions based on the content of their contract. Specifically, users can view important information, add dates to their calendar, and perform payments.

Holler works by using the data gathered from the contract. Holler does not do any natural language processing of any type but instead relies on datasets given for specific contracts, and uses these datasets to populate the actions. 

Challenges
Originally, the team hoped to be able to implement text highlighting, so that users could see where the important information in the contract was located. However, we faced a number of issues integrating this functionality into our existing PDF viewer. For future developers, we suggest that they revamp the PDF viewer using the custom highlight react-pdf-viewer, or completely overhauling the viewer altogether to meet the needs of highlighting and connecting actions to text. 


Setting up Firebase
Firebase permissions for this app have been transferred to the client. To ensure that Firebase is connected, navigate to 'Realtime Database' within the project, start in test mode and change the rules to have “.read” and “.write” to be true. If future edits are made to the app, user running the following commands should follow the instructions on this link: https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425 .
Also make sure to follow the instructions below:
Use the global -g option to install firebase-tools.
Specify build when firebase init asks what the public directory is.
Say no when Firebase asks about adding Github Actions.
Don't forget to do npm run build before deploying.
 
Stripe
The payments demo uses some stripe code. https://stripe.com/docs/development/get-started 
Google Calendar
Helpful references:
https://cloud.google.com/docs/authentication/api-keys  
Scripts
This project was created with Create React App.
Make sure to run:
npm install
Installs all required dependencies.
npm start
Runs the app on http://localhost:3000 
The page will reload if you make edits.
You will also see any lint errors in the console.
npm test
Runs unit tests. 
npm run build
Builds the app. Make sure to run this before running firebase deploy. 
firebase deploy
Deploys the app to https://holler-8e6d5.firebaseapp.com/ 

Credit:
Hanza Anwar https://github.com/HamzaAnwar1998 for PDF viewing.


