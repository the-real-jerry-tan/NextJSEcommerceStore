
# Next.js eCommerce Store

## Project Overview
This project, created by **Jerry Tan**, is a feature-rich eCommerce store built with **Next.js** and **TypeScript**. It features **Server-Side Rendering (SSR)**, dynamic product pages, shopping cart functionality, and a mock payment processor integration.

## Features
- **Product Pages**: Dynamically rendered product pages with server-side rendering (SSR) for better performance and SEO.
- **Shopping Cart**: Persistent shopping cart with localStorage to store user selections.
- **Mock Payment Integration**: A mock payment gateway API to simulate checkout.
- **TypeScript**: Type-safe, scalable, and maintainable back-end and front-end code.
- **Responsive Design**: Optimized for both desktop and mobile.

## Project Structure
```
NextJSEcommerceStore/
├── pages/
│   ├── api/
│   │   ├── products.ts      # API route for fetching product data
│   │   └── payment.ts       # API route for mock payment processing
│   ├── [id].tsx             # Dynamic product page for each product
├── components/              # React components (e.g., product listings, cart)
├── lib/                     # Utility functions or additional libs
├── styles/                  # CSS and Tailwind for styling
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── .gitignore               # Files to ignore for version control
└── README.md                # Project documentation
```

## How to Build and Run
### Prerequisites:
- **Node.js** and **npm** installed.

### Steps:
1. Install the dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the site at `http://localhost:3000`.

### Available Features:
- **Product Pages**: View individual product details.
- **Add to Cart**: Add products to the cart and view them later.
- **Checkout**: Checkout with mock payment integration.

## Future Enhancements
1. **Real Payment Integration**: Integrate with Stripe or PayPal for real transactions.
2. **Product Reviews**: Add user-generated product reviews and ratings.
3. **Inventory Management**: Add inventory tracking to ensure products are available.
4. **User Accounts**: Implement user authentication and profile management.
5. **Mobile Optimization**: Further improve mobile experience with native app features.

## License
```
© 2024 Jerry Tan. All Rights Reserved.

This software is the confidential and proprietary information of Jerry Tan ("Confidential Information"). You shall not disclose such Confidential Information and shall use it only in accordance with the terms under which this software was distributed or otherwise published, and solely for the prior express purposes explicitly communicated and agreed upon, and only for those specific permissible purposes.

This software is provided "AS IS," without a warranty of any kind. All express or implied conditions, representations, and warranties, including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent that such disclaimers are held to be legally invalid.
```

## Author
**Jerry Tan**

A developer passionate about building scalable, high-performance eCommerce solutions using modern web technologies like Next.js and TypeScript.
