# Schedule-manager
 Schedule management application for nurses.

## Information
Project in progress.
It is not full-finished yet.

## Live Demo
Coming soon. You can download this project on your computer and install all npm packages to test this project. More information in section Installation.

To see the supervisor view use:
```
User: ko@gmail.com
Password: 1234
```

To see the employee view use:
```
User: kj@gmail.com
Password: 1234
```

## Technologies

* React
* JavaScript (ECMAScript 6)
* JSX
* SASS
* Webpack
* JSON Server
* Moment library
* Validator library
* Font aweseome

## Features

### login page

* You can log in to the application

### Supervisor view
You can:
* check your schdule
* add new schedule for employees
* edit existing schedule - is uses drag and drop.
* remove existing schedule
* add new employee
* remove existing employee
* show details of exisiting employee
* change your settings, like password, phone number or password (in progress)

### Employee view
You can:
* check your schdule
* send schedule request (in progress)
* change your settings, like password, phone number or password (in progress)

## Installation

1. Download project on yor computer.
2. Install node.js and npm.
3. Install globally JSON Server
```
npm install -g json-server
```
4. Open main project folder in your IDE
5. Open terminal in main project folder.
6. Write in the terminal
```
npm install
```
7. Then wirte
```
json-server --watch src\js\database\database.json
```
Now JSON server works on http://localhost:3000

8. Then in new terminal write
```
npm run start
```
to start dev server.

9. Now you are able to test app functionality.
To see the supervisor view use:
```
User: ko@gmail.com
Password: 1234
```

To see the employee view use:
```
User: kj@gmail.com
Password: 1234
```
10. If you want to build project, use:
```
npm run build
```
## Licence

MIT License

Copyright (c) 2019 Daniel Jarosz
