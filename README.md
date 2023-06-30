# Simple Backend CRUD API for Blog Website

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
* content is json {title , content}
  
```json
  {
    "title": "Title or Heading here",
    "content": "Content here"
}

