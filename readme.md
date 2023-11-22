# Church of The Highlands Product Management Project

## Description

Product management project to handle creation of products and properties that are assigned to those products. Once products are created, you are able to view all active products and search/filter for a specific product by either the Product's name or the Product's UPC. This project was developed entirely by Jonathan White with some small debugging help from ChatGPT, utilizing GPT-4.

## Production Changes

If I were to build this product management application for a real-world solution, there would be some changes that I would make to better serve a client. First, the obvious would be authentication. I love utilizing JWT in these situations as it's a simple and effective method of authenticating and verifying user credentials without the hassle of setting up a ton of different checks throughout the application. I would also swap the components over from utilizing two separate pages and would have one single Dashboard component and would swap the children rather than swapping the entire parent component.

The next big change that I would make is that I would flesh out the product endpoints to allow for edits, deletions, and hidden products. The last large change that I would make is a custom frontend rather than using material UI for everything. Material UI is extremely quick and developer friendly, but doesn't offer the robust nature of custom scss and elements.

One final consideration I would make before pushing this project to a production level setting would be to include automated testing via Jest or some other testing software, which would verify before deployment. This would be a part of a larger CI/CD pipeline.

## Setup

Below are the instructions to setup this project from downloading the repo to connecting to the database. All information necessary for the database will be provided in the project itself.

### Downloading the Repo and Installing Dependencies

-   Open your Terminal and navigate to where you would like the project downloaded to
-   git clone https://github.com/jonathancwhite/highlands-project.git
-   Navigate into the newly created folder by using "cd highlands-project"
-   We will now install dependencies for the entire project
    ```
    cd backend
    npm i
    ```
-   pnpm i / npm i (use npm if you do not have pnpm installed)
    ```
    cd frontend
    npm i
    ```
-   pnpm i / npm i (use npm if you do not have pnpm installed)
-   All dependencies are now installed and we can move onto connecting to the database

### Database

-   Create a new env file inside of backend
-   Copy .env.sample over to your new .env file
-   Paste the MongoDB URI into your .env file (this should be in the initial email)
-   Now we will run server.js to make sure our backend can connect to the database
    ```
    cd ..
    npm run server
    ```
-   You will see a confirmation of the server starting in your terminal
-   Once confirmed that your server is running, we can go ahead and start the entire application.

### Application

We will run our application in development mode since it is not deployed.

-   NPM instructions:
    ```
    npm run backup-dev
    ```
-   PNPM instructions:
    ```
    pnpm run dev
    ```
