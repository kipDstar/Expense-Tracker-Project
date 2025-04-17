# Expense Tracker

A simple React-based expense tracker application built with Vite. This app allows users to manage their expenses by adding, viewing, and filtering expenses in a responsive and user-friendly interface.

## Features

- **View Expenses**: Displays a table of all expenses with details such as description, category, and amount.
- **Add Expenses**: A form to add new expenses dynamically.
- **Search Expenses**: A search bar to filter expenses by description or category.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Screenshot

![App Screenshot](<Screenshot from 2025-04-13 15-37-33.png>)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kipDstar/expense-tracker.git
   cd expense-tracker
# Expense Tracker

A simple React-based expense tracker application built with Vite. This app allows users to manage their expenses by adding, viewing, and filtering expenses in a responsive and user-friendly interface.

## Features

- **View Expenses**: Displays a table of all expenses with details such as description, category, and amount.
- **Add Expenses**: A form to add new expenses dynamically.
- **Search Expenses**: A search bar to filter expenses by description or category.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Screenshot

![App Screenshot](./public/screenshot.png)  

## Getting Started

Follow these instructions to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   
   git clone https://github.com/<your-username>/expense-tracker.git
   cd expense-tracker
   

2. Install dependencies:
   
   npm install
  

3. Start the development server:
  
   npm run dev
   

4. Open the app in your browser:
  
   http://localhost:5173
   

## Usage

1. **Add an Expense**: Fill out the form with a description, category, and amount, then click "Submit."
2. **Search Expenses**: Use the search bar to filter expenses by description or category.
3. **View Expenses**: All expenses are displayed in a table format showing the expense name and description.

## Project Structure
expense-tracker/
├── public/                 # Static assets (e.g., screenshots, vite.svg)
├── src/
│   ├── components/         # React components
│   │   ├── ExpensesTable.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── SearchBar.jsx
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   ├── App.css             # Global styles
├── README.md               # Project documentation
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
```

## Deployment

This app can be deployed on platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Cloudflare Pages](https://pages.cloudflare.com/). Follow their documentation for deployment instructions.

### Example Deployment Steps (Vercel)

1. Install the Vercel CLI:
   
   npm install -g vercel
  

2. Deploy the app:
   
   vercel
   

3. Follow the prompts to complete the deployment.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Babel](https://babeljs.io/)
- [SWC](https://swc.rs/)
