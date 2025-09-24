# Chat Bot Sidekick

## Project Description
I want to create a mock e-commerce website that will have a chatbot that will be able to answer a few questions about each product. Additionally, I'd like for the chatbot to be able to give me some reviews about the products, and also give me personalized suggestions based on my activity on the website. Of course, this is only a proof of concept and we just want to be able to show developers the feasibility. 

The website will only be one page with a quick summary of what its about on top, and if you were to scroll down, youd get the different products available. The products should be clickable and if clicked, you'd get some metadata (cost, size, estimated delivery time, and so on). There should be somewhere on the side a small character that will be your AI assistant to help answer questions. The AI assistant follows you as you scroll down. The color theme should be something similar to Shopify colors.

## Product Requirements Document
PRD: Chat Bot Sidekick

1.  Introduction

    *   Project Name: Chat Bot Sidekick
    *   Document Version: 1.0
    *   Date: [Current Date]
    *   Author: [Your Name/Team]
    *   Purpose: This Product Requirements Document (PRD) outlines the scope, goals, features, and technical specifications for the "Chat Bot Sidekick" project. The primary objective is to create a Proof of Concept (PoC) demonstrating the feasibility of integrating an AI chatbot into a mock e-commerce website to enhance user interaction and provide personalized assistance.
    *   Project Goal: To quickly prototype and showcase the feasibility of an AI-powered e-commerce sidekick, demonstrating rapid development capabilities.

2.  Executive Summary

    The Chat Bot Sidekick project aims to develop a mock, single-page e-commerce website featuring 6 book products. The core innovation is an integrated AI chatbot, styled as a "Sidekick", which will provide product-specific information (metadata), offer customer reviews, and deliver personalized product suggestions based on user activity. This project serves as a proof of concept to demonstrate the technical viability and user experience potential of such an AI assistant in an e-commerce context, leveraging modern web technologies and large language models (LLMs). The design aesthetic will mimic Shopify's clean and user-friendly interface.

3.  Goals and Objectives

    *   **Primary Goal:** To successfully demonstrate the technical feasibility of integrating an AI chatbot into a mock e-commerce environment that provides relevant product information, reviews, and basic personalized suggestions.
    *   **Specific Objectives:**
        *   Develop a single-page mock e-commerce website displaying 6 distinct book products.
        *   Implement a persistent, visually engaging AI chatbot user interface that follows the user's scroll.
        *   Enable the chatbot to accurately answer questions about specific product metadata (e.g., price, pages, type).
        *   Enable the chatbot to provide simulated customer/reader reviews for products.
        *   Implement a basic personalization logic for product suggestions based on user interaction (e.g., trilogy suggestions).
        *   Utilize an existing LLM (GPT-5.0 or Gemini) to power the chatbot's conversational capabilities.
        *   Achieve a satisfactory level of accuracy and relevance in chatbot responses for a PoC.
        *   Showcase rapid prototyping and development capabilities using the specified tech stack.

