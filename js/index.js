const siteContent = {
  "pics": {
    "pic-1": "images/book-cluster.jpeg",
    "pic-2": "images/book-library.jpeg",
    "pic-3": "images/book-library2.jpeg",
  }
};
  
const buyImg = document.getElementById("buy");
buyImg.setAttribute('src', siteContent["pics"]["pic-1"]);

const sellImg = document.getElementById("sell");
sellImg.setAttribute('src', siteContent["pics"]["pic-2"]);

const reviewImg = document.getElementById("review");
reviewImg.setAttribute('src', siteContent["pics"]["pic-3"]);
