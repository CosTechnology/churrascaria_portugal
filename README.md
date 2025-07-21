# Churrascaria Portugal

Welcome to the Churrascaria Portugal project! This is a responsive landing page for a restaurant that showcases its offerings and provides essential information to visitors.

## Project Structure

The project is organized as follows:

```
churrascaria-portugal
├── public
│   └── index.html          # Main HTML file for the React application
├── src
│   ├── components          # Contains all React components
│   │   └── Header.tsx     # Navigation bar and title
│   │   └── Footer.tsx     # Copyright and additional links
│   │   └── HeroSection.tsx # Prominent landing section
│   │   └── MenuSection.tsx # Menu items offered by the restaurant
│   │   └── ContactSection.tsx # Contact information and inquiry form
│   ├── App.tsx            # Main application component
│   ├── index.tsx          # Entry point for the React application
│   └── styles
│       └── global.css     # Global CSS styles for responsiveness
├── .env                    # Environment variables
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the Churrascaria Portugal project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd churrascaria-portugal
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_RESTAURANT_NAME=Churrascaria Portugal
   ```

4. **Run the application:**
   ```
   npm start
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the landing page.

## Features

- Fully responsive design to ensure a great user experience on all devices.
- Easy to customize by modifying the `.env` file for different restaurant names and settings.
- Modular components for easy maintenance and scalability.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.