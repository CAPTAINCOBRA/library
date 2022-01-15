// Bug 21 starts here
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: [
    // "Read",
    // "start reading, start inspiring.",
    // "enrich life with ideas.",
    // "open the gates to knowledge.",
    "Discover.",
    " Connect.",
    "Inspire.",
    // "Eat",
    // "Enjoy",
    "explore the world of books together!",
  ],
  loop: true,
  typeSpeed: 70,
  backSpeed: 25,
  //   backSpeed: 75,
  backDelay: 1000,
});
// <!-- typed js effect ends -->
// Bug 21 ends here

// Bug 22 starts -  Animated style to Ekansh's Library Heading
$(function () {
  $(".intro").addClass("go");

  $(".reload").click(function () {
    $(".intro")
      .removeClass("go")
      .delay(200)
      .queue(function (next) {
        $(".intro").addClass("go");
        next();
      });
  });
});
// Bug 22 ends

// <!-- Bug 23 tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  scale: 1.2,
});

VanillaTilt.init(document.querySelectorAll(".tiltHero"), {
  max: 10,
  scale: 1.1,
});
// <!-- Bug 23 tilt js effect ends -->
