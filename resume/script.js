const hobbyLinks = document.querySelectorAll(".hobby-link");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

// Hobby content
const hobbyContent = {
  reading: {
    title: "Reading",
    content: "<ul> <li>The Hobbit</li> <li>1984</li> <li>Don Quixote - Miguel de Cervantes</li> <li>Hamlet - William Shakespeare </li><li> Crime and Punishment - Fyodor Dostoevsky</li><li> Eugene Onegin - Alexander Pushkin</li><li>The Master and Margarita - Mikhail Bulgakov</li><li>The Old Man and the Sea - Ernest Hemingway</li><li>The Little Prince - Antoine de Saint-Exupéry</li><li>Faust - Johann Wolfgang von Goethe</li><li>Jane Eyre - Charlotte Brontë</li><li>Robinson Crusoe - Daniel Defoe</li> <li>Days Gone By - Abdulla Qodiriy</li><li>Night and Day - Cho'lpon</li><li>Baburnama - Zahiriddin Muhammad Babur</li><li>The Mischievous Boy - G'afur G'ulom</li><li>The Affairs of the World - O'tkir Hoshimov</li> </ul>"
  },
  gaming: {
    title: "Coding",
    content: "<ul><li>Web Development in HTML, CSS, JS, Pythone</li><li>Mobile Development in Java, Kotlin</li><li>Cybersecurity focusing on ethical hacking and secure systems.</li></ul>"
  },
  traveling: {
    title: "Gaming",
    content: "<ul><li>DOTA2 - 1200h. 7000MMR</li><li>Counter Strike 2 -700h. 2150elo.</li> <li>etc.</li></ul>"
  },
  coding: {
    title: "Play Chess",
    content: "<p>in chess.com 1500elo </p>"
  },
  music: {
    title: "Play Volleyball",
    content: "<ul><li>2-time first place in the school tournament</li><li>first place at the Tashkent Volleyball Championship 2023</li><li>2-time runner-up in the Tashkent Volleyball Championship among schools</li><li>first place Summer ball volleyball champioship 2024</li></ul>"
  }
};

hobbyLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hobby = link.getAttribute("data-hobby");
    modalTitle.innerHTML = hobbyContent[hobby].title;
    modalBody.innerHTML = hobbyContent[hobby].content;
    modal.style.display = "flex";
  });
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});