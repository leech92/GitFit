<p align='center'>
    <img src='https://git-fit-2.s3.amazonaws.com/gitfit_icon.jpg' width='300' height='auto' />
</p>

# GitFit

Welcome to the GitFit ReadMe!

Checkout our live link [HERE](https://git-fit-aa.herokuapp.com/#/)!

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Core Features](#core-features)
- [Code Snippets](#code-snippet)

## Description

GitFit is a next generation fitness site that will revolutionize your life. When you choose to create an account on this site, you have taken one step closer to being a fitness GOD. Users are able to create their own workout plans that consists for various exercises as well as creating meal plans that others can see. There is also a buddy system in place that enables users to keep track (or follow) what others have as their workout or meal plans.

Finally, a next generation site would not be complete without allowing users to find a gym near them. Thus, we have graciously added the google maps API to help users find nearby gyms.

# Technologies 
- React
- JavaScript, HTML, & SCSS
- PostgreSQL
- Node.js
- jQuery
- jBuilder
- Webpack
- Amazon Web Services S3
- MongoDB
- Express
- Google Maps API

GitFit is a MERN stack fitness application fully integrated with AWS and Google Maps API

# Core Features

## CRUD functionality for Meal Plans and Meals

<p align='center'>
    <img src='https://git-fit-2.s3.amazonaws.com/create_mealplan.jpg' width='700' height='auto' />
</p>

## Follow other Users and make them your Buddy
## Watch your Buddies sidebar and buddy follow button instantly update
<p align='center'>
    <img src='https://git-fit-2.s3.amazonaws.com/follow_functionality.jpg' width='700' height='auto' />
</p>

## Easily find a Gym nearby with our Map Feature
<p align='center'>
    <img src='https://git-fit-2.s3.amazonaws.com/find_gym.jpg' width='700' height='auto' />
</p>

# Code Snippet

## Maps did not render on the first navigation to the page
```
const success = pos => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    this.setState({ lat: lat, lng: long });
    this.map = new window.google.maps.Map(this.mapNode, { mapId: "8e0a97af9386fef", center: {lat: this.state.lat, lng: this.state.lng}, zoom: 16})
    
```

## Users followed each other in an array within the User Modal, we passed back an object so that it could take in two arguments

```
toggleFollow(e) {
        e.preventDefault(); 
        let obj = {'loggedId': this.props.currentUser.id, 'profileId': this.props.match.params.id};
        this.props.follow(obj); 
    }
```