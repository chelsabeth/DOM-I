const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Navigation
let aTags = document.querySelectorAll('a');

aTags[0].innerText = siteContent.nav['nav-item-1'];
aTags[1].innerText = siteContent.nav['nav-item-2'];
aTags[2].innerText = siteContent.nav['nav-item-3'];
aTags[3].innerText = siteContent.nav['nav-item-4'];
aTags[4].innerText = siteContent.nav['nav-item-5'];
aTags[5].innerText = siteContent.nav['nav-item-6'];

aTags.forEach(element => {
  element.style.color = 'green';
  });


// Header
let headerText = document.querySelector('h1');
headerText.innerText = siteContent.cta.h1;

// Button 
let btnElement = document.querySelector('button');
btnElement.innerText = siteContent.cta.button;

// Image 
let topImage = document.getElementById('cta-img');
topImage.src = siteContent.cta['img-src'];


// All h4's 
let headers = document.querySelectorAll('h4');

headers[0].innerText = siteContent['main-content']['features-h4'];
headers[1].innerText = siteContent['main-content']['about-h4'];
headers[2].innerText = siteContent['main-content']['services-h4'];
headers[3].innerText = siteContent['main-content']['product-h4'];
headers[4].innerText = siteContent['main-content']['vision-h4'];
headers[5].innerText = siteContent['contact']['contact-h4'];

// All Paragraphs
let paragraphs = document.querySelectorAll('p');

paragraphs[0].innerText = siteContent['main-content']['features-content'];
paragraphs[1].innerText = siteContent['main-content']['about-content'];
paragraphs[2].innerText = siteContent['main-content']['services-content'];
paragraphs[3].innerText = siteContent['main-content']['product-content'];
paragraphs[4].innerText = siteContent['main-content']['vision-content'];
paragraphs[5].innerText = siteContent['contact']['address'];
paragraphs[6].innerText = siteContent['contact']['phone'];
paragraphs[7].innerText = siteContent['contact']['email'];

// Middle Image 
let midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

// Copyright 
let copyRight = document.querySelector('footer');
copyRight.innerText = siteContent.footer.copyright;

// Prepend and Append
const navigation = document.querySelector('nav');

let newAnchorOne = document.createElement('a');
newAnchorOne.style.color = 'green';
newAnchorOne.innerText = 'Chicken Nuggets';

navigation.prepend(newAnchorOne);

let newAnchorTwo = document.createElement('a');
newAnchorTwo.style.color = 'green';
newAnchorTwo.innerText= 'French Fries';

navigation.append(newAnchorTwo);







