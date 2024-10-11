# NASA Space Apps Challenge: Imagine Our Earth

This project was developed for the NASA Space Apps Challenge. It aims to solve the challenge "Imagine Our Earth" by creating an interactive website that connects users with various environmental topics and data.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The project provides an interactive platform where users can explore various environmental topics such as air quality, biodiversity, greenhouse gases, renewable energy, and sea levels. The website aims to educate and engage users with real-time data and interactive content.

## Features

- **Login and Signup**: Users can create an account and log in to access personalized features.
  - Implemented in [`Login`](src/feature/auth/pages/Login.tsx) and [`SignUp`](src/feature/auth/pages/SignUp.tsx).
- **Interactive Quizzes**: Users can take quizzes to test their knowledge on various environmental topics.
  - Implemented in [`Quiz`](src/feature/learn/pages/Quiz.tsx).
- **Educational Content**: Detailed information on various environmental topics.
  - Examples include [`AirQuality`](src/feature/learn/pages/topics/AirQuality.tsx), [`GreenhouseGases`](src/feature/learn/pages/topics/GreenhouseGases.tsx), and [`SeaLevels`](src/feature/learn/pages/topics/SeaLevels.tsx).
- **Interactive Play Section**: Engaging activities related to environmental topics.
  - Implemented in [`Play`](src/pages/play/Play.tsx).

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To run the project locally, use the following command:

```sh
npm run dev
```

## Technologies
- React
- TypeScript
- Tailwind CSS
- Vercel
- Node.js
- Express.js
- MongoDB

## Deployment
The platform is deployed on Vercel and can be accessed [here](nasa-ecochain.vercel.app).

## Contributing

Contributions are welcome! To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit them (`git commit -am 'Add new feature'`).
4. Push the changes to the branch (`git push origin feature/your-feature`).
5. Create a new pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
