<div align="center">

Runway Reviews
![Tests](https://badgen.net/badge/tests/passing/green?icon=github)

## 💾 Technologies Used
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-yellow)

## Deployed Link: 
[Runway Reviews](https://runway-reviews.github.io/runway-reviews-fe/)

## 👩‍💻 👩‍💻 👨‍💻 👩‍💻 Collaborators
Front-End :
[Emalee Poellot](https://github.com/em2396)  | 
[Amy Siu](https://github.com/amysiu1028) |
[Zen Mcmillan](https://github.com/zenmcmillan) 

Back-End:
[Justin Lee](https://github.com/JustinSteel) |
[Brendan Bondurant](https://github.com/brendan-bondurant) |
[Blake Sergesketter](https://github.com/bserge13)|
[Nathan Trautenberg](https://github.com/WagglyDessert)

</div>

## Note: 
The 'Add Review' function is currently not working. As we continually work on it to make the user experience better, we had an issue when switching over the backend from rails to Django. 

## 🎥 Preview 


[Runway Reviews](https://github.com/runway-reviews/runway-reviews-fe/assets/116819092/41e2d7a8-02d4-4678-803c-beadda079207)



## 💭 Abstract
The goal of this project is to create an application that allows users to travel with more comfort and be more prepared, knowing the amenities an airport contains, and how clean their bathrooms are, along with the options for food at the restaurant, security, and additional information provided by other travelers. It's useful for those who travel and valuable to have on hand. For example, knowing the security and time it takes is helpful, or food options for dietary restrictions, planning to get food ahead of time, and bathroom cleanliness and other amenities is useful.

This project allows a user to log into their account and view the reviews they made for a particular airport. They can also add a review of the airport based on a list of categories from a dropdown menu. They can then view the review that was just made. This project uses several different APIs to get a list of airports, for the user to log in, and to show the reviews.

We were able to integrate Google Cloud AI into our project to translate most of the features of the application into the top five most commonly spoken languages to increase user accessibility.

<details>
  <summary>🚀 Google Cloud AI Translate Integration Steps</summary>
  
  ### Enable the Translate API:

  1. Go to the Google Cloud Console.
  2. Create a new project or select an existing one.
  3. Navigate to the API & Services > Dashboard.
  4. Click on "+ ENABLE APIS AND SERVICES" and search for "Cloud Translation API." Enable it for your project.

  ### Create API Key or Service Account:

  - For simplicity, you can create an API key. Go to API & Services > Credentials, and create an API key.
  - Alternatively, you can create a service account and download the JSON file. Ensure you keep this file secure.

  ### Install Google Cloud Translate SDK:

  - You'll need the `@google-cloud/translate` Node.js package. Install it using:
    ```bash
    npm install --save @google-cloud/translate
    ```

  ### Use Google Cloud AI Translate in your JavaScript code:

  ```javascript
  const {Translate} = require('@google-cloud/translate').v2;

  const translate = new Translate({keyFilename: 'path/to/your/keyfile.json'});

  // Example: Translate text from English to Spanish
  async function translateText() {
    const [translation] = await translate.translate('Hello, world!', 'es');
    console.log(`Text: ${translation}`);
  }

  translateText();
  </details>

## Deployed Link
[Deployed](https://runway-reviews.github.io/runway-reviews-fe/) 
Username: Jeanette Akenja Nearing
Password: $2a$12$0EhXvY8u12yBUdE/QLdkHuzBMQmRTXmJb25FWNSoysvQfk1FVnNUq
To be able to add a review, the user must be logged in. Use the above username and password.


## 📝  Context
We are a group of 2 front-end developers and 3 back-end developers who worked together remotely via Zoom and asynchronously through the GitHub project board to complete this application. This project was completed from week 1 to week 3 in Mod 4 at Turing School of Software & Design. It was our first time using the Vue framework.


## 🔌 Server Setup
1. Clone the repository: Open a terminal window. Navigate to the directory where you want to clone the repository. Run the following command: git clone 
2. Install the dependencies: Run the following command in the cloned repository directory: npm install
3. Run the React app: Run the following command in the cloned repository directory:

## 📚 Learning Goals

-Develop a basic understanding of the Vue framework


## 🥇 Wins
⭐ Emalee: Learning Vue was really fun for me, and it felt good to be able to build an app from it
⭐ Amy: Learning a bit of Vue was fun and new and implementing google translate ai was fun as well.

## 🚧 Challenges
❗Posting a review was difficult because there seemed to be a timing issue. 

