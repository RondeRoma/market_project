import "../css/about.css";
import myAvtoPark from "../data/items.js";
// console.log(myAvtoPark);
import aboutRefs from "./refs.js";
const { aboutSection } = aboutRefs;
// console.log(aboutSection);

function createCarsList(arr) {
  //   console.log(arr);
  return arr.map((car) => {
    //
    const { name, picture, price } = car;
    // console.log(name);
    // console.log(picture);
    const imgName = document.createElement("h3");
    imgName.textContent = name;

    const imgWrapper = document.createElement("div");

    const pictures = picture.map((pic) => {
      const img = document.createElement("img");
      img.setAttribute("src", pic);
      img.setAttribute("alt", name);
      img.setAttribute("width", '200px')
    //   console.log(img);
      return img;
    });
    imgWrapper.append(...pictures);
    // console.log(imgWrapper);
    // console.log(price);

    const carPrice = document.createElement("p");
    carPrice.textContent = price;

    const item = document.createElement("li");
    item.append(imgName, imgWrapper, carPrice);
    return item;
  });
  
}
const carsItems = createCarsList(myAvtoPark);
console.log(carsItems);

const carsList = document.createElement('ul');
carsList.append(...carsItems);
// console.log(carsList);

aboutSection.append(carsList);
