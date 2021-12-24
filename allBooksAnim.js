// Bug 15 - 24/12/2021 - Added Animation to the all books page.

// const hook = document.getElementsByClassName("hook");
// hook.forEach(function (item) {
//   //make opacity of item 0
//   item.style.opacity = 0;
//   item.style.transition = "150ms";
//   item.style.transform = "translateX(100px)";
// });

setTimeout(() => {
  const cards = document.querySelectorAll(".hook");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        //   if (entry.isIntersecting) {
        entry.target.classList.toggle("show", entry.isIntersecting);
        // observer.unobserve(entry.target);
        //   }
      });
      // console.log(entries);
    },
    {
      //   threshold: 1,
      threshold: 0.5,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  //   observer.observe(cards[0]);
}, 1000);
