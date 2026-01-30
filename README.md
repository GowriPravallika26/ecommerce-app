# Next.js E-Commerce Product Catalog

---

## Project Overview

- Multi-page e-commerce product catalog
- Built using Next.js (Pages Router)
- Server-Side Rendering (SSR) using `getServerSideProps`
- Backend implemented with Next.js API Routes
- Authentication using NextAuth.js
- Shopping cart functionality
- Prisma ORM with PostgreSQL
- Fully containerized using Docker and Docker Compose

---

## Tech Stack

- Next.js (Pages Router)
- React
- NextAuth.js
- Prisma ORM
- PostgreSQL
- Zod
- Docker
- Docker Compose

---

## Project Structure

my-ecommerce-app/
├── docker-compose.yml
├── Dockerfile
├── .env.example
├── submission.json
├── README.md
├── middleware.js
├── package.json
├── lib/
│ └── prisma.js
├── prisma/
│ ├── schema.prisma
│ └── seed.js
├── components/
│ ├── ProductCard.js
│ └── AuthButtons.js
└── pages/
├── index.js
├── cart.js
├── products/
│ └── [id].js
└── api/
├── auth/
│ └── [...nextauth].js
└── cart/
└── index.js


---

## Running the Project (Docker Only)

### Prerequisites

- Docker
- Docker Compose

> No Node.js or PostgreSQL installation is required locally.

---

### Start the Application

From the project root:

```bash
docker-compose up .


Application URLs
Home Page
http://localhost:3000

Product Detail Page
http://localhost:3000/products/{productId}

Cart Page (Protected)
http://localhost:3000/cart

Sign In Page
http://localhost:3000/api/auth/signin

Authentication
Implemented using NextAuth.js

OAuth provider configured

Prisma adapter used

User and session data stored in PostgreSQL

Session handling managed automatically

Protected Routes
/cart route is protected

Unauthenticated users are redirected to the sign-in page

Protection implemented using middleware.js

Shopping Cart API
GET /api/cart
Returns the authenticated user's cart

Authentication required

POST /api/cart
Request body:

{
  "productId": "string",
  "quantity": 1
}
Adds a product to the cart

Request body validated using Zod

DELETE /api/cart
Request body:

{
  "productId": "string"
}
Removes a product from the cart

data-testid Coverage
Product Listing Page
search-input

search-button

product-card-{productId}

add-to-cart-button-{productId}

pagination-next

pagination-prev

Product Detail Page
product-name

product-price

product-description

add-to-cart-button

Cart Page
cart-item-{productId}

quantity-input-{productId}

remove-item-button-{productId}

cart-total

Authentication
signin-button

signout-button

Database Schema
Models included:

User

Product

Cart

CartItem

Account

Session

Relationships:

One User → One Cart

One Cart → Many CartItems

CartItem → Product

Database Seeding
Database is automatically seeded on startup

Sample products are inserted

Test user is created

Test user details are available in:

submission.json
Environment Variables
All required environment variables are documented in:

.env.example
No real secrets are committed.

Submission Artifacts
docker-compose.yml

Dockerfile

.env.example

submission.json

README.md

Prisma schema and seed scripts

Full application source code

Run Verification
docker-compose up
Application starts successfully

Database initializes automatically

No manual setup required
