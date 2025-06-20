# Consultation Service

A simple ReactJS web app that asks 5 yes/no questions to the customer, collects their answers, and displays a thank you message. The answers are logged to the console for demonstration purposes.

## Features

- ReactJS with TypeScript
- Context API for state management
- CSS Modules for scoped styling
- Responsive design for mobile and desktop
- Header with brand logo and footer with two columns

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

### Build

```bash
npm run build
# or
yarn build
```

### Lint

```bash
npm run lint
# or
yarn lint
```

## Notes

- The Context API is used to manage user and question state globally.
- CSS Modules are used for component scoped styling.
- Answers are logged to the console after the last question.

## Trade-offs

- No backend/API integration; answers are not persisted.
- Minimal validation, as only yes/no answers are allowed.
