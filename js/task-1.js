const categoriesList = document.getElementById("categories");
const categoriesItems = document.querySelectorAll(".item");

const categoriesCount = categoriesItems.length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
