function toggleFirstFaq() {
  const button = document.getElementById("first-toggle");
  const faqResponse = document.getElementById("fisrt-faq-response");

  const isOpen = faqResponse.classList.contains("show");

  if (isOpen) {
    faqResponse.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  } else {
    faqResponse.classList.add("show");
    button.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon minus"/>`;
  }

  closeSecondFaqResponse();
  closeThirdFaqResponse();
  closeFourthFaqResponse();
}

function toggleSecondFaq() {
  const button = document.getElementById("second-toggle");
  const faqResponse = document.getElementById("second-faq-response");

  const isOpen = faqResponse.classList.contains("show");

  if (isOpen) {
    faqResponse.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  } else {
    faqResponse.classList.add("show");
    button.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon minus"/>`;
  }

  closeFirstFaqResponse();
  closeThirdFaqResponse();
  closeFourthFaqResponse();
}

function toggleThirdFaq() {
  const button = document.getElementById("third-toggle");
  const faqResponse = document.getElementById("third-faq-response");

  const isOpen = faqResponse.classList.contains("show");

  if (isOpen) {
    faqResponse.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  } else {
    faqResponse.classList.add("show");
    button.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon minus"/>`;
  }

  closeFirstFaqResponse();
  closeSecondFaqResponse();
  closeFourthFaqResponse();
}

function toggleFourthFaq() {
  const button = document.getElementById("fourth-toggle");
  const faqResponse = document.getElementById("fourth-faq-response");

  const isOpen = faqResponse.classList.contains("show");

  if (isOpen) {
    faqResponse.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  } else {
    faqResponse.classList.add("show");
    button.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon minus"/>`;
  }

  closeFirstFaqResponse();
  closeSecondFaqResponse();
  closeThirdFaqResponse();
}

function closeFirstFaqResponse() {
  const button = document.getElementById("first-toggle");
  const faqResponse = document.getElementById("fisrt-faq-response");

  button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  faqResponse.classList.remove("show");
}

function closeSecondFaqResponse() {
  const button = document.getElementById("second-toggle");
  const faqResponse = document.getElementById("second-faq-response");

  button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  faqResponse.classList.remove("show");
}

function closeThirdFaqResponse() {
  const button = document.getElementById("third-toggle");
  const faqResponse = document.getElementById("third-faq-response");

  button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  faqResponse.classList.remove("show");
}

function closeFourthFaqResponse() {
  const button = document.getElementById("fourth-toggle");
  const faqResponse = document.getElementById("fourth-faq-response");

  button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  faqResponse.classList.remove("show");
}

// Melhoria
function toggleFaq(id) {
  const faq = document.getElementById(`faq-${id}`);

  const button = faq.querySelector("button");
  const faqResponse = faq.querySelector(".faq-content");
  const image = button.querySelector("img");

  const isOpen = faqResponse.classList.contains("show"); 

  closeAllFaqs();

  if (isOpen) {
    faqResponse.classList.remove("show");
    image.setAttribute("src", "./assets/images/icon-plus.svg");
    image.setAttribute("alt", "icon plus");
  } else {
    faqResponse.classList.add("show");
    image.setAttribute("src", "./assets/images/icon-minus.svg");
    image.setAttribute("alt", "icon minus");
  }
}

function closeAllFaqs() {
  const responses = document.querySelectorAll(".faq-content");
  const images = document.querySelectorAll(".faq button img");

  responses.forEach((response) => {
    response.classList.remove("show");
  });

  images.forEach((image) => {
    image.src = "./assets/images/icon-plus.svg";
    image.alt = "icon plus";
  });
}