4.  Target Audience

    *   **Internal:** Developers (to assess technical feasibility and integration challenges), Project Leads/Management (to evaluate the PoC's success and potential).
    *   **External (Mock):** End-users interacting with the mock e-commerce site for demonstration purposes.

5.  User Stories

    *   As a user, I want to quickly understand what the website is about so I can decide if I want to browse products.
    *   As a user, I want to see a clear display of available products (books) on the main page.
    *   As a user, I want to click on a product to view its detailed information (metadata).
    *   As a user, I want to interact with an AI assistant to ask questions about a specific product's details.
    *   As a user, I want the AI assistant to provide me with reviews or opinions about a product.
    *   As a user, I want the AI assistant to suggest other relevant products based on what I have viewed or expressed interest in.
    *   As a user, I want the AI assistant to remain visible and accessible as I scroll through the website.

6.  Functional Requirements

    *   **FR.1 Website Display:**
        *   FR.1.1 The website shall be a single-page application.
        *   FR.1.2 The top section of the page shall contain a brief summary of the website's purpose.
        *   FR.1.3 The page shall display 6 distinct book products in a grid layout (2 rows of 3).
        *   FR.1.4 Each product shall be clickable.
        *   FR.1.5 Upon clicking a product, a modal overlay shall appear above the landing page, displaying detailed metadata for that product.
    *   **FR.2 Product Metadata:**
        *   FR.2.1 Each product's metadata shall include: Name of the book, Price, Number of Pages, and Paperback or Hard Cover status.
    *   **FR.3 Chatbot Interface:**
        *   FR.3.1 A small AI character (chatbot) shall be displayed on the side of the website.
        *   FR.3.2 The chatbot UI shall be persistent and follow the user as they scroll down the page.
        *   FR.3.3 The chatbot UI shall allow users to input text queries.
        *   FR.3.4 The chatbot UI shall display responses from the AI assistant.
    *   **FR.4 Chatbot Capabilities:**
        *   FR.4.1 The chatbot shall be able to answer questions about specific product metadata (e.g., "What's the price of [Book Name]?", "Is [Book Name] paperback or hardcover?").
        *   FR.4.2 The chatbot shall be able to provide simulated reviews about products when asked (e.g., "Tell me about reviews for [Book Name]").
        *   FR.4.3 The chatbot shall provide personalized suggestions based on specific user activity (see FR.5).
        *   FR.4.4 The chatbot's knowledge base for product data and reviews will be provided via Supabase and integrated LLM prompts.
    *   **FR.5 Personalization Logic:**
        *   FR.5.1 The system shall track user clicks on products.
        *   FR.5.2 If a user clicks on the first book of a defined trilogy, the chatbot shall suggest the second book of that same trilogy.
        *   FR.5.3 The LLM shall also be able to provide suggestions when explicitly asked by the user, independent of the basic click-based logic.

7.  Non-Functional Requirements

    *   **NFR.1 Performance:**
        *   NFR.1.1 Chatbot responses should be generated and displayed within a reasonable timeframe (e.g., under 3 seconds) for a good user experience, acknowledging LLM API latency.
        *   NFR.1.2 Website loading times should be optimized for a fast initial load.
    *   **NFR.2 Usability:**
        *   NFR.2.1 The website navigation and chatbot interaction should be intuitive for users.
        *   NFR.2.2 Product details in the modal should be clearly presented.
    *   **NFR.3 Reliability:**
        *   NFR.3.1 Chatbot response accuracy and relevance should be prioritized to demonstrate feasibility effectively.
    *   **NFR.4 Maintainability:**
        *   NFR.4.1 The codebase shall be structured for clarity and ease of understanding by developers, even for a PoC.
    *   **NFR.5 Aesthetics:**
        *   NFR.5.1 The overall color theme and UI/UX design shall be inspired by Shopify's aesthetic (clean, modern, e-commerce friendly).

8.  Technical Architecture and Stack

    *   **Frontend:** React (component-based UI), ShadCN (UI components), Tailwind CSS (styling).
    *   **Backend:** Next.js (for potential API routes, server-side capabilities, and full-stack integration).
    *   **Deployment:** Vercel (for seamless deployment of Next.js application).
    *   **Database:** Supabase (for storing product metadata, potentially user activity logs for personalization).
    *   **AI/LLM:** GPT-5.0 or Gemini (integrated via API for chatbot intelligence, natural language understanding, and generation).
    *   **Data Flow:** Frontend sends user queries to Next.js API route -> Next.js API route communicates with LLM (and Supabase for context) -> LLM generates response -> Next.js API route returns response to Frontend -> Frontend displays response.

9.  Product Content Details

    *   **Products:** 6 unique books.
    *   **Arrangement:** These 6 books will be organized into 2 distinct trilogies (e.g., Trilogy A: Book 1, Book 2, Book 3; Trilogy B: Book 1, Book 2, Book 3).
    *   **Metadata:** For each of the 6 books, the following data points will be available:
        *   Name of the book (e.g., "The Fellowship of the Ring")
        *   Price (e.g., $15.99)
        *   Number of Pages (e.g., 423)
        *   Paperback or Hard Cover (e.g., "Paperback")

10. Personalization Logic Details

    *   **Core Logic:** The primary personalization rule will be based on explicit user clicks. If a user clicks to view the details of the first book in a trilogy, the chatbot will then suggest the second book of that specific trilogy. This demonstrates a basic contextual suggestion.
    *   **LLM-driven Suggestions:** Beyond the explicit click-based rule, the chatbot, leveraging the LLM, will be able to provide more dynamic and varied suggestions if the user explicitly asks for "other books like this" or "what should I read next?" This will also apply to providing reviews when requested.

11. UI/UX Design Considerations

    *   **Visual Theme:** Shopify-like, characterized by clean lines, clear typography, ample white space, and a friendly, accessible color palette.
    *   **Layout:** Responsive single-page design. Top section for summary, followed by a product grid.
    *   **Product Cards:** Visually appealing cards for each book, potentially showing cover art and basic name/price.
    *   **Modal:** Clean, non-intrusive modal for product details, easy to close.
    *   **Chatbot Appearance:** A friendly, non-distracting "Sidekick" character. The chat window itself should be intuitive, with a clear input field and conversational history.
    *   **Interactivity:** Smooth transitions and animations (e.g., for modal opening, chatbot scrolling behavior).

12. Milestones / Timeline

    *   Given the "as soon as possible" constraint, the project will follow an agile, rapid prototyping approach.
    *   **Phase 1: Setup & Core Website (Target: Week 1)**
        *   Project initiation, environment setup (React, Next.js, Supabase).
        *   Develop single-page layout with summary and product grid.
        *   Implement basic product data display (6 books) from Supabase.
        *   Implement clickable products and modal display for metadata.
        *   Apply initial Shopify-like styling (color palette, basic components).
    *   **Phase 2: Chatbot Integration & Basic Functionality (Target: Week 2)**
        *   Develop Chatbot UI (fixed, scrolling side element).
        *   Integrate LLM API (GPT-5.0 or Gemini) for text input/output.
        *   Enable chatbot to answer product metadata questions (prompt engineering).
        *   Enable chatbot to provide simulated reviews.
    *   **Phase 3: Personalization & Refinement (Target: Week 3)**
        *   Implement click-based personalization logic (trilogy suggestions).
        *   Refine chatbot prompt engineering for accuracy and personality.
        *   Conduct internal testing for functionality and UI/UX.
        *   Deployment to Vercel for demonstration.

13. Open Questions, Risks, and Future Considerations

    *   **Open Questions:**
        *   Specific brand identity/name for the mock e-commerce site? (e.g., "BookHaven," "PageTurner Emporium")
        *   Detailed content for the "reviews" that the LLM will generate (will they be generic or product-specific examples?).
    *   **Risks:**
        *   **LLM Accuracy & Hallucination:** The chatbot's ability to provide accurate and relevant information is critical. Careful prompt engineering and potential data validation may be needed, even for a PoC.
        *   **LLM API Costs/Rate Limits:** Monitoring usage during development and demonstration will be important.
        *   **Time Constraints:** The "as soon as possible" timeline is aggressive, requiring focused development.
    *   **Future Integration Possibilities:** For this PoC, there are no immediate plans for future integrations or expanded features beyond demonstrating the core concept. Any future enhancements would be considered post-PoC review.

## Technology Stack
TECHSTACK

This document outlines the recommended technology stack for the "Chat Bot Sidekick" project, a proof-of-concept for a mock e-commerce website featuring an interactive AI chatbot. The primary goal is to demonstrate the feasibility of integrating advanced AI capabilities into a modern web application for personalized user experiences and rapid prototyping, aligning with the project's "vibe code quick prototypes" objective.

1.  **Frontend Development**
    *   **Framework:** React
        *   **Justification:** Chosen due to developer familiarity and its robust ecosystem, React provides a declarative and efficient way to build the user interface. It's ideal for single-page applications and component-based development, supporting rapid iteration.
    *   **Full-stack Framework:** Next.js
        *   **Justification:** Building on React, Next.js offers crucial features like file-system based routing, server-side rendering (SSR) or static site generation (SSG) for potential performance benefits, and API routes that streamline backend integration. Its "batteries included" approach accelerates development and simplifies deployment, especially with Vercel.
    *   **UI Component Library:** ShadCN UI
        *   **Justification:** ShadCN UI, built on Radix UI and styled with Tailwind CSS, provides beautifully crafted and accessible components. This choice allows for rapid assembly of the e-commerce website's UI, including product modals and the chatbot interface, while maintaining a polished, Shopify-like aesthetic. It ensures a consistent design language without extensive custom styling.
    *   **Styling Framework:** Tailwind CSS
        *   **Justification:** Tailwind CSS is a highly efficient utility-first CSS framework. It enables rapid styling directly within JSX, significantly speeding up UI development. Its customizable nature makes it easy to implement the desired Shopify-like color theme and responsive design, ensuring the AI assistant follows the user as they scroll.

2.  **Backend & API Layer**
    *   **Framework:** Next.js API Routes
        *   **Justification:** Next.js's integrated API routes provide a serverless function environment within the same codebase as the frontend. This unified approach simplifies development and deployment, making it ideal for rapid prototyping. These routes will handle orchestrating requests to the LLM, fetching product data from the database, and implementing personalization logic.

3.  **Database**
    *   **Provider:** Supabase (PostgreSQL)
        *   **Justification:** As a preferred technology, Supabase offers a powerful PostgreSQL database with a user-friendly interface and robust API generation. It's excellent for rapid prototyping, providing an easy way to store product metadata (name, price, pages, cover type for 6 books) and simple user interaction data (e.g., clicks on books for personalization logic). Its real-time capabilities and authentication features (though not strictly needed for this POC beyond basic data storage) make it a strong, scalable choice.

4.  **AI / Large Language Model (LLM) Integration**
    *   **Provider:** OpenAI (GPT-5.0 via API) or Google Gemini (via API)
        *   **Justification:** Leveraging an existing, state-of-the-art LLM like GPT-5.0 (or the latest available version from OpenAI) or Google Gemini is crucial for achieving the desired chatbot functionality. These models excel at natural language understanding and generation, enabling the chatbot to accurately answer product questions, generate concise product reviews, and provide personalized suggestions based on context provided by the Next.js API. Direct API access ensures flexibility and allows us to focus on prompt engineering for chatbot response accuracy.

5.  **Deployment & Hosting**
    *   **Platform:** Vercel
        *   **Justification:** Vercel is highly optimized for Next.js applications, offering seamless integration, automatic deployments from Git repositories, and high-performance serverless functions for API routes. Its global CDN ensures fast content delivery, and its automatic scaling capabilities handle varying loads efficiently. This choice directly supports the project's need for rapid deployment and ease of management, aligning with the "as soon as possible" timeline.

6.  **Key Libraries & Tools**
    *   **State Management:** React Context API or Zustand
        *   **Justification:** For managing global state such as chatbot visibility, open product modals, and basic user interaction data, a lightweight solution like React Context API or Zustand is sufficient for a proof-of-concept.
    *   **Icon Library:** Lucide Icons
        *   **Justification:** Often used in conjunction with ShadCN UI, Lucide provides a clean, customizable icon set that complements the modern aesthetic.

**Architectural Overview**

The "Chat Bot Sidekick" application will follow a client-server architecture. The **Frontend (React/Next.js)** will render the e-commerce website, display products, handle user interactions (e.g., clicking on products to open modals), and manage the persistent chatbot UI. **Next.js API Routes** will serve as the middleware, orchestrating requests. These routes will:
1.  Fetch product metadata from **Supabase**.
2.  Receive user queries from the frontend.
3.  Process user activity (e.g., which book was clicked for personalization) and construct contextual prompts.
4.  Send these prompts to the chosen **LLM (OpenAI/Gemini API)**.
5.  Receive and format responses from the LLM (product answers, review summaries, personalized suggestions).
6.  Return the formatted responses to the frontend.

**Supabase** will store all product details (Name, Price, Number of Pages, Paperback or Hard Cover) and can also log minimal user interactions necessary for the personalization logic (e.g., if a user clicks on the first book of a trilogy, the system can suggest the second). **Vercel** will host the entire Next.js application, including its API routes, providing a performant and scalable deployment environment.

## Project Structure
PROJECT STRUCTURE

This document outlines the file and folder organization for the "Chat Bot Sidekick" project. The structure is designed to promote modularity, maintainability, and scalability, adhering to modern Next.js (App Router) conventions, React best practices, and leveraging the chosen technologies (ShadCN, Tailwind, Supabase, LLM integration).



```
/
├── .next/
├── node_modules/
├── public/
│   ├── assets/
│   │   ├── products/
│   │   ├── chatbot/
│   │   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chatbot/
│   │   │   │   ├── route.ts
│   │   │   └── products/
│   │   │       ├── route.ts
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── product/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductModal.tsx
│   │   │   │   └── ProductList.tsx
│   │   │   ├── chatbot/
│   │   │   │   ├── ChatbotUI.tsx
│   │   │   │   ├── ChatWindow.tsx
│   │   │   │   ├── ChatMessage.tsx
│   │   │   │   └── ChatInput.tsx
│   │   │   └── common/
│   │   │       └── ScrollToTopButton.tsx
│   │   ├── hooks/
│   │   │   ├── useChatbotScroll.ts
│   │   │   └── useProductModal.ts
│   │   ├── lib/
│   │   │   ├── utils.ts
│   │   │   ├── supabase/
│   │   │   │   ├── client.ts
│   │   │   │   └── queries.ts
│   │   │   ├── llm/
│   │   │   │   ├── gpt.ts
│   │   │   │   └── gemini.ts
│   │   │   └── constants.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── types/
│   │   │   ├── index.d.ts
│   │   │   ├── product.d.ts
│   │   │   └── chatbot.d.ts
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── global-error.tsx
│   ├── data/
│   │   └── products.json
├── .env
├── .eslintrc.json
├── .gitignore
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```



### Directory Explanations

*   **`.next/`**:
    *   **Purpose**: This directory is automatically generated by Next.js during the build process. It contains the optimized production build of the application.
    *   **Contents**: Compiled JavaScript, CSS, HTML, and other assets.
    *   **Note**: This folder should not be manually modified or committed to version control.

*   **`node_modules/`**:
    *   **Purpose**: Stores all project dependencies installed via the package manager (pnpm, npm, or yarn).
    *   **Contents**: Libraries, frameworks, and tools required for the project.
    *   **Note**: This folder is typically very large and is excluded from version control using `.gitignore`.

*   **`public/`**:
    *   **Purpose**: Contains static assets that are served directly by the web server without being processed by Next.js's asset pipeline.
    *   **`public/assets/`**:
        *   **`public/assets/products/`**: Stores images for the 6 book products displayed on the e-commerce page.
        *   **`public/assets/chatbot/`**: Contains the image or icon for the AI assistant character (e.g., Shopify Sidekick style).
    *   **`public/favicon.ico`**: The favicon for the website, displayed in browser tabs.

*   **`src/`**:
    *   **Purpose**: The primary directory for the application's source code. All custom-written code resides here.

    *   **`src/app/`**:
        *   **Purpose**: This is the root of the Next.js App Router, where most of the application's routing and page-level logic is defined.
        *   **`src/app/api/`**:
            *   **Purpose**: Contains API routes that run on the server-side, enabling backend functionality within the Next.js application.
            *   **`src/app/api/chatbot/`**:
                *   **`src/app/api/chatbot/route.ts`**: Handles requests for chatbot interactions. This route will communicate with the chosen LLM (GPT-5.0 or Gemini) to process user queries, retrieve product-specific information, provide reviews, and generate personalized suggestions.
            *   **`src/app/api/products/`**:
                *   **`src/app/api/products/route.ts`**: Provides an API endpoint to fetch product data, likely interacting with Supabase. This will return the details of the 6 books.
        *   **`src/app/components/`**:
            *   **Purpose**: Houses all reusable React components, categorized by their function or origin.
            *   **`src/app/components/ui/`**:
                *   **Purpose**: Contains UI components generated and customized from ShadCN UI. These provide a consistent look and feel based on Tailwind CSS.
                *   **Contents**: Files like `button.tsx`, `dialog.tsx`, `card.tsx`, etc., generated via the ShadCN CLI.
            *   **`src/app/components/layout/`**:
                *   **Purpose**: Components related to the overall page structure and layout.
                *   **`src/app/components/layout/Header.tsx`**: Renders the top section of the page, including the website's quick summary and branding.
                *   **`src/app/components/layout/Footer.tsx`**: (Optional) Placeholder for a footer if the proof of concept were to expand, though not strictly required for a single-page scroll demo.
            *   **`src/app/components/product/`**:
                *   **Purpose**: Components specifically designed for displaying and interacting with product information.
                *   **`src/app/components/product/ProductCard.tsx`**: Displays a single book product on the main scrollable page, showing its name and potentially a thumbnail. It will be clickable.
                *   **`src/app/components/product/ProductModal.tsx`**: Renders the modal that appears when a `ProductCard` is clicked, showing detailed metadata (name, price, pages, cover type, estimated delivery).
                *   **`src/app/components/product/ProductList.tsx`**: An orchestrator component that fetches product data and renders a grid of `ProductCard` components.
            *   **`src/app/components/chatbot/`**:
                *   **Purpose**: Components dedicated to the chatbot's user interface and interactions.
                *   **`src/app/components/chatbot/ChatbotUI.tsx`**: The main container for the chatbot, managing its sticky positioning and "follows scroll" behavior.
                *   **`src/app/components/chatbot/ChatWindow.tsx`**: Displays the conversation history between the user and the chatbot.
                *   **`src/app/components/chatbot/ChatMessage.tsx`**: Renders an individual message Bubble, differentiating between user inputs and bot responses.
                *   **`src/app/components/chatbot/ChatInput.tsx`**: The input field where users type their questions or commands to the chatbot.
            *   **`src/app/components/common/`**:
                *   **Purpose**: General-purpose, highly reusable components that are not specific to a particular feature area.
                *   **`src/app/components/common/ScrollToTopButton.tsx`**: (Optional) A component that provides a button to quickly scroll to the top of the page.
        *   **`src/app/hooks/`**:
            *   **Purpose**: Contains custom React hooks to encapsulate and reuse stateful logic across components.
            *   **`src/app/hooks/useChatbotScroll.ts`**: Manages the logic for the chatbot UI to follow the user's scroll position on the page.
            *   **`src/app/hooks/useProductModal.ts`**: Manages the state and functionality for opening, closing, and displaying data within the `ProductModal`.
        *   **`src/app/lib/`**:
            *   **Purpose**: Houses utility functions, configurations, and integration logic for external services.
            *   **`src/app/lib/utils.ts`**: General utility functions, often including `cn` for conditional Tailwind class merging and other small helpers.
            *   **`src/app/lib/supabase/`**:
                *   **Purpose**: Contains code for interacting with the Supabase database.
                *   **`src/app/lib/supabase/client.ts`**: Initializes and exports the Supabase client instance, configured with environment variables.
                *   **`src/app/lib/supabase/queries.ts`**: Contains functions for specific database operations, such as fetching product details, logging user activity for personalization, or retrieving reviews.
            *   **`src/app/lib/llm/`**:
                *   **Purpose**: Logic for integrating with the Large Language Model.
                *   **`src/app/lib/llm/gpt.ts`**: Contains functions and API wrappers for sending requests to GPT-5.0 and processing its responses.
                *   **`src/app/lib/llm/gemini.ts`**: (Optional) Provides similar functionality for Gemini, if multi-LLM support or an alternative is considered.
            *   **`src/app/lib/constants.ts`**: Stores global constants, magic strings, or configuration values (e.g., product categories, default chatbot prompts).
        *   **`src/app/styles/`**:
            *   **Purpose**: Global stylesheet definitions.
            *   **`src/app/styles/globals.css`**: The main CSS file, responsible for importing Tailwind CSS and any custom global styles or overrides.
        *   **`src/app/types/`**:
            *   **Purpose**: TypeScript definition files for enhanced type safety and code clarity.
            *   **`src/app/types/index.d.ts`**: General project-wide type definitions.
            *   **`src/app/types/product.d.ts`**: Defines interfaces/types for product objects, their metadata, and related data structures.
            *   **`src/app/types/chatbot.d.ts`**: Defines interfaces/types for chatbot messages, conversation history, and chatbot state.
        *   **`src/app/page.tsx`**: The main entry point for the landing page. It orchestrates the display of the header, product list, and integrates the `ChatbotUI`.
        *   **`src/app/layout.tsx`**: The root layout for the Next.js application, defining the HTML, `Head`, and `Body` elements, and applying global styles or context providers.
        *   **`src/app/global-error.tsx`**: A component to render a custom error page for unhandled errors across the application.

    *   **`src/data/`**:
        *   **Purpose**: Stores mock data used for initial development, prototyping, or as a fallback.
        *   **`src/data/products.json`**: A JSON file containing the mock data for the 6 book products, including their names, prices, page counts, and cover types. This can be used to populate Supabase or for local development.

### Configuration Files and Other Root-Level Files

*   **`.env`**:
    *   **Purpose**: Stores environment variables (e.g., Supabase API URL and keys, LLM API keys).
    *   **Note**: This file is critical for security and should be kept out of version control (`.gitignore`) and managed securely on deployment platforms like Vercel.

*   **`.eslintrc.json`**:
    *   **Purpose**: Configuration file for ESLint, a static code analysis tool that helps maintain code quality and consistency.

*   **`.gitignore`**:
    *   **Purpose**: Specifies files and directories that Git should ignore and not track in the repository. Essential for excluding build artifacts, dependencies, and sensitive information.

*   **`next.config.mjs`**:
    *   **Purpose**: Configuration file for Next.js, allowing customization of build behavior, routing, environment variables, and more.

*   **`package.json`**:
    *   **Purpose**: Manifest file for the Node.js project. It lists project metadata, scripts for common tasks (e.g., `dev`, `build`, `start`), and all project dependencies.

*   **`pnpm-lock.yaml`** (or `yarn.lock`/`package-lock.json`):
    *   **Purpose**: A lockfile generated by the package manager (pnpm in this case). It ensures deterministic dependency installations, guaranteeing that all developers and build environments use the exact same versions of packages.

*   **`postcss.config.js`**:
    *   **Purpose**: Configuration file for PostCSS, a tool for transforming CSS. It's primarily used here for integrating Tailwind CSS.

*   **`README.md`**:
    *   **Purpose**: Provides a high-level overview of the project, including its purpose, setup instructions, development scripts, and deployment information.

*   **`tailwind.config.ts`**:
    *   **Purpose**: Configuration file for Tailwind CSS. It allows customization of Tailwind's default theme (colors, fonts, spacing), extending utility classes, and adding plugins. This will be used to define Shopify-like colors.

*   **`tsconfig.json`**:
    *   **Purpose**: Configuration file for TypeScript. It defines compiler options, root directories, and other settings for the TypeScript transpiler.

*   **`vercel.json`**:
    *   **Purpose**: Configuration file for Vercel deployment. It can be used to specify build settings, environment variables, redirects, or custom routes for Vercel's platform.

## Database Schema Design
SCHEMADESIGN

This document outlines the database schema design for the "Chat Bot Sidekick" project, a proof-of-concept e-commerce website featuring a chatbot assistant. The schema is designed to support core functionalities including product display, user activity tracking for personalization, and product reviews. The chosen database system is Supabase, leveraging PostgreSQL capabilities.



## 1. Database System

**Provider:** Supabase

**Underlying Database:** PostgreSQL



## 2. Data Models



### 2.1. `products` Table

This table stores the core information for each book available on the e-commerce website.



| Column Name    | Data Type                      | Constraints / Description                                                                                                   |

|----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|

| `id`           | `UUID`                         | Primary Key, automatically generated (`gen_random_uuid()`). Unique identifier for each product.                           |

| `name`         | `TEXT`                         | NOT NULL. The title of the book.                                                                                          |

| `price`        | `NUMERIC(10, 2)`               | NOT NULL. The cost of the book, e.g., 19.99.                                                                              |

| `pages`        | `INTEGER`                      | NOT NULL. The total number of pages in the book.                                                                          |

| `cover_type`   | `TEXT`                         | NOT NULL. Specifies if the book is "Paperback" or "Hard Cover".                                                           |

| `description`  | `TEXT`                         | NULLABLE. A brief description of the book, displayed in the product modal.                                                |

| `image_url`    | `TEXT`                         | NULLABLE. URL to the product image for display.                                                                           |

| `trilogy_id`   | `UUID`                         | NULLABLE. A common UUID for all books belonging to the same trilogy. Used for personalization logic.                       |

| `trilogy_order`| `INTEGER`                      | NULLABLE. The sequential order of the book within its trilogy (e.g., 1, 2, 3). Used for suggesting the next book.           |



### 2.2. `users` Table

This table tracks unique visitors (sessions) to enable personalization logic based on activity. User IDs are generated upon a visitor's first interaction.



| Column Name    | Data Type                      | Constraints / Description                                                                                                   |

|----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|

| `id`           | `UUID`                         | Primary Key, automatically generated (`gen_random_uuid()`). Unique identifier for each user session.                      |

| `created_at`   | `TIMESTAMP WITH TIME ZONE`     | DEFAULT `NOW()`. The timestamp when the user session was first recorded.                                                    |



### 2.3. `user_activity` Table

Records specific actions performed by users, primarily clicks on products, to feed into the personalization engine.



| Column Name    | Data Type                      | Constraints / Description                                                                                                   |

|----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|

| `id`           | `UUID`                         | Primary Key, automatically generated (`gen_random_uuid()`). Unique identifier for each activity record.                   |

| `user_id`      | `UUID`                         | NOT NULL. Foreign Key referencing `users.id`. Links the activity to a specific user session.                              |

| `product_id`   | `UUID`                         | NOT NULL. Foreign Key referencing `products.id`. Links the activity to a specific product.                                |

| `activity_type`| `TEXT`                         | NOT NULL. Describes the type of activity, e.g., "click".                                                                  |

| `timestamp`    | `TIMESTAMP WITH TIME ZONE`     | DEFAULT `NOW()`. The timestamp when the activity occurred.                                                                  |



### 2.4. `reviews` Table

Stores product reviews, which the chatbot can leverage to answer questions about product feedback. For this PoC, reviews might be pre-seeded or generated.



| Column Name    | Data Type                      | Constraints / Description                                                                                                   |

|----------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------|

| `id`           | `UUID`                         | Primary Key, automatically generated (`gen_random_uuid()`). Unique identifier for each review.                            |

| `product_id`   | `UUID`                         | NOT NULL. Foreign Key referencing `products.id`. Links the review to a specific product.                                  |

| `user_id`      | `UUID`                         | NULLABLE. Foreign Key referencing `users.id`. Identifies the user who wrote the review (optional for PoC).                |

| `rating`       | `INTEGER`                      | NULLABLE. A numerical rating (e.g., 1-5 stars) for the product. `CHECK (rating >= 1 AND rating <= 5)`.                   |

| `review_text`  | `TEXT`                         | NOT NULL. The actual text content of the review.                                                                          |

| `created_at`   | `TIMESTAMP WITH TIME ZONE`     | DEFAULT `NOW()`. The timestamp when the review was created.                                                                 |



## 3. Relationships



*   **`products`** **1 : M** **`user_activity`**: One product can be associated with many user activities (e.g., multiple clicks).

*   **`users`** **1 : M** **`user_activity`**: One user (session) can perform many activities.

*   **`products`** **1 : M** **`reviews`**: One product can have many reviews.

*   **`users`** **1 : M** **`reviews`**: One user (session) can submit many reviews (if `user_id` is populated).



## 4. Indexes



To optimize query performance, especially for fetching product details, user activity, and reviews, the following indexes are recommended for Supabase (PostgreSQL):



*   **`products`**:
    *   Index on `trilogy_id` for efficient lookup of books within the same trilogy.

*   **`user_activity`**:
    *   Index on `user_id` for quickly retrieving all activities of a specific user.
    *   Index on `product_id` for quickly retrieving activities related to a specific product.
    *   Combined index on `user_id`, `product_id`, `activity_type` for specific activity tracking.

*   **`reviews`**:
    *   Index on `product_id` for efficient retrieval of all reviews for a given product.



## 5. Data Flow and Integration Notes



*   **Product Content:** The `products` table will be populated with initial data for the 6 books, including their names, prices, page counts, cover types, descriptions, image URLs, and trilogy metadata.

*   **User Activity:** Frontend (React) will send events (e.g., product clicks) to the Next.js backend, which will then record these in the `user_activity` table, associated with a `user_id` (session ID).

*   **Personalization:** The Next.js backend will query the `user_activity` table to identify user patterns (e.g., clicking on "first book of a trilogy") and use the `products` table (`trilogy_id`, `trilogy_order`) to suggest relevant follow-up products. This information will then be provided to the LLM as context for personalized suggestions.

*   **Reviews:** The `reviews` table will hold review content for products. When a user asks the chatbot for reviews, the backend will query this table for the relevant `product_id` and provide the text content to the LLM to synthesize an answer.

*   **Chatbot Context:** The LLM (GPT-5.0/Gemini) will receive real-time product metadata, user activity context, and review information from the backend to generate accurate and personalized responses. The database schema directly supports gathering this contextual data.



This schema provides a solid foundation for the "Chat Bot Sidekick" proof of concept, enabling the key functionalities of product display, user-activity-driven personalization, and review-based chatbot responses.

## User Flow
USERFLOW

**1. Overview**
The "Chat Bot Sidekick" application is a proof-of-concept e-commerce website designed to showcase the integration of an AI chatbot for enhanced user interaction. The user flow focuses on intuitive product browsing, detailed product information retrieval, customer review generation, and personalized product suggestions, all facilitated by a persistent, friendly AI assistant. The goal is to demonstrate the feasibility of quick prototype development using a modern tech stack.

**2. Key User Journeys**

**2.1. Journey 1: Product Browsing & Basic Chatbot Information Retrieval**

*   **User Goal:** Explore available products and obtain specific details about a selected book via the AI Sidekick.
*   **Trigger:** User lands on the website.

    *   **Step 1: Land on Website**
        *   **Action:** User navigates to the website's URL.
        *   **UI/Screen:** Landing Page. Displays a brief summary at the top, followed by a grid of 6 book products. The collapsed AI Sidekick character icon is visible on the right side of the screen.
        *   **Interaction:** Initial page load.
        *   **System Response:** The webpage renders, presenting the initial content and the static AI Sidekick icon.

    *   **Step 2: Browse Products**
        *   **Action:** User scrolls down the page to view the product grid.
        *   **UI/Screen:** Landing Page. The product grid becomes fully visible. The AI Sidekick icon remains fixed on the right side, maintaining its position relative to the viewport.
        *   **Interaction:** Vertical scroll gesture.
        *   **System Response:** Page content scrolls, and the AI Sidekick's `position: fixed` ensures it stays in view.

    *   **Step 3: View Product Details**
        *   **Action:** User clicks on a product card (e.g., "Book 1 of Trilogy A").
        *   **UI/Screen:** Product Detail Modal. This modal overlays the Landing Page, dimming the background. It displays the book's Name, Price, Number of Pages, and Paperback/Hard Cover status.
        *   **Interaction:** Click event on a product card element.
        *   **System Response:** The Product Detail Modal opens smoothly, presenting the selected book's metadata.

    *   **Step 4: Engage AI Sidekick**
        *   **Action:** User clicks on the collapsed AI Sidekick character icon.
        *   **UI/Screen:** Chatbot Panel (Expanded). The panel slides out from the right side of the screen, revealing a chat history area, an input field, and a "Send" button. The Product Detail Modal remains open in the background.
        *   **Interaction:** Click event on the AI Sidekick icon.
        *   **System Response:** The Chatbot Panel expands, potentially displaying a default greeting.

    *   **Step 5: Ask for Product Information**
        *   **Action:** User types a query into the chatbot's input field (e.g., "What is this book about?") and presses "Enter" or clicks the "Send" button.
        *   **UI/Screen:** Chatbot Panel (Expanded). The user's query appears in the chat history.
        *   **Interaction:** Text input, keyboard "Enter" key press or mouse click on "Send".
        *   **System Response:** The user's query is sent to the backend (Next.js), which forwards it to the LLM (GPT-5.0 or Gemini) along with the context of the currently open product modal. The LLM processes the query and generates a concise summary of the book. This response is then displayed in the chat history.

    *   **Step 6: Close Chatbot Panel**
        *   **Action:** User clicks the "X" (close) button within the Chatbot Panel or clicks on the AI Sidekick icon again.
        *   **UI/Screen:** Product Detail Modal visible, Chatbot Panel (Collapsed).
        *   **Interaction:** Click event.
        *   **System Response:** The Chatbot Panel retracts, returning to its collapsed icon state.

    *   **Step 7: Close Product Detail Modal**
        *   **Action:** User clicks the "X" (close) button within the Product Detail Modal or clicks on the dimmed background area outside the modal.
        *   **UI/Screen:** Landing Page. The product grid and collapsed AI Sidekick icon are now fully visible again.
        *   **Interaction:** Click event.
        *   **System Response:** The Product Detail Modal closes, returning the user to the main Landing Page.

**2.2. Journey 2: Retrieving Product Reviews via Chatbot**

*   **User Goal:** Obtain customer reviews for a specific book using the AI Sidekick.
*   **Trigger:** User is viewing a product's details.

    *   **Steps 1-4:** Follow Journey 1, Steps 1-4 (Land on Website, Browse Products, View Product Details, Engage AI Sidekick).
    *   **Step 5: Request Reviews**
        *   **Action:** User types a question such as "Tell me about reviews for this book" or "What do readers think?" into the chatbot input field and presses "Enter" or clicks "Send".
        *   **UI/Screen:** Chatbot Panel (Expanded). User's query appears in the chat history.
        *   **Interaction:** Text input, key press/click.
        *   **System Response:** The query is sent to the LLM with the product context. The LLM generates a summary of hypothetical reviews or key sentiment points related to the book. The response is displayed in the chat history.

    *   **Steps 6-7:** Follow Journey 1, Steps 6-7 (Close Chatbot Panel, Close Product Detail Modal).

**2.3. Journey 3: Personalized Product Suggestions via Chatbot**

*   **User Goal:** Receive a personalized book recommendation from the AI Sidekick based on their activity.
*   **Trigger:** User has previously viewed a specific book from a known trilogy.

    *   **Steps 1-3:** Follow Journey 1, Steps 1-3 (Land on Website, Browse Products, View Product Details - specifically, "Book 1 of Trilogy A").
    *   **Step 4: Provide Personalization Context (Interaction Logging)**
        *   **Action:** User closes the Product Detail Modal after viewing "Book 1 of Trilogy A".
        *   **UI/Screen:** Landing Page.
        *   **Interaction:** Click "X" or outside the modal.
        *   **System Response:** The Product Detail Modal closes. The system internally records that the user has shown interest in "Book 1 of Trilogy A".

    *   **Step 5: Engage AI Sidekick**
        *   **Action:** User clicks on the collapsed AI Sidekick character icon.
        *   **UI/Screen:** Chatbot Panel (Expanded).
        *   **Interaction:** Click event.
        *   **System Response:** The Chatbot Panel expands.

    *   **Step 6: Request Personalized Suggestion**
        *   **Action:** User types a general request like "Suggest another book for me" or "What should I read next?" into the chatbot input field and presses "Enter" or clicks "Send".
        *   **UI/Screen:** Chatbot Panel (Expanded). User's query appears in the chat history.
        *   **Interaction:** Text input, key press/click.
        *   **System Response:** The chatbot (LLM) processes the query. Leveraging the recorded user activity (interest in "Book 1 of Trilogy A"), the personalization logic constructs a prompt for the LLM to specifically suggest "Book 2 of Trilogy A". The LLM provides this suggestion along with a brief explanation. If no specific "trilogy" context is available, the LLM provides a general book recommendation. The response is displayed in the chat history.

    *   **Step 7: Close Chatbot Panel**
        *   **Action:** User clicks the "X" (close) button within the Chatbot Panel or clicks on the AI Sidekick icon again.
        *   **UI/Screen:** Landing Page visible, Chatbot Panel (Collapsed).
        *   **Interaction:** Click event.
        *   **System Response:** The Chatbot Panel retracts.

**3. Wireframe Descriptions**

**3.1. Landing Page (Homepage)**

*   **Purpose:** Initial user entry point; displays the project's purpose and available products.
*   **Key Elements:**
    *   **Header (Top):** "Chat Bot Sidekick" project title.
    *   **Site Summary (Below Header):** A paragraph summarizing the project's aim (e.g., "Welcome to our E-commerce Bookstore, showcasing an interactive AI assistant!").
    *   **Product Grid (Below Summary):**
        *   Layout: Two rows, three columns, displaying 6 distinct book products.
        *   Each Product Card:
            *   Placeholder Image: A generic book cover image.
            *   Book Title: The name of the book.
            *   Price: The cost of the book.
        *   Interaction: Clicking any product card triggers the Product Detail Modal.
    *   **AI Sidekick Icon (Right Side):**
        *   Appearance: Small, animated, friendly character icon (similar to Shopify's Sidekick style).
        *   Position: Fixed to the right side of the viewport, vertically centered or slightly above center. It maintains its position while the user scrolls.
        *   Interaction: Toggles the Chatbot Panel (expand/collapse) on click.

**3.2. Product Detail Modal**

*   **Purpose:** Provide in-depth information for a selected book.
*   **Key Elements:**
    *   **Overlay:** Appears centrally over the Landing Page, with the background content slightly dimmed and blurred.
    *   **Close Button (Top Right):** An "X" icon to dismiss the modal.
    *   **Product Image:** A larger placeholder image for the specific book.
    *   **Product Metadata:**
        *   **Name of the book:** Prominently displayed.
        *   **Price:** Bold text, clearly visible.
        *   **Number of Pages:** Standard text.
        *   **Paperback or Hard Cover:** Standard text, indicating format.
    *   **Interaction:** The modal closes when the "X" is clicked or when the user clicks on the dimmed area outside the modal.

**3.3. Chatbot Interface**

*   **Purpose:** Facilitate conversational interaction with the AI assistant.
*   **Key Elements:**
    *   **Collapsed State (AI Sidekick Icon):**
        *   Same appearance and `fixed` position as on the Landing Page.
        *   Clicking it transitions to the Expanded State.
    *   **Expanded State (Chatbot Panel):**
        *   Appearance: A panel that smoothly slides out from the right edge of the screen, partially overlapping the main content (or Product Detail Modal if open).
        *   Header:
            *   AI Sidekick Avatar/Small Image.
            *   Chatbot Name (e.g., "AI Sidekick").
            *   Close Button (Top Right): An "X" icon to collapse the panel.
        *   Chat History Display Area:
            *   A scrollable region where all user queries and chatbot responses are displayed chronologically.
            *   Chatbot responses are visually distinct (e.g., different background color or alignment) from user inputs.
        *   Input Field (Bottom):
            *   A text input area for the user to type their questions.
            *   Placeholder text: "Type your question..."
        *   Send Button (Next to Input Field):
            *   An icon (e.g., a paper plane) or "Send" text.
            *   Interaction: Sends the typed message to the chatbot. Pressing "Enter" key in the input field also triggers sending.

**4. Interaction Patterns**

**4.1. AI Sidekick Icon (Collapsed State)**
*   **Behavior:** The icon is `position: fixed` using CSS (likely in Tailwind) to ensure it stays anchored to the right side of the viewport, regardless of scroll position.
*   **Action:** Click event.
*   **Result:** The Chatbot Panel slides into view from the right.

**4.2. Chatbot Panel (Expanded State)**
*   **Behavior:** The panel uses a smooth `transform` or `transition` effect to slide out/in from the right edge of the screen.
*   **Action:** Clicking the "X" (close) button within the panel header or clicking the AI Sidekick icon (now expanded) again.
*   **Result:** The Chatbot Panel smoothly retracts to the right, returning to its collapsed icon state.

**4.3. Product Card Click**
*   **Behavior:** Each product card in the grid is an interactive element.
*   **Action:** User clicks anywhere on a product card.
*   **Result:** The Product Detail Modal opens over the existing page content.

**4.4. Product Detail Modal Close**
*   **Behavior:** The modal provides clear mechanisms for dismissal.
*   **Action:** User clicks the "X" button located at the top-right of the modal, or clicks on the dimmed background area surrounding the modal.
*   **Result:** The modal closes, and the user is returned to the Landing Page.

**4.5. Chatbot Input and Response**
*   **Behavior:** This is the core interaction for the AI assistant.
*   **Action:** User types a message into the text input field. The message is sent by either pressing the "Enter" key or clicking the "Send" button.
*   **Result:**
    1.  The user's message is immediately displayed in the chat history.
    2.  The `React` frontend sends an API request to the `Next.js` backend (hosted on `Vercel`).
    3.  The `Next.js` backend, using data from `Supabase` (if product data is stored there, otherwise in-memory mock data), crafts a prompt for the LLM (GPT-5.0 or Gemini). This prompt includes the user's query, any relevant current page context (e.g., if a product modal is open), and optionally, a brief history of the user's recent interactions for personalization.
    4.  The LLM processes the prompt and generates a response.
    5.  The `Next.js` backend returns the LLM's response to the frontend.
    6.  The chatbot's response is then displayed in the chat history, typically with a slight delay to simulate processing.

**4.6. Personalized Suggestion Logic**
*   **Behavior:** The chatbot intelligently offers relevant product suggestions.
*   **Condition:** If a user clicks on a product that is identified as the first book of one of the two pre-defined trilogies (e.g., "Book 1 of Trilogy A"), this interaction is logged in a temporary, client-side state or via `Supabase` if persistent user sessions were implemented.
*   **Action:** User subsequently asks a general question for recommendations (e.g., "Suggest another book for me") via the chatbot.
*   **Result:** When the user asks for a suggestion, the LLM's prompt is dynamically augmented with the context of the user's previous interest. For example, if "Book 1 of Trilogy A" was viewed, the LLM is guided to suggest "Book 2 of Trilogy A". If no specific trilogy interaction has occurred, the LLM provides a more general, yet relevant, book suggestion based on its overall knowledge.

**4.7. AI Sidekick Persistence**
*   **Behavior:** The AI Sidekick icon (collapsed state) is always available on the screen.
*   **Action:** Scrolling the page, opening/closing the Product Detail Modal.
*   **Result:** The AI Sidekick icon remains `fixed` on the right side of the viewport, providing continuous accessibility for the user to engage the chatbot at any time.

## Styling Guidelines
STYLING GUIDELINES DOCUMENT

1. Introduction
This document outlines the styling guidelines for the "Chat Bot Sidekick" project. Its purpose is to ensure a consistent, visually appealing, and user-friendly interface that aligns with the project's "Shopify-like" aesthetic. These guidelines will inform the design and implementation using React, ShadCN components, and Tailwind CSS utility classes.

2. UI/UX Principles
The following principles will guide the design and user experience:

*   **Clarity & Simplicity:** The interface should be intuitive, with clear information presentation and minimal clutter. Users should easily understand how to interact with the products and the chatbot.
*   **Consistency:** Maintain a uniform visual language across all elements, from typography and color usage to component behavior. This includes consistent spacing, iconography, and interaction patterns.
*   **Engaging & Friendly:** The chatbot, in particular, should exude a helpful and approachable personality, reminiscent of Shopify's Sidekick. The overall UI should feel welcoming and modern.
*   **Responsiveness:** The website must adapt seamlessly to various screen sizes and devices, from mobile phones to large desktop monitors, providing an optimal viewing and interaction experience across all.
*   **Accessibility:** Basic accessibility considerations will be applied, including sufficient color contrast for readability, logical tab order for keyboard navigation, and clear focus states for interactive elements.
*   **Seamless Interaction:** User interactions, such as opening product details in a modal and the sticky chatbot following the scroll, should be smooth and performant, enhancing the overall user journey.

3. Color Palette
The color palette is inspired by Shopify's brand identity, utilizing greens, grays, and whites to convey professionalism, trustworthiness, and a clean modern aesthetic.

*   **Primary Green (Brand Accent):** `#008060`
    *   Usage: Primary call-to-action buttons, prominent branding elements, chatbot header.
*   **Secondary Green (Lighter Accent):** `#50B876`
    *   Usage: Hover states for primary elements, accent details, user messages in chatbot.
*   **Dark Gray (Primary Text):** `#212B36`
    *   Usage: Main headings, body text for maximum readability.
*   **Medium Gray (Secondary Text/Labels):** `#637381`
    *   Usage: Subheadings, product metadata labels, descriptive text.
*   **Light Gray (UI Background/Borders):** `#EAECEE`
    *   Usage: Section separators, card borders, chatbot background messages.
*   **Off-White (Subtle Background):** `#F4F6F8`
    *   Usage: Page backgrounds, subtle distinctions between content blocks.
*   **Pure White (Main Background/Containers):** `#FFFFFF`
    *   Usage: Main content areas, product cards, modal backgrounds, chatbot window.
*   **Error/Alert Red:** `#DF2C2C`
    *   Usage: Form validation errors, critical alerts.

4. Typography
A modern, clean sans-serif font family will be used to ensure excellent readability and a contemporary feel, consistent with the Shopify aesthetic.

*   **Font Family:** `Inter`, `sans-serif` (or a similar modern, system-friendly sans-serif like `SF Pro Display`, `Roboto`, `Segoe UI`).
*   **Font Weights:**
    *   Regular (400)
    *   Medium (500)
    *   Semi-bold (600)
    *   Bold (700)
*   **Font Sizing (relative to base 16px):**
    *   **H1 (Site Title):** `2.5rem` (`40px`), `font-bold`, `line-height: 1.2`
    *   **H2 (Section Titles):** `1.75rem` (`28px`), `font-semibold`, `line-height: 1.25`
    *   **H3 (Product Names/Modal Titles):** `1.25rem` (`20px`), `font-semibold`, `line-height: 1.3`
    *   **Body Text:** `1rem` (`16px`), `font-regular`, `line-height: 1.5`
    *   **Small Text (Metadata/Captions):** `0.875rem` (`14px`), `font-regular`, `line-height: 1.4`
    *   **Chatbot Text:** `1rem` (`16px`), `font-regular`, `line-height: 1.5`
*   **Letter Spacing:** Normal for all text.
*   **Text Alignment:** Primarily left-aligned for readability, centered for main page title/summary.

5. Component Styling Guidelines (ShadCN & Tailwind Oriented)
Leveraging ShadCN components with Tailwind CSS will ensure efficient development and consistent styling.

*   **General Layout & Spacing:**
    *   **Max Width:** Main content areas will be constrained using `max-w-screen-xl` or similar, centered with `mx-auto`.
    *   **Padding:** Consistent vertical (`py-10`) and horizontal (`px-4` on mobile, `px-8` on desktop) padding for sections.
    *   **Gaps:** Use Tailwind's `gap-x` and `gap-y` utilities for spacing between grid items and flex children.
*   **Header (Site Summary Section):**
    *   Clean and prominent display of the "Chat Bot Sidekick" title.
    *   Brief project description presented clearly below the title.
    *   Centered text alignment.
*   **Product Grid:**
    *   **Layout:** Responsive grid `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
    *   **Product Cards:**
        *   `bg-white`, `rounded-lg`, `shadow-sm`, `p-4`.
        *   Image: `h-48 w-full object-cover rounded-md mb-3`.
        *   Name (H3): `text-lg font-semibold text-gray-900`.
        *   Price: `text-md font-medium text-primary-green`.
        *   Metadata (e.g., Number of Pages, Hardcover/Paperback): `text-sm text-medium-gray`.
        *   **Interaction:** Subtle `hover:shadow-md hover:scale-[1.02] transition-transform duration-200` effect.
*   **Product Modal (ShadCN Dialog Component):**
    *   **Overlay:** Semi-transparent dark overlay (`bg-black/50`) to dim the background.
    *   **Content:** `bg-white`, `rounded-lg`, `p-6`, `shadow-xl`, `max-w-lg md:max-w-xl mx-auto`.
    *   **Metadata Display:** Clear labels and values. Labels (`text-medium-gray`, `font-medium`), values (`text-dark-gray`, `font-semibold`).
    *   **Close Button:** Icon button (e.g., `X` icon) positioned at the top-right corner of the modal, `text-dark-gray hover:text-primary-green`.
*   **Chatbot UI ("Shopify Sidekick" Persona):**
    *   **Placement:** Fixed position, `bottom-4 right-4` (or `left-4`), `z-50`.
    *   **Toggle Button/Icon:** Circular, `w-12 h-12`, `rounded-full`, `bg-primary-green`, `text-white`, `shadow-lg`, `flex items-center justify-center`. Contains a friendly chatbot avatar or icon.
    *   **Chat Window:**
        *   **Container:** `bg-white`, `rounded-lg`, `shadow-xl`, `w-80 md:w-96 h-96`, positioned adjacently to the toggle button when open.
        *   **Header:** `bg-primary-green text-white p-3 rounded-t-lg font-semibold`. Includes a title (e.g., "AI Sidekick") and a close button.
        *   **Message Area:** `p-3 overflow-y-auto`, `flex flex-col gap-3`.
        *   **User Message Bubble:** `bg-secondary-green text-white rounded-lg p-2 max-w-[80%] ml-auto`.
        *   **AI Message Bubble:** `bg-light-gray text-dark-gray rounded-lg p-2 max-w-[80%] mr-auto`.
        *   **Input Field:** `w-full p-2 border-t border-light-gray rounded-b-lg outline-none focus:border-primary-green`.
        *   **Send Button:** Integrated within or adjacent to the input field, using an icon (e.g., `Send` icon).
*   **Buttons:**
    *   **Primary:** `bg-primary-green hover:bg-[#006A4E] text-white font-medium py-2 px-4 rounded-md transition-colors`.
    *   **Secondary:** `bg-light-gray hover:bg-medium-gray text-dark-gray font-medium py-2 px-4 rounded-md transition-colors`.

6. Iconography
Icons will be used for interactive elements and visual cues to enhance usability without adding clutter.

*   **Source:** Lucide Icons (often integrated with ShadCN) or a similar clean, vector-based icon library.
*   **Examples:** `X` (for close modal/chat), `Send` (for chat message), `MessageCircle` (for chatbot toggle), `Info` (for product details, if needed).
*   **Styling:** Consistent size (e.g., `w-5 h-5`), `text-dark-gray` by default, `text-primary-green` on hover/active.

7. Imagery
Product and chatbot imagery will play a significant role in the visual appeal.

*   **Product Images (Books):**
    *   **Consistency:** All product images should maintain a consistent aspect ratio (e.g., `3:4` or `4:3`) and resolution.
    *   **Quality:** High-resolution images are required, with clear, well-lit subjects.
    *   **Backgrounds:** Preferably clean, solid, or subtly textured backgrounds to maintain focus on the product.
*   **Chatbot Avatar/Character:**
    *   **Personality:** The avatar for the chatbot should be friendly, approachable, and consistent with the "Shopify Sidekick" persona. It should be easily recognizable.
    *   **Style:** Clean, perhaps a simple illustration or a stylized icon.

8. Responsiveness
Tailwind CSS's mobile-first approach will be utilized to ensure optimal display and functionality across all devices.

*   **Breakpoints:** Standard Tailwind CSS breakpoints (`sm`, `md`, `lg`, `xl`) will be used to adapt layouts.
*   **Fluid Layouts:** Flexible grid and flexbox layouts will ensure content reflows gracefully.
*   **Stacking:** Elements will generally stack vertically on smaller screens and transition to horizontal arrangements on larger viewports.
*   **Touch Targets:** Ensure interactive elements (buttons, product cards, chatbot toggle) have sufficient touch target sizes for mobile users.
