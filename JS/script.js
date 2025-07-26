// Highlight clicked nav link
document.querySelectorAll("nav ul li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll("nav ul li").forEach(li => li.classList.remove("active"));
    item.classList.add("active");
  });
});
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');

    function moveToSlide(slideIndex) {
      const cardWidth = document.querySelector('.card').offsetWidth + 20; // 20 = margin
      const visibleCards = 3;
      const moveX = slideIndex * visibleCards * cardWidth;

      track.style.transform = `translateX(-${moveX}px)`;

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    }
    //frequant

    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });