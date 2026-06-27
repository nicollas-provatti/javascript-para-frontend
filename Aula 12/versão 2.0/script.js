const toggleButtons = document.querySelectorAll("button");
const faqsResponses = document.querySelectorAll(".faq-content");

toggleButtons.forEach((btn, index) =>
  btn.addEventListener("click", () => faqToggle(index)),
);

function faqToggle(nth) {
  const button = toggleButtons[nth];
  const faqResponse = faqsResponses[nth];

  const isOpen = faqResponse.classList.contains("show");

  closeAllFaqs();

  if (isOpen) {
    faqResponse.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  } else {
    faqResponse.classList.add("show");
    button.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="icon minus"/>`;
  }
}

function closeAllFaqs() {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const button = faq.querySelector("button");
    const content = faq.querySelector(".faq-content");

    content.classList.remove("show");
    button.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="icon plus"/>`;
  });
}
