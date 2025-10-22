

const category = [
    {
        title: "Для женщин",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/woman.png"
    },
    {
        title: "Красота",
        count: "574 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc2.png"
    },
    {
        title: "Бытовая техника",
        count: "574 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc3.png"
    },
    {
        title: "Для мужчин",
        count: "574 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc4.png"
    },
    {
        title: "Аксессуары",
        count: "684 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc5.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc6.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc7.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc8.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/img9.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc10.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc11.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc12.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc13.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc14.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc15.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc16.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc17.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc18.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc19.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/moc21.png"
    },
    {
        title: "Электроника",
        count: "4 147 объявлений",
        iconColor: "bg-blue-100 text-blue-600",
        img: "./img/mooc20.png"
    }
];

const container = document.getElementById("cardContainer");

let html = "";

category.forEach(item => {
    html += `
    <div class="w-[400px] mb-[20px] bg-white shadow-sm rounded-2xl px-4 py-3 hover:shadow-md transition border-current flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div>
          <img src="${item.img}" alt="rasm" class="ml-[-20px] w-30 h-30 object-contain">
        </div>
        <div>
          <h3 class="text-gray-900 font-medium text-[15px]">${item.title}</h3>
          <p class="text-gray-500 text-sm">${item.count}</p>
        </div>
      </div>
      <img src="./img/chevron.png" alt="rasm">
    </div>
  `;
});

container.innerHTML = html;

const likeBtn = document.getElementById('likeBtn');
const likeIcon = document.getElementById('likeIcon');

const likeImgs = document.querySelectorAll('.likeImg'); // hamma yuraklarni oladi

likeImgs.forEach(img => {
    let liked = false; // har bir yurakning o‘z holati bo‘ladi

    img.addEventListener('click', () => {
        liked = !liked;
        img.src = liked ? './img/like3.png' : './img/like2.png';
    });
});


const loadMoreBtn = document.getElementById('loadMoreBtn');
const extraRow = document.getElementById('extraRow');

loadMoreBtn.addEventListener('click', () => {
    const arrow = loadMoreBtn.querySelector('span img');
    if (extraRow.classList.contains('hidden')) {
        extraRow.classList.remove('hidden');
        arrow.style.transform = 'rotate(180deg)';
    } else {
        extraRow.classList.add('hidden');
        arrow.style.transform = 'rotate(0deg)';
    }
});
