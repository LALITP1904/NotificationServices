# NotificationServices
A simple notification service with Email, SMS, and In-App support.

## How to Run

1. Clone the repository
   No extra efforts are require
2. Install dependencies: eg. npm, mongodb etc
3. To run the code on vscode :-
   open terminal:-
  1. type the bash "npm install"
  2. open cmd/ternimal and write "mongod"
  3. Then return to vscode and start erver with "node src/app.js" or "npx nodemon src/app.js"
        Connected to MongoDB
        Server running on port 3000
     when this output is shown
  4. Use Postman, curl, or your browser to access endpoints like:
    1. POST http://localhost:3000/notifications
    2. GET http://localhost:3000/notifications/user/<userId>

