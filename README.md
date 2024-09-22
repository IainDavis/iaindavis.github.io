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
<!-- - **About Me**: Background, skills, and professional journey. We'll add this back once there's something more substantial in place here. -->
- **Projects**: A showcase of personal and open-source projects.
- **Blog**: A collection of blog posts covering a variety of development topics.
<!-- - **Resume**: Downloadable resume for prospective clients or employers. Ditto this. No resume yet. -->
  
---

## Technologies Used

The site leverages the following technologies and libraries:

- **[TypeScript](https://www.typescriptlang.org/)**: `5.2.2` - Typed JavaScript to improve code reliability and developer productivity.
- **[Babel](https://babeljs.io/)**: `7.x` - A JavaScript compiler with multiple packages from the 7.x family for transforming modern JavaScript.
- **[MDX](https://mdxjs.com/)**: `3.x` - Markdown with JSX for enhanced documentation in blog posts and pages.

### Main Site
- **[Docusaurus](https://docusaurus.io/)**: `3.5.2` - Static site generator used for documentation and blog management.
- **[Webpack]()**: `5.x` - Module bundler for JavaScript applications

### Storybook Showcase
- **[Storybook](https://storybook.js.org/)**: `8.3.1` - Development environment for building and documenting UI components in isolation.

### Testing & Reports
- **[React](https://reactjs.org/)**: `18.x` - A declarative JavaScript library for building user interfaces.
- **[Vitest](https://vitest.dev/)**: `2.1.1` - Unit testing framework integrated with Vite for fast, modern testing.
- **[Istanbul](https://istanbul.js.org/)**: `3.1.7` - A code coverage tool for JavaScript that tracks statement, branch, and function coverage.
- **[XUnit-Viewer](https://www.npmjs.com/package/xunit-viewer)**: `10.6.1` - A tool that converts XUnit and JUnit XML test results into readable HTML reports.
  
---

## Getting Started

To run this project locally, follow the instructions below.

### Prerequisites

- **Node.js** `>= 18.0.0`
- **Yarn** `>= 1.22.0` (preferred)

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
