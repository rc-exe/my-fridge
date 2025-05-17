export const recipes = [
  // Single ingredient recipes
  {
    id: 1,
    name: 'Boiled Egg',
    ingredients: [6], // Eggs
    appliances: ['Stove', 'Pot'],
    instructions: [
      'Place eggs in a pot and cover with water',
      'Bring water to a boil over medium heat',
      'Boil eggs for 8-10 minutes',
      'Cool and peel before serving'
    ],
    prepTime: '2 minutes',
    cookTime: '10 minutes'
  },
  {
    id: 2,
    name: 'Boiled Potato',
    ingredients: [18], // Potatoes
    appliances: ['Stove', 'Pot'],
    instructions: [
      'Peel potatoes and cut into chunks',
      'Boil potatoes in salted water until tender (15-20 min)',
      'Drain and serve with salt or spices'
    ],
    prepTime: '5 minutes',
    cookTime: '20 minutes'
  },

  // Two ingredient dishes
  {
    id: 3,
    name: 'Paneer Butter Fry',
    ingredients: [3, 2], // Paneer, Butter
    appliances: ['Stove', 'Pan'],
    instructions: [
      'Heat butter in a pan',
      'Add paneer cubes and fry until golden',
      'Serve hot as a snack or side dish'
    ],
    prepTime: '5 minutes',
    cookTime: '10 minutes'
  },
  {
    id: 4,
    name: 'Masala Omelette',
    ingredients: [6, 19], // Eggs, Green Chillies
    appliances: ['Stove', 'Pan'],
    instructions: [
      'Beat eggs with chopped green chillies and salt',
      'Heat pan and pour egg mixture',
      'Cook until set and golden on both sides',
      'Serve hot'
    ],
    prepTime: '5 minutes',
    cookTime: '5 minutes'
  },

  // Popular multi-ingredient Indian dishes
  {
    id: 5,
    name: 'Chicken Curry',
    ingredients: [9, 14, 15, 16, 17, 52, 53, 54, 70, 76], 
    // Chicken, Tomatoes, Onions, Garlic, Ginger, Turmeric, Red Chilli Powder, Cumin Seeds, Sunflower Oil, Salt
    appliances: ['Stove', 'Pan'],
    instructions: [
      'Heat oil in a pan',
      'Add cumin seeds and let them splutter',
      'Add chopped onions, garlic, and ginger; sauté until golden',
      'Add chopped tomatoes and cook until soft',
      'Add turmeric, red chilli powder, and salt',
      'Add chicken pieces and cook until sealed',
      'Add water, cover, and simmer until chicken is cooked',
      'Garnish with coriander leaves before serving'
    ],
    prepTime: '15 minutes',
    cookTime: '40 minutes'
  },
  {
    id: 6,
    name: 'Palak Paneer',
    ingredients: [3, 27, 15, 16, 17, 52, 53, 54, 70, 76],
    // Paneer, Spinach, Onions, Garlic, Ginger, Turmeric, Red Chilli Powder, Cumin Seeds, Sunflower Oil, Salt
    appliances: ['Stove', 'Blender', 'Pan'],
    instructions: [
      'Blanch spinach leaves and blend to puree',
      'Heat oil in a pan, add cumin seeds',
      'Add chopped onions, garlic, and ginger; sauté',
      'Add turmeric, red chilli powder, and salt',
      'Add spinach puree and cook for 5-7 minutes',
      'Add paneer cubes and simmer for 5 minutes',
      'Serve hot with roti or rice'
    ],
    prepTime: '15 minutes',
    cookTime: '20 minutes'
  },
  {
    id: 7,
    name: 'Aloo Gobi',
    ingredients: [18, 24, 14, 15, 16, 52, 53, 54, 70, 76],
    // Potatoes, Cauliflower, Tomatoes, Onions, Garlic, Turmeric, Red Chilli Powder, Cumin Seeds, Sunflower Oil, Salt
    appliances: ['Stove', 'Pan'],
    instructions: [
      'Heat oil in pan, add cumin seeds',
      'Add chopped onions and garlic; sauté',
      'Add tomatoes and cook until soft',
      'Add turmeric, red chilli powder, and salt',
      'Add potato and cauliflower pieces',
      'Cover and cook on low heat until tender',
      'Stir occasionally and garnish with coriander'
    ],
    prepTime: '10 minutes',
    cookTime: '30 minutes'
  },
  {
    id: 8,
    name: 'Besan Chilla',
    ingredients: [42, 19, 15, 76], // Besan, Green Chillies, Onions, Salt
    appliances: ['Stove', 'Pan'],
    instructions: [
      'Mix besan with water to make a smooth batter',
      'Add chopped onions, green chillies, and salt',
      'Heat pan and pour batter to make pancakes',
      'Cook both sides until golden brown',
      'Serve with chutney or ketchup'
    ],
    prepTime: '10 minutes',
    cookTime: '10 minutes'
  },

  // Sweet dishes
  {
    id: 9,
    name: 'Kheer',
    ingredients: [1, 8, 95, 97, 98, 99], 
    // Milk, Condensed Milk, Honey, Almonds, Cashews, Raisins
    appliances: ['Stove', 'Pot'],
    instructions: [
      'Boil milk and condensed milk together',
      'Add honey and simmer on low heat',
      'Add chopped almonds, cashews, and raisins',
      'Cook until thickened',
      'Serve warm or chilled'
    ],
    prepTime: '5 minutes',
    cookTime: '40 minutes'
  },
  {
    id: 10,
    name: 'Sweetened Yogurt',
    ingredients: [5, 77], // Yogurt, Sugar
    appliances: ['None'],
    instructions: [
      'Mix yogurt with sugar until smooth',
      'Chill in refrigerator',
      'Serve as dessert or side dish'
    ],
    prepTime: '5 minutes',
    cookTime: 'None'
  },
  {
  id: 11,
  name: 'Rasam',
  ingredients: [14, 15, 16, 17, 18, 19], 
  // Tamarind, Tomato, Mustard Seeds, Curry Leaves, Garlic, Coriander
  appliances: ['Pot'],
  instructions: [
    'Soak tamarind in warm water and extract juice',
    'Boil tomatoes and mash',
    'Add tamarind juice, tomatoes, and spices to pot',
    'Add mustard seeds, curry leaves, and garlic',
    'Simmer for 15 minutes',
    'Garnish with coriander and serve hot'
  ],
  prepTime: '10 minutes',
  cookTime: '20 minutes'
},
{
  id: 12,
  name: 'Medu Vada',
  ingredients: [3, 20, 21, 22], 
  // Urad Dal, Black Pepper, Curry Leaves, Green Chilies
  appliances: ['Deep Fryer', 'Bowl'],
  instructions: [
    'Soak urad dal for 4 hours and grind to smooth batter',
    'Add chopped green chilies, curry leaves, and black pepper',
    'Shape batter into donut-shaped vadas',
    'Deep fry until golden and crisp',
    'Drain excess oil and serve hot with chutney and sambar'
  ],
  prepTime: '4 hours 15 minutes',
  cookTime: '20 minutes'
},
{
  id: 13,
  name: 'Idli',
  ingredients: [2, 3, 23], 
  // Rice, Urad Dal, Fenugreek Seeds
  appliances: ['Idli Steamer', 'Mixer'],
  instructions: [
    'Soak rice, urad dal, and fenugreek seeds separately overnight',
    'Grind and mix to form batter',
    'Ferment batter for 8-10 hours',
    'Pour batter into idli molds and steam for 10-15 minutes',
    'Remove and serve with chutney and sambar'
  ],
  prepTime: '12 hours',
  cookTime: '15 minutes'
},
{
  id: 14,
  name: 'Sambar',
  ingredients: [24, 25, 26, 27, 28], 
  // Toor Dal, Tamarind, Mustard Seeds, Curry Leaves, Vegetables
  appliances: ['Pressure Cooker', 'Pot'],
  instructions: [
    'Cook toor dal in pressure cooker until soft',
    'Prepare tamarind extract',
    'Cook vegetables with tamarind water and spices',
    'Add cooked dal and simmer',
    'Temper mustard seeds and curry leaves and add to sambar',
    'Serve hot with rice or idli'
  ],
  prepTime: '15 minutes',
  cookTime: '40 minutes'
},
{
  id: 15,
  name: 'Upma',
  ingredients: [29, 30, 31, 32], 
  // Semolina, Mustard Seeds, Curry Leaves, Green Chilies
  appliances: ['Pan'],
  instructions: [
    'Dry roast semolina until light brown',
    'Heat oil and add mustard seeds, curry leaves, and green chilies',
    'Add water and bring to boil',
    'Slowly add semolina while stirring to avoid lumps',
    'Cook until water is absorbed and semolina is cooked',
    'Serve hot with chutney or sambar'
  ],
  prepTime: '5 minutes',
  cookTime: '15 minutes'
},
{
  id: 16,
  name: 'Pongal',
  ingredients: [2, 33, 34, 35], 
  // Rice, Moong Dal, Black Pepper, Ginger
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Roast moong dal lightly',
    'Cook rice and moong dal together in pressure cooker',
    'Heat ghee, add black pepper and ginger, and sauté',
    'Mix cooked rice and dal with the tempered spices',
    'Garnish with coriander and serve hot'
  ],
  prepTime: '10 minutes',
  cookTime: '30 minutes'
},
{
  id: 17,
  name: 'Chicken Curry',
  ingredients: [36, 37, 38, 39, 40], 
  // Chicken, Onion, Tomato, Garlic, Spices
  appliances: ['Pot', 'Stove'],
  instructions: [
    'Sauté onions and garlic until golden',
    'Add tomatoes and cook until soft',
    'Add chicken pieces and spices',
    'Cook covered on low heat until chicken is tender',
    'Garnish with coriander and serve hot'
  ],
  prepTime: '15 minutes',
  cookTime: '45 minutes'
},
{
  id: 18,
  name: 'Vegetable Biryani',
  ingredients: [2, 41, 42, 43, 44, 45], 
  // Rice, Mixed Vegetables, Spices, Yogurt, Onions, Coriander
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Sauté onions and spices in oil',
    'Add vegetables and cook slightly',
    'Add soaked rice and yogurt',
    'Pressure cook until rice and vegetables are tender',
    'Garnish with fried onions and coriander'
  ],
  prepTime: '20 minutes',
  cookTime: '40 minutes'
},
{
  id: 19,
  name: 'Paneer Butter Masala',
  ingredients: [46, 47, 48, 49, 50], 
  // Paneer, Butter, Tomato, Cream, Spices
  appliances: ['Pan', 'Stove'],
  instructions: [
    'Sauté onions and tomatoes with spices',
    'Add butter and cream',
    'Add paneer cubes and simmer',
    'Cook until thickened',
    'Serve hot with naan or rice'
  ],
  prepTime: '10 minutes',
  cookTime: '25 minutes'
},
{
  id: 20,
  name: 'Chole',
  ingredients: [51, 52, 53, 54, 55], 
  // Chickpeas, Onion, Tomato, Spices, Ginger
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Soak chickpeas overnight and pressure cook until soft',
    'Sauté onions, ginger, and spices',
    'Add tomatoes and cook until soft',
    'Add chickpeas and simmer to thicken',
    'Serve hot with bhature or rice'
  ],
  prepTime: '12 hours',
  cookTime: '40 minutes'
},
{
  id: 21,
  name: 'Gobi Manchurian',
  ingredients: [13, 4, 7, 16, 17, 15, 18, 19, 20, 21, 22, 23], 
  // Cauliflower, All-purpose Flour, Corn Flour, Garlic, Ginger, Green Chillies, Soy Sauce, Tomato Ketchup, Vinegar, Spring Onion, Salt, Oil
  appliances: ['Deep Fryer', 'Pan'],
  instructions: [
    'Cut cauliflower into florets and coat with all-purpose flour and corn flour batter',
    'Deep fry until crispy and set aside',
    'In a pan, sauté garlic, ginger, and green chillies',
    'Add soy sauce, tomato ketchup, vinegar, and salt; mix well',
    'Toss fried cauliflower in the sauce',
    'Garnish with spring onion and serve hot'
  ],
  prepTime: '15 minutes',
  cookTime: '25 minutes'
},
{
  id: 22,
  name: 'Matar Paneer',
  ingredients: [26, 10, 5, 6, 16, 4, 8, 9, 11, 12, 22, 23], 
  // Paneer, Green Peas, Onions, Tomatoes, Ginger, Garlic, Turmeric Powder, Red Chilli Powder, Garam Masala, Coriander Powder, Salt, Oil
  appliances: ['Pan'],
  instructions: [
    'Sauté onions, ginger, and garlic in oil',
    'Add tomatoes and cook until soft',
    'Add turmeric, red chilli powder, coriander powder, garam masala, and salt',
    'Add green peas and paneer cubes',
    'Cook until peas are tender and paneer is coated with spices',
    'Serve hot with rice or roti'
  ],
  prepTime: '10 minutes',
  cookTime: '20 minutes'
},
{
  id: 23,
  name: 'Dal Makhani',
  ingredients: [1, 2, 6, 25, 24, 16, 4, 8, 11, 12, 22, 23], 
  // Whole Black Gram (Urad Dal), Kidney Beans (Rajma), Tomatoes, Cream, Butter, Ginger, Garlic, Red Chilli Powder, Garam Masala, Salt, Oil
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Soak urad dal and rajma overnight, pressure cook until soft',
    'In a pan, sauté ginger and garlic in butter',
    'Add tomatoes, red chilli powder, and garam masala; cook till oil separates',
    'Add cooked dal and rajma; simmer for 30 mins',
    'Stir in cream and cook for another 5 minutes',
    'Serve hot with naan or rice'
  ],
  prepTime: '12 hours',
  cookTime: '1 hour'
},
{
  id: 24,
  name: 'Bhindi Masala',
  ingredients: [9, 5, 6, 8, 11, 12, 14, 22, 23], 
  // Okra (Bhindi), Onions, Tomatoes, Turmeric Powder, Red Chilli Powder, Coriander Powder, Cumin Seeds, Salt, Oil
  appliances: ['Pan'],
  instructions: [
    'Wash and dry okra, then chop',
    'Heat oil, add cumin seeds and let them splutter',
    'Add onions and sauté until golden',
    'Add tomatoes, turmeric, red chilli, coriander powder, and salt; cook until oil separates',
    'Add okra and cook on low flame until tender and dry',
    'Serve hot with roti or rice'
  ],
  prepTime: '10 minutes',
  cookTime: '25 minutes'
},
{
  id: 25,
  name: 'Chicken Biryani',
  ingredients: [7, 3, 26, 5, 6, 16, 4, 15, 27, 28, 29, 30, 22, 23], 
  // Basmati Rice, Chicken, Yogurt, Onions, Tomatoes, Ginger, Garlic, Green Chillies, Biryani Masala, Saffron, Coriander, Mint, Salt, Oil
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Marinate chicken with yogurt, ginger, garlic, green chillies, biryani masala, salt, and lemon juice',
    'Sauté onions and tomatoes in oil until golden',
    'Add marinated chicken and cook until half done',
    'Parboil basmati rice with saffron',
    'Layer chicken and rice in a pot, garnish with coriander and mint',
    'Cook on low flame (dum) for 25-30 minutes',
    'Serve hot with raita'
  ],
  prepTime: '1 hour',
  cookTime: '1 hour'
},
{
  id: 26,
  name: 'Tandoori Chicken',
  ingredients: [26, 3, 16, 4, 8, 11, 12, 22, 23, 23], 
  // Chicken, Yogurt, Ginger, Garlic, Red Chilli Powder, Turmeric Powder, Garam Masala, Lemon Juice, Salt, Oil
  appliances: ['Oven', 'Grill'],
  instructions: [
    'Marinate chicken with yogurt, ginger, garlic, red chilli powder, turmeric, garam masala, lemon juice, salt, and oil',
    'Let it rest for at least 2 hours',
    'Cook in oven or grill until cooked through and charred',
    'Serve hot with sliced onions and lemon wedges'
  ],
  prepTime: '2 hours',
  cookTime: '40 minutes'
},
{
  id: 27,
  name: 'Aloo Gobi',
  ingredients: [20, 13, 5, 6, 8, 11, 12, 14, 22, 23], 
  // Potatoes, Cauliflower, Onions, Tomatoes, Turmeric Powder, Red Chilli Powder, Coriander Powder, Cumin Seeds, Salt, Oil
  appliances: ['Pan'],
  instructions: [
    'Heat oil and add cumin seeds until they splutter',
    'Add onions and sauté until golden',
    'Add tomatoes, turmeric, red chilli powder, coriander powder, and salt',
    'Add chopped potatoes and cauliflower',
    'Cover and cook on medium heat until vegetables are tender',
    'Serve hot with roti or rice'
  ],
  prepTime: '10 minutes',
  cookTime: '30 minutes'
},
{
  id: 28,
  name: 'Samosa',
  ingredients: [7, 20, 10, 15, 16, 14, 12, 9, 11, 22, 23], 
  // Wheat Flour, Potatoes, Green Peas, Green Chillies, Ginger, Cumin Seeds, Coriander Powder, Garam Masala, Salt, Oil
  appliances: ['Deep Fryer'],
  instructions: [
    'Prepare dough with wheat flour and water; rest for 30 minutes',
    'Boil potatoes and mash with cooked green peas',
    'Sauté cumin seeds, green chillies, and ginger; add to potato mixture with spices',
    'Roll dough into small circles, fill with potato mixture and fold into samosas',
    'Deep fry samosas until golden and crisp',
    'Serve hot with chutney'
  ],
  prepTime: '45 minutes',
  cookTime: '20 minutes'
},
{
  id: 29,
  name: 'Butter Naan',
  ingredients: [4, 31, 32, 22, 23, 33, 34], 
  // All-purpose Flour, Yeast, Sugar, Salt, Butter, Yogurt, Water
  appliances: ['Oven', 'Tandoor', 'Pan'],
  instructions: [
    'Activate yeast with warm water and sugar',
    'Mix all-purpose flour, salt, yogurt, and yeast mixture to form dough',
    'Let dough rest for 1-2 hours',
    'Roll out dough balls and cook in tandoor or hot pan',
    'Brush hot naan with butter',
    'Serve warm'
  ],
  prepTime: '2 hours',
  cookTime: '15 minutes'
},
{
  id: 30,
  name: 'Pani Puri',
  ingredients: [35, 7, 20, 36, 37, 38, 39, 40, 41, 42], 
  // Semolina, Wheat Flour, Potatoes, Tamarind, Mint, Coriander, Black Salt, Chaat Masala, Spices, Water
  appliances: ['Pan'],
  instructions: [
    'Prepare dough with semolina and wheat flour, roll into small puris and deep fry until puffed and crispy',
    'Prepare spicy and tangy water with tamarind, mint, coriander, black salt, and spices',
    'Make filling with boiled potatoes and chickpeas',
    'Crack open puris, fill with potato mixture and pour flavored water',
    'Serve immediately'
  ],
  prepTime: '1 hour',
  cookTime: '30 minutes'
},
{
  id: 31,
  name: 'Rajma Masala',
  ingredients: [2, 5, 6, 8, 16, 4, 11, 12, 9, 22, 23], 
  // Kidney Beans, Onions, Tomatoes, Ginger, Garlic, Turmeric Powder, Red Chilli Powder, Garam Masala, Salt, Oil
  appliances: ['Pressure Cooker', 'Pan'],
  instructions: [
    'Soak rajma overnight and pressure cook until soft',
    'Sauté onions, ginger, and garlic in oil',
    'Add tomatoes, turmeric, red chilli powder, garam masala, and salt',
    'Add cooked rajma and simmer to thicken gravy',
    'Serve hot with rice or roti'
  ],
  prepTime: '12 hours',
  cookTime: '1 hour'
},


];
