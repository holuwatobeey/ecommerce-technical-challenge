# My Online Shop

My online shop is an ecommerce platform.

## Table of Contents

 * [Technologies](#technologies)
 * [Features](#features)
 * [API Endpoints](#api-endpoints)
 * [Getting Started](#getting-started)
    * [Installation](#installation)
    * [Development](#development)
    

### API Deployment
API is deployed at [https://my-onlineshop.herokuapp.com/api/v1/](https://my-onlineshop.herokuapp.com/api/v1/)

### API Documentation
API is documented at [https://documenter.getpostman.com/view/13274153/TVYJ5x2r](https://documenter.getpostman.com/view/13274153/TVYJ5x2r)

### API Endpoints
<table>
	<tr>
		<th>HTTP VERB</th>
		<th>ENDPOINT</th>
		<th>FUNCTIONALITY</th>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/users/login</td> 
		<td>Sign in a user</td>
	</tr>
	<tr>
		<td>POST</td>
		<td>/api/v1/users/register</td> 
		<td>Register a user</td>
	</tr>
	<tr>
		<td>GET</td>
		<td>/api/v1/products</td> 
		<td>Get all products</td>
	</tr>
    <tr>
		<td>GET</td>
		<td>/api/v1/products/:id</td> 
		<td>Get single product</td>
	</tr>
        <tr>
		<td>POST</td>
		<td>/api/v1/products</td> 
		<td>Create a product</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>/api/v1/products/:id</td> 
		<td>Modify a product</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/products/:id</td> 
		<td>Delete a product</td>
	</tr>
    <tr>
		<td>GET</td>
		<td>/api/v1/categories</td> 
		<td>Get all categories</td>
	</tr>
    <tr>
		<td>GET</td>
		<td>/api/v1/categories/:id</td> 
		<td>Get single category</td>
	</tr>
        <tr>
		<td>POST</td>
		<td>/api/v1/categories</td> 
		<td>Create a category</td>
	</tr>
	<tr>
		<td>PUT</td>
		<td>/api/v1/categories/:id</td> 
		<td>Modify a category</td>
	</tr>
	<tr>
		<td>DELETE</td>
		<td>/api/v1/categories/:id</td> 
		<td>Delete a category</td>
	</tr>

	
</table>

## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework
* [Npm](https://www.npmjs.com/) - Dependency Manager

### Supporting Packages

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

## Features

### Users
* Sign Up
* Sign In
* View products
* View categories

### Admins
* Sign Up
* Sign In
* View products
* Create products
* Modify products
* Delete products
* View categories
* Create categories
* Modify categories
* Delete categories


## Getting Started

### Installation

* git clone
  [My Online Shop](https://github.com/holuwatobeey/ecommerce-technical-challenge.git)
* Run `npm install` to install packages
* Run `npm start` to start the server
* Navigate to [localhost:8000](http://localhost:5300/) in browser to access the
  application

### Testing

#### Prerequisites

* [Postman](https://getpostman.com/) - API Toolchain

#### Testing with Postman

* After installing as shown above
* Navigate to [localhost:8000](http://localhost:5300/) in
  [Postman](https://getpostman.com/) to access the application

### Development
You can run `npm run start:dev` in development to use [Nodemon](https://nodemon.io/)

[Nodemon](https://nodemon.io/) watches for file changes and restarts your code. 