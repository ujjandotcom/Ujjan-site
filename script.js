const skills = ["Full Stack Development", "LangGraph AI Agents", "Wordpress Development", "Graphic Designing", "Web Designing", "Logo Designing", "Shopify & Wix", "Blockchain Development", "Generative AI", "App Development", "Metaverse", "Game Development"];

const Web_Design = [`<img src="files/data/WD/01.png">`, `<img src="files/data/WD/02.png">`, `<img src="files/data/WD/03.png">`, `<img src="files/data/WD/04.png">`, `<img src="files/data/WD/05.png">`];

const App_Design = [`<img src="files/data/AD/01.png">`,`<img src="files/data/AD/02.png">`,`<img src="files/data/AD/03.png">`,`<img src="files/data/AD/04.png">`,`<img src="files/data/AD/05.png">`,`<img src="files/data/AD/06.png">`];

const Development = [`<img src="files/data/DV/01.png">`];

const Graphic_Design = [`<img src="files/data/GD/01.png">`,`<img src="files/data/GD/02.png">`,`<img src="files/data/GD/03.png">`];

const Wordpress = [];

const All = Web_Design.concat(App_Design, Development, Graphic_Design, Wordpress);



for (let i = 0; i < skills.length; i++) {
  document.getElementsByClassName("skill")[i].lastElementChild.innerHTML = skills[i];
}



const Category = (name) => {
  document.querySelector(".selected-category").classList.remove("selected-category");
  document.getElementById(name.toString()).classList.add("selected-category");
  pg(1);
};

const pganimation = () => {
  document.getElementById("categories-data").style.animation = "none";
  document.getElementById("categories-data").style.animation = "switchpgs 0.5s ease-in-out";
  setTimeout(() => {
    document.getElementById("categories-data").style.animation = "none";
  }, 500);
};

const pg = (num) => {
  pganimation();
  document.querySelector(".page-selected").classList.remove("page-selected");
  document.getElementById("pg" + num).classList.add("page-selected");
  let arr = document.querySelector(".selected-category").getAttribute("id");
  pgcd(arr, num);
};


const pgcd = (array, pg) => {
  switch (array) {
    case "A":
      cc(All, pg);
      break;
    case "WD":
      cc(Web_Design, pg);
      break;
    case "AD":
      cc(App_Design, pg);
      break;
    case "DV":
      cc(Development, pg);
      break;
    case "GD":
      cc(Graphic_Design, pg);
      break;
    case "WP":
      cc(Wordpress, pg);
      break;
  }
};

const cc = (array, pg) => {
  if (pg == 1) {
    let i = 0;
    for (let j = 0; j < 6; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++;
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++;
      }
    }
  } else if (pg == 2) {
    let i = 0;
    for (let j = 6; j < 12; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++;
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++;
      }
    }
  } else if (pg == 3) {
    let i = 0;
    for (let j = 12; j < 18; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++;
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++;
      }
    }
  }
};
cc(All, 1);

const preview = (id)=>{
  let pimg_data = document.getElementById(id).innerHTML;
  let pimg_src;
  if(pimg_data != '<span class="material-symbols-rounded locked">network_intelligence_history</span>'){
  pimg_src = document.getElementById(id).children[0].attributes.src.value;
  document.getElementById("preview-div").style.display = "flex";
  document.getElementById("preview-div").innerHTML = '<div id="close-c" onclick="close_preview()"></div>' + `<img src="${pimg_src}">` + '<div id="pd-close-button"><span class="material-symbols-rounded" onclick="close_preview()">close</span></div>';
  }
};
const close_preview = ()=>{
  document.getElementById("preview-div").style.display = "none";
};