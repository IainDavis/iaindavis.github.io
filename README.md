# Iain Davis Developer Portfolio

This is the source code for [IainDavis.dev](https://iaindavis.dev), a personal portfolio website showcasing development skills, projects, and professional insights. The site is built using modern web development tools for fast performance, ease of maintenance, and scalability.

## Table of Contents

1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)

---

## Overview

This portfolio website serves as a professional presence for **Iain Davis**, showcasing a collection of projects, technical blogs, and professional experience. Built on modern web technologies like **Vite**, **React**, and **Docusaurus**, it provides an optimized, fast-loading, and accessible experience for visitors.

The site features:
- **About Me**: Background, skills, and professional journey.
- **Projects**: A showcase of personal and open-source projects.
- **Blog**: A collection of blog posts covering a variety of development topics.
- **Resume**: Downloadable resume for prospective clients or employers.
  
---

## Technologies Used

The site leverages the following technologies and libraries:

- **[Vite](https://vitejs.dev/)**: `^4.0.0` - Fast build tool optimized for modern web development.
- **[React](https://reactjs.org/)**: `^18.0.0` - A declarative JavaScript library for building user interfaces.
- **[Docusaurus](https://docusaurus.io/)**: `^3.5.2` - Static site generator used for documentation and blog management.
- **[TypeScript](https://www.typescriptlang.org/)**: `^5.2.2` - Typed JavaScript to improve code reliability and developer productivity.
- **[Storybook](https://storybook.js.org/)**: `^7.25.2` - Development environment for building and documenting UI components in isolation.
- **[Vitest](https://vitest.dev/)**: `^2.1.1` - Unit testing framework integrated with Vite for fast, modern testing.
- **[Mochawesome](https://www.mochawesome.dev/)**: `^7.0.0` - HTML and JSON test report generator.
- **[Babel](https://babeljs.io/)**: `^7.25.4` - JavaScript compiler used to support the latest JavaScript features.
- **[MDX](https://mdxjs.com/)**: `^2.0.0` - Markdown with JSX for enhanced documentation in blog posts and pages.
  
---

## Getting Started

To run this project locally, follow the instructions below.

### Prerequisites

- **Node.js** `>= 18.0.0`
- **Yarn** `>= 1.22.0`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IainDavis/iaindavis.github.io.git
   ```
2. Navigate to the project directory:

   ```bash
   cd iaindavis.github.io
   ```
3. Install the project dependencies using Yarn:


   ```bash
   yarn install
   ```

### Running the Application
You can start the development server locally using the following command:

```bash
yarn start
```
This will run the site locally at http://localhost:3000. Changes to the code will automatically refresh the page.
To build the production version of the site:

```bash
yarn build
```
This will generate a static version of the site in the build directory.

## Testing
The project uses Vitest for testing and Mochawesome for test reports. To run the test suite:

```bash
yarn test
```
To run tests and generate a coverage report:

```bash
yarn test:coverage
```
To view the coverage report, open the coverage/index.html file in your browser.

You can also view the detailed Mochawesome report after running tests:

```bash
yarn mochawesome:report
```

---

## Contributing
Contributions are welcome! If you'd like to contribute, please open an issue or submit a pull request.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit the changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

---

## License
This project is licensed under the MIT License - see the LICENSE file for details.
