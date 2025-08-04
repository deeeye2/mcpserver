# README.md

# Query Tool UI

This project is a React application built with Vite that allows users to interact with various tools by submitting questions. The main component, `QueryToolUI`, provides a user-friendly interface for selecting a tool, entering a question, and viewing the response.

## Features

- Select a tool from a dropdown (Math, Weather, Docs)
- Input questions in a multiline textarea
- Send a POST request to a backend service
- Display the response in a styled output box

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd query-tool-ui
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. Select a tool from the dropdown menu.
2. Enter your question in the textarea.
3. Click the "Submit" button to send your question.
4. The response will be displayed below the input area.

## License

This project is licensed under the MIT License.
