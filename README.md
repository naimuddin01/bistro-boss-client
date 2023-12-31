# Bistro-boss ( e-commerce platform )

An food-e-commerce platform developed with React and React Rest Framework, providing a smooth shopping experience for users. Features include user registration and login, product browsing, cart management, secure checkout with stripe, and order history tracking in customer profiles. Even guest users can shop hassle-free. Also, product lists and details can be fetched with REST APIs.

## Table of Contents

- [Overview](#overview)
- [Project Installation](#project-installation)
  - [Environment Variable_fontend](#configure-the-env-file-fontend)
  - [Stripe Integration](#Set-up-Stripe)
  - [Backend and Database](#Set-Up-the-Backend-and-Database)
  - [Environment Variable_backend](#configure-the-env-file-backend)

- [Expectation](#expectation)
- [Future Work](#future-works)

## Overview

I'm excited to share my project, a Food Market website built from the ground up using React.js, where users can explore a wide variety of delicious food options, add items to their cart, and place orders with a seamless payment process.

**Key Features :**

1. **User Authentication:** User registration and login for personalized shopping experiences. Guest users can explore and shop without signing in.

2. **Product Catalog:** Browse an extensive product catalog with detailed descriptions and images. Fetch product lists and details through APIs.

3. **Shopping Cart:** Add items to the cart and manage quantities. Easily review and modify your cart's contents.

4. **Secure Checkout:** Integration with stripe for secure and trusted payment processing.

5. **Order History:** Completed orders are automatically logged in the user's profile. Easily track past orders and reorder favorite items.

6. **APIs:** Utilize RESTful APIs to retrieve product lists and details programmatically.

## Project Installation

Follow these steps to set up and run this e-commerce platform on your local machine.

**Clone the Repository**

```bash
https://github.com/naimuddin01/bistro-boss-client.git
```

**Install project dependencies:**

```bash
cd your-project
npm install
```

**Set up Firebase:**
- Make sure you have a Firebase project created on the Firebase Console.
- Authenticate with Firebase and select your project:
```bash
firebase login
firebase use --add
```

**Usage:**
Explain how to use your project. Include any specific commands or scripts that users need to run. For example:
```bash
npm start
```

### Configure the .env.local file fontend

Create a `.env.local` file in the project root directory. Add the following environment variables to your `.env` file with your actual values:

```
VITE_apiKey= your-project-apiKey
VITE_authDomain= your-project-authDomain
VITE_projectId= your-project-projectId
VITE_storageBucket= your-project-storageBucket
VITE_messagingSenderId= your-project-messagingSenderId
VITE_appId= your-project-appId
```

### Set up Stripe:
- To use Stripe for payment processing, you need to have a Stripe account. If you don't have one, you can sign up at Stripe.

- In your Stripe Dashboard, go to the API section and generate your API keys.

- .env.local file in the project root directory and add your Stripe API key as an environment variable. Make sure to prefix it with VITE_ to make it available in your Vite application. For example:

```bash
VITE_Payment_Getway_pk=your-stripe-api-key
```
- set SECRET_KEY in backend 

# **Set Up the Backend and Database**
**Here is the Backend Code :** [Backend](https://github.com/naimuddin01/bistro-boss-server) 

Provide step-by-step instructions on how to install and set up your project. Include any necessary commands or configuration steps. For example:

**Clone the Repository**
```bash
https://github.com/naimuddin01/bistro-boss-server.git
```

**Install project dependencies:**
```bash
cd your-project
npm install
```

### Configure the .env file backend

Explain how to set up the necessary configuration, especially the .env file.
1. Create a .env file in the project root directory:
   ```bash
    touch .env
   ```
2. Add the following environment variables to your .env file:
    ```bash
    DB_User=your-mongoBD-project-userName
    DB_PASS=your-mongoBD-project-PASS
    MONGODB_URI=your_mongodb_connection_string
    Access_TOKEN_SECRET=your_secret_key
    PAYMENT_SECRET_KEY=your-stripe-SECRET_KEY
   ```
    
## Expectation

The expectations for my e-commerce platform project built using Django and Django Rest Framework can be outlined as follows:

1. **User-Friendly Shopping Experience**

2. **Authentication and User Profiles**

3. **Food Catalog**

4. **Secure Payment Processing**

5. **Order History and Tracking**

6. **API Integration**

7. **Performance and Scalability**

8. **Maintenance and Updates**

## Future Works

Here are some potential future work areas to consider:

1. **Food Recommendations:** Implement recommendation algorithms to suggest products to users based on their browsing and purchase history.
