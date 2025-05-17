markdown
 My Fridge

A React web app that helps users select ingredients from their fridge and find possible recipes they can cook. Features include:

- Ingredient selection with easy add/remove
- Dynamic recipe list based on selected ingredients
- Detailed recipe view
- Animated fridge-loading screen while app loads
- Floating background food icons for visual appeal

---

 Demo

![Loading Animation Demo](./assets/fridge-loading-demo.gif)  
*Replace this with an actual demo GIF or screenshot*

---

 Features

- Interactive ingredient selector
- Live recipe filtering
- Smooth loading animation using Lottie
- Responsive design
- Accessible buttons and labels

---

 Installation

1. Clone the repository:

bash
git clone https://github.com/yourusername/my-fridge.git
cd my-fridge


2. Install dependencies:

bash
npm install


3. Run the app locally:

bash
npm start


The app will be available at http://localhost:3000

---

 Usage

* On load, see the fridge loading animation with floating background icons.
* Select ingredients you have in your fridge.
* View possible recipes based on selected ingredients.
* Click a recipe to see details.
* Remove ingredients using the remove buttons.

---

 Dependencies

* React
* Lottie React (lottie-react)
* Other dependencies listed in package.json

---

 Project Structure


my-fridge/
├── src/
│   ├── assets/              JSON animation files, images
│   ├── components/          IngredientSelector, RecipeList, RecipeDetails
│   ├── data/                Ingredients and recipes JSON data
│   ├── styles.css           Styles
│   └── App.js               Main React component
├── public/
├── package.json
└── README.md


---

 Customization

* Replace the fridge loading animation JSON file at src/assets/fridge-loading.json with your own Lottie animation if desired.
* Modify data/ingredients.js and data/recipes.js to add your own ingredients and recipes.
* Update floating background icons in App.js as needed.

---

 Author

Ritesh RC
[Email](mailto:riteshchakramani123@gmail.com)

---

 License

This project is licensed under the MIT License.



---


