# Church of The Highlands Inventory Project

## Setup

Below are the instructions to setup this project from downloading the repo to connecting to the database. All information necessary for the database will be provided in the project itself.

### Downloading the Repo and Installing Dependencies

-   Open Terminal and navigate to where you would like the project downloaded to
-   git clone https://github.com/jonathancwhite/highlands-project.git
-   Navigate into the newly created folder by using "cd highlands-project"
-   We will now install dependencies for the entire project
-   cd backend
-   pnpm i / npm i (use npm if you do not have pnpm installed)
-   cd ../frontend
-   pnpm i / npm i (use npm if you do not have pnpm installed)
-   All dependencies are now installed and we can move onto connecting to the database

### Database

-   Create a new env file inside of backend
-   Copy .env.sample over to your new .env file
-   Now we will run server.js to make sure our backend can connect to the database
