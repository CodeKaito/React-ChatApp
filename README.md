# Realtime Private Chat Application

This is a realtime private chat application that is built with ReactJS and Firebase as the database. This application allows users to have private conversations in real time with other users who have a unique username and password.

## Installation

1. Clone this repository to your local machine using `https://github.com/CodeKaito/React-ChatApp`
2. Install all necessary packages by running `npm install` in your terminal.
3. Create a new Firebase project and obtain your Firebase credentials.
4. Create a `.env` file in the root directory of the project and put your Firebase credentials in this file as follows:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```

5. Run the development server by running `npm start` in your terminal.
6. Access the application by navigating to `http://localhost:3000` in your web browser.

## Features

- Users can sign up for the application with a unique username and password.
- Users can create a private conversation with other users by inputting their usernames.
- Users can send and receive messages in real time.
- Users can see the list of all the available conversations they have.

## Built With

- ReactJS
- Firebase

## Contributing

Contributions are welcome. Please open an issue or pull request for any changes you wish to make.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
