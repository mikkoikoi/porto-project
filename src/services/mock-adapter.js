import ApiService from "./client";
import API_URLS from "../enums/api-urls";
import MockAdapter from "axios-mock-adapter";

console.warn("MockAdapter Active");
const mock = new MockAdapter(ApiService, {
  onNoMatch: "passthrough",
  delayResponse: 1000,
});

mock.onGet(API_URLS.HOME_PALING_DICARI).reply(200, {
  status: "true",
  code: "200",
  data: [
    {
      title: "AutoClinic1 Anti Karat",
      image:
        "https://s.garasi.id/q80/store_products/c4eae50a-fb6e-48d5-868e-e541fcfab8a5.jpg",
      price: "2.000.000",
      seller: "AutoClinic Nano Ceramic",
    },
    {
      title : "AutoClinic2 Anti Karat",
      image : "https://s.garasi.id/q80/store_products/c4eae50a-fb6e-48d5-868e-e541fcfab8a5.jpg",
      price : "2.000.000",
      seller : "AutoClinic Nano Ceramic"
     },{
      title : "AutoClinic Anti Karat",
      image : "https://s.garasi.id/q80/store_products/2d16a64c-a5dd-48c4-80fe-4aef1674412b.jpg",
      price : "2.000.000",
      seller : "AutoClinic Nano Ceramic"
     },{
      title : "AutoClinic Anti Karat",
      image : "https://s.garasi.id/q80/store_products/55d1835e-d0b7-4770-8dc3-01d4d080e565.jpg",
      price : "2.000.000",
      seller : "AutoClinic Nano Ceramic"
     },{
      title : "AutoClinic Anti Karat",
      image : "https://s.garasi.id/q80/store_products/c4eae50a-fb6e-48d5-868e-e541fcfab8a5.jpg",
      price : "2.000.000",
      seller : "AutoClinic Nano Ceramic"
     },{
      title : "AutoClinic Anti Karat",
      image : "https://s.garasi.id/q80/store_products/a80d669e-fb80-4188-a96c-ba0638e03113.jpg",
      price : "2.000.000",
      seller : "AutoClinic Nano Ceramic"
     }
  ],
});
