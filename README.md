# VMS - Visitor Management System

VMS (Visitor Management System) is a web application designed to facilitate visitor registration and management for buildings. It allows visitors to be registered at the entrance, capturing their information along with their check-in and check-out times using timestamps. Additionally, it provides employee details and features a dashboard that tracks visitor and employee activity.

## Live Site
Visit VMS Live Site

## Table of Contents

- [Features](#features)
- [Prerequistics](#prerequisites)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Technologies Used](#technologies-used)
- [Author](#author)

## Features
VMS offers the following features:

- Visitor registration and check-in/check-out functionality.
- Detailed visitor information capturing including name, contact details, purpose of visit, and more.
- Employee directory.
- Dashboard for tracking visitor and employee activity.
- Filtering visitors by date.
- Authentication using JWT tokens.
- Change password functionality.
- Email notifications using SMTP.

## Prerequisites
Before running the application, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation
Clone the repository to your local machine:

1. git clone git@github.com:muthuieric/vms-frontend.git
2. Navigate to the project directory:`cd vms`
3. Install the required dependencies:`npm install`
4. Start the development server: `npm start`
This will launch the application in your default web browser at `http://localhost:5173`.


## Deployment
The application can be manually deployed by creating a production build and hosting the build folder on a web server.

Manual Deployment
To create a production build, run the following command:`npm run build` 
This will generate optimized production-ready files in the build folder. Upload the contents of the build folder to your web server to make the application live.

## Contributing
Contributions to VMS are welcome. If you find any issues or have improvements to suggest, feel free to create a pull request or open an issue in the repository.

## Technologies Used
React
Tailwind
Vite
Django (for backend - see backend README for details)
AWS

## Author
Author: Eric Muthui

Thank you for exploring the VMS repository!