
# Book Rental App

## Overview
The Book Rental App is a full-stack web application that allows users to rent books online. The app is built with React.js for the front end, Node.js and Express for the back end, and MongoDB with Mongoose for the database. Tailwind CSS is used for styling.

## Features
- User authentication and authorization (sign up, log in, log out)
- Browse available books
- Rent and return books
- Admin panel for managing books and rentals

## Technologies Used
- **Front-end:** React.js, Tailwind CSS
- **Back-end:** Node.js, Express
- **Database:** MongoDB, Mongoose

## Installation

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- MongoDB

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/silwite/BookRentalApp.git
   cd BookRentalApp
   ```

2. **Install dependencies:**
   - For the back end:
     ```bash
     cd server
     npm install
     ```
   - For the front end:
     ```bash
     cd client
     npm run dev
     ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**
   - Start the MongoDB server (if it's not already running):
     ```bash
     mongod
     ```
   - Start the back-end server:
     ```bash
     cd server
     npm start
     ```
   - Start the front-end development server:
     ```bash
     cd client
     npm run dev
     ```

   The app should now be running at `http://localhost:3000`.

## Website Images
Login
![image](https://github.com/silwite/BookRentalApp/assets/89529159/a8fcd6d1-7df2-499e-b103-6ecf020275f7)
Home page
![image](https://github.com/silwite/BookRentalApp/assets/89529159/e346a0da-db6c-405b-8ea1-c513a7988cf3)
Cart
![image](https://github.com/silwite/BookRentalApp/assets/89529159/3075a354-e6e4-4093-8d12-a19ceac0bfd1)
Rent Tab
![image](https://github.com/silwite/BookRentalApp/assets/89529159/16d4d466-dd5f-4b55-8fc6-3622c0854e07)
Donate
![image](https://github.com/silwite/BookRentalApp/assets/89529159/4afecd71-0422-4e09-b291-016de74fd26e)
Contact
![image](https://github.com/silwite/BookRentalApp/assets/89529159/7e2e5afc-fe23-4475-bb31-fc76dbb74eee)





## Usage

### User Authentication
- Sign up for a new account
- Log in with an existing account
- Log out to end the session

### Browsing Books
- View a list of available books
- Search for books by title or author

### Renting and Donate Books
- Rent a book for a specified period
- Donate books online
- View your rental history
- Return rented books

### Admin Panel
- Add, edit, or delete books
- Manage user rentals

## Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.



## Contact
For any issues or suggestions, please contact manshin2002@gmail.com

---

This guide provides a concise overview of the Book Rental App, including installation instructions, project structure, and usage details. Adjust the content as necessary to fit your project's specifics.
