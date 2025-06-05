console.log('Bienvenue sur le site de Mr. Panda !');

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.menu-item');
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');
  const popupDesc = document.getElementById('popupDesc');
  const closeBtn = document.getElementById('closePopup');

  items.forEach(item => {
    item.addEventListener('click', () => {
      popupImage.src = item.getAttribute('data-img');
      popupTitle.textContent = item.getAttribute('data-title');
      popupDesc.textContent = item.getAttribute('data-desc');
      popup.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

function animateClick(element) {
  element.classList.add("clicked");
  setTimeout(() => {
    element.classList.remove("clicked");
  }, 400);
}
