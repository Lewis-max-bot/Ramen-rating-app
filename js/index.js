const ramens = [
    { id: 1, name: "meal 1", restaurant: "Ichiran", image: "../../images/meal 1.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "meal 2", restaurant: "Menya", image: "../../images/meal 2.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "meal 3", restaurant: "Ramen-ya", image: "../../images/meal 3.jpg" },
    { id: 4, name: "meal 4", restaurant: "treya", image: "../../images/meal 4.jpg"},
    { id: 5, name: "meal 5", restaurant: "chevron", image: "../../images/meal 5.jpg"}
];      

function displayRamens(){
    const menu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
}

 function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = `${ramen.rating}/10`;
    document.getElementById("ramen-comment").textContent = ramen.comment;
 }

 function addSubmitListener(){
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (event) => {
     event.preventDefault();

     const newRamen = {
        name: document.getElementById("new-name").value,
        restaurant: document.getElementById("new-restaurant").value,
        image: document.getElementById("new-image").value,
        rating: document.getElementById("new-rating").value,
        comment: document.getElementById("new-comment").value, rating: 5, comment: "Savory and rich!"
     };

     ramens.push(newRamen);
     displaySingleRamenInMenu(newRamen);
     form.reset();
    });
 }
  function displaySingleRamenInMenu (ramen) {
    const menu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;

    img.addEventListener("click", () => handleClick(ramen));
    menu.appendChild(img);
  }

  function main(){
    displayRamens();
    addSubmitListener();
  }

  document.addEventListener("DOMContentLoaded", main);