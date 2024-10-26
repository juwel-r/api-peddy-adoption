const loadCategorys = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/categories"
    );
    const data = await res.json();
    displayCategoryBtn(data.categories);
  } catch (error) {
    console.log("ERROR FOUND: ", error);
  }
};

const loadAllPost = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await res.json();
  displayAllPost(data.pets);
};

const petBtnAction = async (petId, btnName = "") => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await res.json();
  btnName === "adopt"
    ? modalCountDown(data.petData)
    : btnName === "details"
    ? detailsDisplay(data.petData)
    : likedPetsDisplay(data.petData);
};


//Sorting Post
document.getElementById("sortBtn").addEventListener("click", function () {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then(res => res.json())
  .then(data => {
    const pet = data.pets
    pet.sort((a, b) => b.price - a.price );
    console.log(pet);
    displayAllPost(pet);
  })
});


loadCategorys();
loadAllPost();


