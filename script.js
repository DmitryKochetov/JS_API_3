const photoContainer = document.getElementById("photo-container");
const likeButton = document.getElementById("likeBtn");
const likesCounterBox = document.getElementById("likesCounter");
let page = 1;
likesCounter = 0;

async function fetchPhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?page=${page}&per_page=9&client_id=UWIaWF0QdC0tUOtjl5Vcda7i4NYk9wORzYpe2487W7c`
    );
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Ошибка при загрузке фотографий:", error);
    return [];
  }
}

async function loadMorePhotos() {
  renderPhotoList(await fetchPhotos());
}

likeButton.addEventListener("click", (e) => {
    likesCounter++;
    likesCounterBox.textContent = "лайков: " + likesCounter;
});

function renderPhotoList(item) {
  console.log(item);
  let photoList = `<h2>Фотограф ${item.user.name}</h2>
                <div>
                    <img class = "Pic" src="${item.urls.small}" alt="some picture" />
                </div>
                `;
  photoContainer.innerHTML = photoList;
}

//   window.addEventListener("scroll", () => {
//     // создание бесконечной прокрутки
//     if (
//       window.innerHeight + Math.round(window.scrollY) >=
//       document.body.offsetHeight
//     ) {
//       page++;
//       loadMorePhotos();
//     }

//   });

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();
