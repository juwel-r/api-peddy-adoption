//display Category Buttons
const displayCategoryBtn = (categories) => {
  const categoryBtnContainer = document.getElementById("categoryBtnContainer");
  const spnnierDiv = document.createElement("div");
  const spinner = document.getElementById("spinner");
  spnnierDiv.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;
  spinner.appendChild(spnnierDiv);
  categories.forEach((category) => {
    const btnDiv = document.createElement("div");
    btnDiv.classList = "grid justify-center";
    setTimeout(() => {
      btnDiv.innerHTML = `
        <button onclick="loadByCategory('${category.category}'), activeBtn(${category.id})" id="${category.id}" 
            class="categoryBtn font-bold text-2xl border-2 border-primary/10 rounded-2xl min-w-40 md:min-w-60 py-2 px-3 md:px-6 gap-4 lg:px-10 flex justify-center items-center hover:bg-primary hover:text-white transition duration-300 self-center"
          >
            <!-- onclick="rounded-full bg-primary/15 border-2 border-primary" -->
            <img
              class="h-12 w-12"
              src=${category.category_icon}"
              alt="dog icon"
            />
            <span>${category.category}</span>
          </button>
        `;
      spnnierDiv.innerText = "";
    }, 2000);
    categoryBtnContainer.appendChild(btnDiv);
  });
};

//Display All Post

const displayAllPost = (posts) => {
  const allPostContainer = document.getElementById("petDetails");
  allPostContainer.classList = "";
  allPostContainer.innerText = "";
  const spnnierDiv = document.createElement("div");
  const spinner = document.getElementById("spinner2");
  spnnierDiv.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;
  spinner.appendChild(spnnierDiv);
  setTimeout(() => {
    allPostContainer.classList =
      "p-2 border rounded-xl col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6";
    if (posts.length > 0) {
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.classList = "p-5 border rounded-xl";
        card.innerHTML = `
            <div class="rounded-xl">
        <img class="w-full rounded-xl" src=${
          post.image ? `${post.image} ` : "N/A"
        } />
      </div>
      <div>
        <p class="font-bold text-xl mt-6 mb-2">${post.pet_name}</p>
        <div class="text-[#131313B3]/60 border-b pb-4 mb-4 font-bold">
          <p>
            <i class="fa-solid fa-bread-slice"></i> Breed: ${
              post.breed ? `${post.breed} ` : "N/A"
            }
          </p>
          <p>
            <i class="fa-regular fa-calendar"></i> Birth: ${
              post.date_of_birth ? `${post.date_of_birth} ` : "N/A"
            }
          </p>
          <p>
            <i class="fa-solid fa-venus"></i> Gender: ${
              post.gender ? `${post.gender} ` : "N/A"
            }
          </p>
          <p>
            <i class="fa-solid fa-dollar-sign"></i> Price: ${
              post.price ? `${post.price} ` : "N/A"
            }
          </p>
        </div>
        <div class="flex justify-between gap">
          <button
            onclick="petBtnAction(${post.petId})"
            class="btn bg-white hover:bg-primary transition duration-300 hover:text-white text-primary font-bold text-lg rounded-2xl border border-primary/10"
          >
            <i class="fa-regular fa-thumbs-up"></i>
          </button>
          <button
            id="btn${post.petId}"
            onclick="petBtnAction(${post.petId},'adopt')"
            class="btn bg-white hover:bg-primary transition duration-300 hover:text-white text-primary font-bold text-lg rounded-2xl border border-primary/10"
          >
            Adopt
          </button>
          <button
            onclick="petBtnAction(${post.petId},'details')"
            class="btn bg-white hover:bg-primary transition duration-300 hover:text-white text-primary font-bold text-lg rounded-2xl border border-primary/10"
          >
            Details
          </button>
        </div>
      </div>
        `;
        allPostContainer.appendChild(card);
      });
    } else {
      allPostContainer.classList = "col-span-3";
      const card = document.createElement("div");
      card.classList =
        "p-5 border rounded-xl py-14 bg-orange-50/20 flex flex-col justify-center items-center";
      card.innerHTML = `<div>
        <img src="./images/error.webp" alt="">
      </div>
      <h1 class="text-center text-3xl font-bold mt-8 mb-4">No Information Available</h1>
      <p class="text-gray-500 text-center w-4/6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.</p>`;
      allPostContainer.appendChild(card);
    }
    spnnierDiv.innerText = "";
  }, 2000);
};

