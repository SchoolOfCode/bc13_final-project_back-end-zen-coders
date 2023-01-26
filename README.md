# final-project_back-end
# Hobi

Hobi is a community sharing platform for people to be able to share their skills and learn new things.


This project is coded in Nextjs, it uses Auth0, Tailwind and ...libraries
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)



Unit testing is done using
* ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)









# Deployed with:
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)






# Getting Started
- To Install
    1. Clone the repository;
    2. Run $ npm install 
    3. Create .env file in the root of the project
    4. ".env" must have the following variables:
    5. Below you can find what variables you should
<details>
  <summary>Content of .env.local</summary>
  <ol>
    <li>
    PORT=****
    </li>
      <li>
   ATLAS_URI=mongodb+srv://'Enter yours'
    </li>
    <li>
     MONGODB_DATA_API_KEY='Enter yours'
     </li>
     <li>
      MONGODB_DATA_API_URL='Enter yours'
      </li>
    <li>
    MONGODB_DATA_SOURCE='Enter yours'
     </li>
       <li>
AUTH0_SECRET='Enter yours'
      </li>
        <li>
AUTH0_BASE_URL='Enter yours'
      </li>
    <li>
 AUTH0_ISSUER_BASE_URL='Enter yours'
         </li>
      <li>
   AUTH0_CLIENT_ID='Enter yours'
      </li>
      <li>
  AUTH0_CLIENT_SECRET='Enter yours'
      </li>
  <li>
    CLOUDINARY_CLOUD_NAME='Enter yours'
   </li>
      <li>
CLOUDINARY_API_KEY='Enter yours'   
    </li>
         <li>
CLOUDINARY_API_SECRET='Enter yours''   
    </li>
    
    
    
  </ol>
</details>

<br>

## 💼 The API will feature the following endpoints for profiles:

| HTTP Method | Path            | Query Params | Request Body (JSON)    | Response Body (JSON)          | Status Code | Result                         |
| ----------- | --------------- | ------------ | ---------------------- | ----------------------------- | ----------- | ------------------------------ |
| GET         | /api/quotes     |              |                        | An array of all quote objects | 200         | Gets all quotes                |
| GET         | /api/quotes     | ?type=random |                        | A random quote object         | 200         | Gets a randomly selected quote |
| POST        | /api/quotes     |              | {quoteText: (String) } | A newly created quote object  | 201         | Creates a new quote            |
| PATCH         | /api/quotes/:id |              | {quoteText: (String) } | An edited quote object        | 200         | Updates a quote                |
| DELETE      | /api/quotes/:id |              |                        | A deleted quote object        | 200         | Deletes a quote                |

<br>

<br>

## 💼 The API will feature the following endpoints for events:

Chris wants to build an inspirational quotes app so his words of wisdom are never lost and easily accessible for future bootcampers.

Today your job is to build the REST API (the backend for the app).

The API will use the `quotes.js` helper functions previously built in the "working-with-files" workshop.

The API will feature the following endpoints:

| HTTP Method | Path            | Query Params | Request Body (JSON)    | Response Body (JSON)          | Status Code | Result                         |
| ----------- | --------------- | ------------ | ---------------------- | ----------------------------- | ----------- | ------------------------------ |
| GET         | /api/quotes     |              |                        | An array of all quote objects | 200         | Gets all quotes                |
| GET         | /api/quotes     | ?type=random |                        | A random quote object         | 200         | Gets a randomly selected quote |
| POST        | /api/quotes     |              | {quoteText: (String) } | A newly created quote object  | 201         | Creates a new quote            |
| PATCH         | /api/quotes/:id |              | {quoteText: (String) } | An edited quote object        | 200         | Updates a quote                |
| DELETE      | /api/quotes/:id |              |                        | A deleted quote object        | 200         | Deletes a quote                |

<br>

## 💼 The API will feature the following endpoints for rating:


| HTTP Method | Path            | Query Params | Request Body (JSON)    | Response Body (JSON)          | Status Code | Result                         |
| ----------- | --------------- | ------------ | ---------------------- | ----------------------------- | ----------- | ------------------------------ |
| GET         | /api/quotes     |              |                        | An array of all quote objects | 200         | Gets all quotes                |
| GET         | /api/quotes     | ?type=random |                        | A random quote object         | 200         | Gets a randomly selected quote |
| POST        | /api/quotes     |              | {quoteText: (String) } | A newly created quote object  | 201         | Creates a new quote            |
| PATCH         | /api/quotes/:id |              | {quoteText: (String) } | An edited quote object        | 200         | Updates a quote                |
| DELETE      | /api/quotes/:id |              |                        | A deleted quote object        | 200         | Deletes a quote                |

<br>



#The project is deployed on AWS Amplify
