let menuArray = [];

class Menu {
  constructor(title, texts, price, type, imgUrl) {
    this.title = title;
    this.texts = texts;
    this.price = price;
    this.type = type;
    this.img = imgUrl;
  }
}

menuArray.push(
  new Menu(
    "Paella Special",
    "Paella with shrimp, mussels, pork, chicken, saffron rice, peas, and bell peppers.",
    "30.99",
    "Main Dish",
    "https://www.thespruceeats.com/thmb/AQ5diUdXp9a9bXJMwtSTtG0lpr8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeafoodPaellaWithPorkandChicken-Westend61_GettyImages-b0e7019672484c8a91c250d399d1d163.jpg"
  ),
  new Menu(
    "Crispy Fried Oysters",
    "Fresh oysters, cornmeal batter, eggs, buttermilk, flour, and spices. Served with tartar sauce or rémoulade.",
    "44.99",
    "Appetizers",
    "https://www.thespruceeats.com/thmb/TSY9sgPUTIRHw73LH5lmcWZAipA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-oysters-with-cornmeal-batter-3058714-hero-01-72bfb78fb3f945108b40c7b612c60d93.jpg"
  ),
  new Menu(
    "Shrimp Ceviche",
    "Shrimp cured in lime juice, mixed with tomatoes, onions, cucumbers, cilantro, avocado, and chili peppers.",
    "64.99",
    "Appetizer",
    "https://www.thespruceeats.com/thmb/7o0pqbOlZoVfrd5QrOqdrb0w8iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-ceviche-recipe-5213319-hero-01-8d349ee0591048a588ffac66b3c5870c.jpg"
  ),
  new Menu(
    'Beef Wellington',
    "Tender beef fillet, mushroom duxelles, Parma ham, and puff pastry. Served with red wine reduction.",
    '59.99',
    "Main Dish",
    'https://www.thespruceeats.com/thmb/H1VKmdNz66CPosoP3cwLXU5RtTk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/make-a-classic-beef-wellington-easy-435726-hero-03-1210c31e884044bcb9c1d1475ca818c3.jpg'
  ),
  new Menu(
    'Steak au Poivre',
    "Peppercorn-crusted steak, seared and topped with a creamy cognac and beef stock reduction sauce.",
    '129.99',
    "Dessert",
    'https://www.thespruceeats.com/thmb/9_J6fGTFQz5sQNucdwvFLGtGd2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ClassicFrenchSteakauPoivre-TheSpruce-5c62efe3c9e77c0001662762.jpg'
  ),
  new Menu(
    'Grilled Filet Mignon',
    "Grilled filet mignon, topped with Bearnaise sauce made of egg yolks, butter, vinegar, shallots, and tarragon.",
    '69.99',
    "Main Dish",
    'https://www.thespruceeats.com/thmb/5fYyZdcgUtV_wYmp8OACRXO-x2o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-filet-mignon-with-bearnaise-sauce-3573497-hero-01-9b0abe87c0524a799724135b99b483c8.jpg'
  )
);



function createMenupage() {
    const content = document.getElementById('content');
    content.innerHTML = ""; // Clear existing content
  
    const menuContent = document.createElement("div");
    menuContent.id = "menu-content";
  
    const types = ["Appetizers", "Main Dish", "Dessert"];
  
    types.forEach(type => {
      // Filter items by type
      const filteredItems = menuArray.filter(item => item.type === type);
  
      if (filteredItems.length > 0) {
        // Create section header
        const section = document.createElement("div");
        section.classList.add("menu-section");
    
  
        const dishType = document.createElement("h2");        
        dishType.textContent = type;
        section.appendChild(dishType);

        // Create horizontal line
        const hr = document.createElement("hr");
        section.appendChild(hr);

        // Create menu container for items
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        menuContainer.id = type.toLowerCase().replace(" ", "-");
        section.appendChild(menuContainer);
  
        // Add items under menuContainer
        filteredItems.forEach(item => {
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("menu-item");
  
          itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}" width="200">
            <h3>${item.title}</h3>            
            <p>${item.texts}</p>
            <span class="price"><strong>$${item.price}</strong></span>
          `;
  
          menuContainer.appendChild(itemDiv);
        });
  
        menuContent.appendChild(section);
      }
    });
  
    content.appendChild(menuContent);
  }
 
  
// Export the createMenupage function to be used in other modules
export { createMenupage };