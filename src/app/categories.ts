import {laptops, phones, Product, productsList, sportProds, tvProds} from "./products";

export interface Category {
  id: number,

  name:string,

  image: string,
}

export const categoriesList = [
  {
    id: 1,
    name: "Phones and gadgets",
    image: "https://kaspi.kz/img/Phone.png",
  },
  {
    id: 2,
    name: "Computers and laptops",
    image: "https://kaspi.kz/img/Computer.png",
  },
  {
    id: 3,
    name: "Sport and tourism",
    image: "https://kaspi.kz/img/Sport1.png",
  },
  {
    id: 4,
    name: "TV, Audio, Video",
    image: "https://kaspi.kz/img/TV.png",
  },

]
