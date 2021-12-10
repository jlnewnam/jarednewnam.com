//articles
const author = 'jared l newnam';
const blogArticles = [{
    author: author,
    date: '11/24/2021',
    title: 'the querySelectorAll DOM API',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1600/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    url: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'the difference between named and anonymous functions',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1601/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    url: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'css animations explained',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1602/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    url: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'where have the birds gone',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1603/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    url: 'articles/brief-introduction-to-queryselectorall.html'
  }
];



//pass blogArticles data
function blogArticlesTemplate(articles) {
  return `
    <div class="tease-post">
      <div class="tease-post__container">
        <h5 class="tease-post__meta">
          <span class="tease-post__meta--author">${articles.author}</span>
          <span class="tease-post__meta--date">${articles.date}</span>
        </h5>
        <h2 class="tease-post__title"><a href="${articles.url}">${articles.title}</a></h2>
        <div class="tease-post__details">
          <h4><i class="fa fa-clock"></i> ${articles.minutesToRead} minute read</h4>
          <h4><i class="fa fa-tag"></i> ${articles.tags}</h4>
          <h4><i class="fa fa-share-alt"></i> Share</h4>
        </div>
        <hr>
        <img class="tease-post__img" src="${articles.image}" alt="${articles.altText}">
        <div class="tease-post__text">
          <p>${articles.teaser}</p>

          <a href="//${articles.url}" class="tease-post__more">[read more]</a>
        </div>      
      </div>
    </div>    
  `;
}

document.getElementById('blogTeaserList').innerHTML = `
  ${blogArticles.map(blogArticlesTemplate).join('')}
  `;

//sharing
const pageURL = window.location.href;
const pageTitle = document.title;

const shareData = {
  title: "jarednewnam.com",
  text: blogArticles.map(titles => titles.title),
  url: blogArticles.map(urls => urls.readMore)
};

const shareButtons = document.querySelectorAll(".fa-share-alt");

if ("share" in navigator) {
  shareButtons.forEach((shareButton) => {
    shareButton.addEventListener("click", () => {
      navigator
        .share(shareData)
        .then(() => {
          console.log("Shared", shareData);
        })
        .catch(console.error);
    });
  });
} else {
  shareButtons.forEach((shareButton) => {
    shareButton.style.display = "none";
  });
}