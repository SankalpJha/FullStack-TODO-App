# FullStack TODO Application

This applicaiton is a simple implementation of Angular 7 and spring boot. With help of Angular frontend of this application looks really good and having spring boot at backend gives it a strong base on which a larger scale applciation can be build on.

## Prerequsites

Prior having a look at this project one needs to have basic knowledge of spring, RESTful API's, java, hibernate, a little bit of HTML, Bootstrap and CSS.

### Features

This project has implementation of below features:
* Spring-boot
* RESTful API
* H2-JPA Implementation
* Exception Handling
* Basic Authentication or Spring Security
* JWT Implementation
* Angular 7
* Bootstrap
* Node Modules
* HTML
* CSS

### Required Tools
* Java 1.8+
* Apache Maven
* Spring tool suite
* Visual Studio Code
* Node JS

### Installation
* Clone the repository.
* Make sure you have Node.js in your system, Go to the directory you have installed the project via Command Prompt
* Go to -> frontend/TODO
* Execute `ng serve`
* Wait for the program to compile.
* Import project into STS workspace as MAVEN project.
* Right click on the project -> Run -> **Spring boot app**
* Once both service is UP, go to browser and open `http://localhost:4200`

### Description
This simple application can help to manage your TODO's i.e. your task which you had set to complete at certain point of time. Application allows an authorized user to login and manage his/her tasks, one can add new tasks, edit exsiting tasks and remove the tasks. Once the user is logged-in, a session is maintained via JWT token and the user is directed to a welcome page, from here he/she is guided to link to get his/her TODO list. User can see the tasks in well formatted table and have the options of removing and updating the tasks. The UI is very simple and sober just few text boxes and buttons with menu and footer. To fetch the data in any of the frontend page a service is defined in frontend which makes the service call to backend to Populate the data in the page.
Backend of this applciaiton maintains the users tasks in a table with that perticular user name, it as RESTful web service. Code is maintainable and clean, we have a well defined package structure in frontend as well as backend. We have seperate packages like model to have a POJO class, repository to interact with database, controller packge to have URI's exposed and service class to communoicate with DB. Username and Password is stord in in-memory DB. Password encoded with BCrpty encoding technique over 10 rounds.
Frontend code is deployed on port 4200 of the local host and backend code at 8085 and we have enable Cross Origin in backed so that service can be called viw 4200 port.


### Frontend Folder/Package Structure
* App
  *Error
  * Footer
  * List TODOs
  * Login
  * Logout
  * Menu
  * Welcome
  * Todo
  * Service
    * Data
	* HTTP


### Backend Folder/Package Structure
* Controller
* Service
* Repository/DAO
* Model
* JWT Configuration
* JWT Resource
* Exception

### Current User Name and Passwords

| UserName          | Password |
|:---------------------|:------|
| Sankalp | hello |
| Ashutosh | Password123# |

### URL's & Port

| End         | URL | Ports |
|:---------------------|:------|:------|
| Frontend | http://localhost:4200 | 4200 |
| Backend | http://localhost:8085 | 8085 |


### Images

Login Screen
![Image of Login Page](https://github.com/SankalpJha/FullStack-TODO-App/blob/master/images/LoginPage.PNG)


Welcom Page
![Image of Welcome Page](https://github.com/SankalpJha/FullStack-TODO-App/blob/master/images/WelcomePage.PNG)


List of Todo's
![Image of Todo List](https://github.com/SankalpJha/FullStack-TODO-App/blob/master/images/TodoListPage.PNG)


Update Todo
![Image of Update Todo](https://github.com/SankalpJha/FullStack-TODO-App/blob/master/images/UpdateTodoPage.PNG)


Delete Todo
![Image of Deleted Todo](https://github.com/SankalpJha/FullStack-TODO-App/blob/master/images/DeletedTodoPage.PNG)