//Liked Pets Show
const likedPetsDisplay = (clikedImage) => {
  const likedPetContainer = document.getElementById("likedPet");
  likedPetContainer.classList =
    "grid lg:col-span-1 lg:col-start-4 col-span-3 grid-cols-2 gap-4 p-5 border rounded-xl ";
  const imgDiv = document.createElement("div");
  imgDiv.innerHTML = `<img src=${clikedImage.image} class="rounded-lg" /> `;
  likedPetContainer.appendChild(imgDiv);
};

//Show Modal
const modalCountDown = (id) => {
  document.getElementById(`btn${id.petId}`).innerText = "Adopted";
  document.getElementById(`btn${id.petId}`).setAttribute("disabled", true); //শুধু ${id.petId} এভাবে দিলে ১ হতে ৪ নম্বর বাটন ডিসএবল হয় না, কারণ উপরে ক্যাটাগরি বাটনেও শুধুমাত্র আইডি বসিয়ে কাজ করা হয়েছে। তাই ইউনিক করার জন্য ID এর আগে btn বসিয়ে দিয়েছি যার ফলে েএখন কাজ করছে।
  my_modal_2.showModal();
  const countDown = document.getElementById("modalCountdown");
  let num = 2;
  const interval = setInterval(() => {
    countDown.innerText = num;
    num--;
    if (num < 1) {
      clearInterval(interval);
    }
    setTimeout(() => {
      my_modal_2.close();
    }, 2000);
  }, 1000);
  countDown.innerText = 3;
};

const detailsDisplay = (post) => {
  const petDetailsContainer = document.getElementById("petDetailsContainer");
  petDetailsContainer.innerText = "";
  const div = document.createElement("div");
  div.classList = " bg-white rounded-xl ";
  div.innerHTML = `
     <div>
          <img class="w-full rounded-xl" src=${post.image} alt="" />
        </div>
        <h2 class="text-2xl font-bold my-3">${post.pet_name} </h2>
        <div class="grid justify-start">
          <div class="text-[#131313B3]/60 pb-4 mb-6 font-bold grid grid-cols-2 gap-x-6">
            <p><i class="fa-solid fa-bread-slice"></i> Breed: ${
              post.breed ? `${post.breed} ` : "N/A"
            } </p>
            <p>
              <i class="fa-regular fa-calendar"></i> Birth: ${
                post.date_of_birth ? `${post.date_of_birth} ` : "N/A"
              }
            </p>
            <p><i class="fa-solid fa-venus"></i> Gender:  ${
              post.gender ? `${post.gender} ` : "N/A"
            }</p>
            <p>
              <i class="fa-solid fa-dollar-sign"></i> Price: ${
                post.price ? `${post.price} ` : "N/A"
              }
            </p>
            <p>
              <i class="fa-solid fa-syringe"></i> Vaccinated status: ${
                post.vaccinated_status ? `${post.vaccinated_status} ` : "N/A"
              }
            </p>
          </div>
        </div>
        <hr />
        <div>
          <h2 class="font-bold my-2">Details Information</h2>
          <p>${post.pet_details}</p>
        </div>
        <div class="modal-action">
          <form method="dialog" class="w-full">
            <button class="btn bg-primary/20 hover:bg-primary transition duration-300 hover:text-white text-primary font-bold text-lg rounded-2xl border border-primary/10 w-full">Close</button>
          </form>
        </div>
        `;
  petDetailsContainer.appendChild(div);
  my_modal_3.showModal();
};


const loadByCategory = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${category}`
  );
  const data = await res.json();
  displayAllPost(data.data);
};

const activeBtn = (btnId) => {
  const buttons = document.getElementsByClassName("categoryBtn");
  for (let button of buttons) {
    button.classList =
      "categoryBtn font-bold text-2xl border-2 border-primary/10 rounded-2xl min-w-40 md:min-w-60 py-2 px-3 md:px-6   gap-4 lg:px-10 flex justify-center items-center hover:bg-primary hover:text-white transition duration-300";
  }
  document.getElementById(btnId).classList =
    "categoryBtn font-bold text-2xl border-2 border-primary/10 min-w-40 md:min-w-60 py-2 px-3 md:px-6   gap-4 lg:px-10 flex justify-center items-center hover:bg-primary hover:text-white transition duration-300 rounded-full bg-primary/25 border-2 border-primary/40";
};
