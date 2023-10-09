const reviews = [  {
      id: 1,
      name: 'Alex Smith',
      job: 'Ux Designer',
      img: 'person-1.jpg',
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, eveniet!",
    },
    {
      id: 2,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'person-2.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse.",
    },
    {
      id: 3,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'person-3.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle.',
    },
    {
      id: 4,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'person-4.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit.',
    },
    {
      id: 5,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'person-5.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. ',
    },
  ];

const image = document.querySelector("#img");
const name = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;


// window.addEventListener("DOMContentLoaded", function(){
//     const item = reviews[currentItem];
//     img.src = item.img;
//     name.innerHTML = item.name;
//     job.innerHTML = item.job;
//     text.innerHTML = item.text;
// });

const showPerson = function(person){
    const item = reviews[currentItem];
    img.src = item.img;
    name.innerHTML = item.name;
    job.innerHTML = item.job;
    text.innerHTML = item.text;
}

prevBtn.addEventListener("click", function(){
     currentItem --;
     if(currentItem < 0){
        currentItem = reviews.length - 1;
     }
     showPerson(currentItem);
});

nextBtn.addEventListener("click", function(){
    currentItem ++;
    if(currentItem > reviews.length - 1){
       currentItem = 0;
    }
    showPerson(currentItem);
});

