# Restaurant List

A web application built with Node.js and Express to display a list of restaurants with detail and offer the searching function to help readily locate the ideal restaurant.

## Project First Look
![Application Screen Shot in GIF](https://media.giphy.com/media/SUzpJlbvUYsNojGj4u/giphy.gif)


## Features
| Functions              | Detail                                           | URL                         |
| ---------------------- | ------------------------------------------------ | --------------------------- |
| View all restaurants   | Click on logo to find name, image, category, rating of all restaurant | /                           |
| View restaurant detail | Click on any restaurant card to view address, phone number, category, description, image | /restaurants/:restaurant_id |
| Search restaurants     | Input name in search bar to find matching restaurants | /search                     |

## Installation
The following instructions will get you a copy of the project and all the setting needed to run it on your local machine.


### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

### Clone

Clone this repository to your local machine

```
$ git clone https://github.com/smallpaes/restaurant-list.git
```

### Setup

1. Enter the project folder

```
$ cd restaurant_list
```

2. Install npm packages

```
$ npm install
```

3. Activate the server 

```
$ npm run dev
```

4. Find the message for successful activation

```
Express is listening on http://localhost:3000
```
You may visit the application on browser with the URL: http://localhost:3000

## Authors
[Mike Huang](https://github.com/smallpaes)