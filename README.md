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
| GET         | /users          |              |                        | An array of all users objects | 200         | Gets all users                |
| GET         | /users/:id      |              |                        | An array with object with a specified user| 200         | Gets a specific user|
| GET         | /users/profile  |              |                        | An array of all users with the nested array containing their events| 200         | Gets users and their events |
| GET         | /users/profile/:id|            |                        | An array of a specific user with the nested array containing their events| 200         | Gets a specific user and their events                |
| POST        | /users/add      |              | {newUser: (Object) } | A newly created user object  | 201         | Creates a new user            |
| PATCH       | /users/update/:id |            | {newUser: (Object) } | An edited user object        | 200         | Updates a user                |
| DELETE      | /users/:id      |              |                        | A deleted user object        | 200         | Deletes a user                |

<br>

<br>

## 💼 The API will feature the following endpoints for events:


| HTTP Method | Path            | Query Params | Request Body (JSON)    | Response Body (JSON)          | Status Code | Result                         |
| ----------- | --------------- | ------------ | ---------------------- | ----------------------------- | ----------- | ------------------------------ |
| GET         | /events/        |              |                        | An array of all event objects | 200         | Gets all events                |
| GET         | /events/:id     |              |                        | An array of an event object   | 200         | Gets an event                  |
| GET         | /events/explore |              |                        | An array of all event objects linked to the users who created them|200| Gets a selected event linked to the user who created that event |
| GET         | /events/explore/skill|         |                        | An array of all event objects linked to the users who created them | 200         | Gets a seleted event linked to a user who created it and matched to a skill value from that event |
| POST        | /events/add     |              | {quoteText: (String) } | A newly created event object  | 201         | Creates a new event            |
| PATCH       | /events/update/:id |           | {quoteText: (String) } | An edited quote event         | 200         | Updates a event                |
| DELETE      | /events/:id     |              |                        | A deleted quote event         | 200         | Deletes a event                |

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



## The project is deployed on Render

# ERD

<img src="https://res.cloudinary.com/drseapwgz/image/upload/v1674731508/Screenshot_2023-01-26_at_11.10.13_cppuml.png"/>


