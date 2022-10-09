var show = document.getElementById("show");

qoutes = [
  {
    content: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    content:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    content:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    content: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    content: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Ciceor",
  },
  {
    content:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    content: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    content: "“Be the change that you wish to see in the world.”",

    author: "_Mahatma Gandhi ",
  },
];

function showQoute() {
  var num = Math.floor(Math.random() * qoutes.length + 1);
  console.log(num);
  var temp = `<p class="lead">
  ${qoutes[num].content}
  </p>
  <h2>${qoutes[num].author}</h2>`;
  show.innerHTML = temp;
}
