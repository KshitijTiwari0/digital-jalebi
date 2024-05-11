# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Getting Started

1. **Prerequisites:**
   * **Node.js and npm (or yarn):** Make sure you have Node.js (version 14.18+ or 16+) and npm (or your preferred package manager like yarn) installed on your system. You can check by running these commands in your terminal:
     ```bash
     node -v
     npm -v 
     ```

2. **Clone the Repository:**
   ```bash
   git clone https://your-repository-url.git
   cd your-project-name
   ```

3. **Install Dependencies:**
   ```bash
   npm install   # or 'yarn install' if using yarn
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev  # or 'yarn dev'
   ```
   This will start Vite's development server. Open your browser and navigate to `http://localhost:5173/` (or the port Vite specifies) to see your application.

## Usage

* **Search:** Type a user's first or last name into the search bar and press "Search" to filter the results.
* **View Details:** Click the "View Details" button on a user card to see more information about that user. Click it again to hide the details.

## Project Structure

* `index.html`: The main entry point of your application.
* `App.jsx`: The root React component that handles fetching user data and rendering the UI.
* `components/`:  
    * `UserData.jsx`:  This component renders individual user cards and manages the display of detailed user information.
* `app.css`: The main stylesheet for the entire application.

## Additional Notes

* This project uses the `dummyjson.com` API to fetch sample user data.
* If you want to customize the UI or add features, feel free to modify the code.
* For production builds, run `npm run build` (or `yarn build`).



**Troubleshooting:**

* **Port Conflicts:** If the default port (5173) is already in use, Vite will automatically choose another available port. Check your terminal for the actual URL to use.
* **Dependency Issues:** If you have trouble installing dependencies, make sure your Node.js and npm versions are up-to-date. You can try deleting the `node_modules` folder and running `npm install` again.

