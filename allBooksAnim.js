// Bug 15 - 24/12/2021 - Added Animation to the all books page.
// Bug 24 - 01/02/2022 - Fixed the all books not visible on first few loads.

// const hook = document.getElementsByClassName("hook");
// hook.forEach(function (item) {
//   //make opacity of item 0
//   item.style.opacity = 0;
//   item.style.transition = "150ms";
//   item.style.transform = "translateX(100px)";
// });

setTimeout(() => {
  const cards = document.querySelectorAll(".hook");

  // Bug 24 starts
  const hook = document.getElementsByClassName("hook");
  hook[0].classList.add("show");
  hook[1].classList.add("show");
  // Bug 24 ends

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
      threshold: 0.75,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  //   observer.observe(cards[0]);
}, 1000);

// Select the first child of the hook class and add a class of show to it. This will make the first card visible. The other cards will be hidden.
// const hook = document.getElementsByClassName("hook");
// hook[0].classList.add("show");
// hook[1].classList.add("show");

// Bug 24 starts
setTimeout(() => {
  const hook = document.getElementsByClassName("hook");
  hook[0].classList.add("show");
  hook[1].classList.add("show");
}, 2000);
// Bug 24 ends
