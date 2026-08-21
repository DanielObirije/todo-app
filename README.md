# React Native for Babies

![Demo App](/assets/images/screenshot-for-readme.png)

This is a full-stack, real-time to-do application built with React Native, Expo, and Convex. The project also includes Detox end-to-end tests for testing critical user flows on iOS.

## Features

* Create, edit, complete, and delete todos
* Todo progress and statistics
* Dark mode and app preferences
* Real-time synchronization with Convex
* iOS, Android, and Web support
* End-to-end testing with Detox

## Tech Stack

* React Native
* Expo
* TypeScript
* Convex
* Detox
* Jest

## Project Structure

```text
app/              # Application screens
components/       # Reusable components
convex/            # Convex backend
hooks/             # Custom hooks
assets/            # Images, fonts, and styles

e2e/               # Detox E2E tests
├── pages/         # Page Objects
├── tests/         # E2E test cases
└── utils/         # Test data and helpers

android/           # Native Android project
ios/               # Native iOS project
.detoxrc.js        # Detox configuration
package.json       # Project scripts and dependencies
```

## Environment Setup

Create a `.env` file in the project root:

```env
CONVEX_DEPLOYMENT=<get_it_from_convex>
EXPO_PUBLIC_CONVEX_URL=<get_it_from_convex>
```

## Installation

```bash
npm install
```

## Run the App

Start Expo:

```bash
npm start
```

Start Convex in a separate terminal:

```bash
npx convex dev
```

Run on iOS:

```bash
npm run ios
```

Run on Android:

```bash
npm run android
```

Run on Web:

```bash
npm run web
```

## E2E Testing

The project uses Detox for end-to-end testing. The tests are organized using the Page Object Model to keep test logic and screen interactions maintainable.

Build the iOS app for Detox:

```bash
npm run detox:build:ios
```

Run the E2E tests:

```bash
npm run detox:test:ios
```

Or run the build and tests together:

```bash
npm run detox:build:ios && npm run detox:test:ios
```

The Detox test setup is located in the `e2e` directory:

```text
e2e/
├── pages/
├── tests/
└── utils/
```

The `pages` directory contains screen objects, `tests` contains E2E scenarios, and `utils` contains shared helpers and test data.

## Available Scripts

```bash
npm start
npm run ios
npm run android
npm run web
npm run lint
npm run detox:build:ios
npm run detox:test:ios
```

