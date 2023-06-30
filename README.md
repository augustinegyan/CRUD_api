# A Simple CRUD API for a Blog 

This project is a simple backend CRUD API built using Express, Node.js, and MySQL. It provides basic functionality to create, read, update, and delete blog posts.

## Features

- Create a new blog post
- Retrieve a blog post by ID
- Retrieve all blog posts
- Update an existing blog post
- Delete a blog post

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (https://nodejs.org)
- MySQL (https://www.mysql.com)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   
2. Install Dependecies if needed
   ```bash
   npm install express mysql2 dotenv
3. Run Project
   ```bash
   npm start
## API Endpoints

Use any API enpoints of your choice POSTMAN or ISONMIA anything goes
### Create a Post
* Endopoints => /posts
* content to `POST` is json {title , content}

```json
    {
    "title": "Title or Heading here",
    "content": "Content here"
   }
   ```
![1](https://github.com/augustinegyan/CRUD_api/assets/43218009/fd224762-b4f3-45dd-949f-8f6c7c3e4e33)

### GET a Specific Data 

* Endopoints => /posts/:id
* Output is an array of data of specific :id `[{title , content}]`  (result[0])
  
![3](https://github.com/augustinegyan/CRUD_api/assets/43218009/9d50a5ed-37e6-446e-a4ec-30c2a0d5cb4c) 

  
### GET All Post 

* Endpoint => /posts
* Output is an array of all Blog Post
  
![2](https://github.com/augustinegyan/CRUD_api/assets/43218009/41dd684c-5cfb-4241-acc1-09b983cecce9)  



### Update a Post 
* Endpoint => /posts/:id 
* Update Blog Post of a specific :id  
* content to `PUT` is json {title , content}
  
 ```json
    {
    "title": "Update",
    "content": "Content here"
   }
   ```
 ![4](https://github.com/augustinegyan/CRUD_api/assets/43218009/5f450f07-9548-4f2e-a50a-af3127fe4c84)

   
### Delete a Post 
* Endpoint => /posts/:id 
* Delete  Blog Post of a specific :id 

![5](https://github.com/augustinegyan/CRUD_api/assets/43218009/f3489fd1-6573-4fa3-b083-e927db9ef7b8)


### Database Creation 

 ```sql
          CREATE DATABASE blog_database;

          USE blog_database;

  
          CREATE TABLE posts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          title VARCHAR(255),
          content TEXT
           );
```
Kindly create this schema or database in your mySQL and link to the project 

This project will be updated as times go on for better implication
Authentication process is being worked on .. - Just got started with JS 
