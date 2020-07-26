import client from "./client";
import path from "path-browserify";

const apiEndPoint = "/listings";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export const getListings = () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ data: listings, ok: true });
  //   }, 1000);
  // });

  return client.get(apiEndPoint);
};

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("category", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: `image_${index}${path.parse(image).ext}`,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(apiEndPoint, data, {
    onUploadProgress: (process) =>
      onUploadProgress(process.loaded / process.total),
  });
};

export const getListingByUser = (userId) => {
  return client.get(apiEndPoint + `/user/${userId}`);
};
