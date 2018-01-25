# crypto-website

This web application is designed to display the latest Bitcoin, Ethereum and Ripple prices for USD/EUR/GBP in a simple manner. Most websites provide graphing, historical values, filters etc but this app is designed to provide specific information to anyone with investments in these core cryptocurrencies. The prices are displayed via the cryptocompare API.

## User Stories

```
As a user,
So I can track the price of Bitcoin,
I'd like to see the latest price of Bitcoin in USD/GBP/EUR.
```

```
As a user,
So I can track the price of Ethereum,
I'd like to see the latest price of Ethereum in USD/GBP/EUR.
```

```
As a user,
So I can track the price of Ripple,
I'd like to see the latest price of Ripple in USD/GBP/EUR.
```

## Tech stack

```
* JavaScript
* node.js
* Express
* Bootstrap
```

## Running the application

```
* git clone https://github.com/neroshan12/crypto-website.git
* npm install
* run node server.js
```

## Deployment

Currently working on deploying to AWS.

## Future Features

There are a variety of features I’d like to implement in the future, such as a section on the website that would render the latest news articles to do with cryptocurrencies. Another feature I would like to implement is the ability for users to calculate exactly how much their stake in each cryptocurrency is worth at the current price in USD/GBP/EUR.

## Difficulties

Due to my lack of experience with APIs and JavaScript I initially struggled to understand how RESTful API calls worked and how information from JSON object could be rendered to views. My lack of experience with Bootstrap and Express also meant that I spent a considerable amount of time figuring how Express requires local JavaScript and CSS files. Through these difficulties, I've learnt an incredible amount about how full-stack JavaScript applications work and have improved my problem solving processes which I can apply to future projects.

## Feedback

As I needed the web application for my use urgently I did not follow the TDD process I would normally follow. Therefore, I am currently investigating how to mock API calls so I can go back and re-do this project in the correct processes that I have followed previously. that being said, I've learnt a vast amount and if i was faced with similar challenges in the future, i would be able to tackle them with the experience and processes I've now improved.

## Author

* [Nero Siva](https://github.com/neroshan12)
