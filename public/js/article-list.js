//articles
const author = 'jared l newnam';
const blogArticles = [{
    author: author,
    date: '11/24/2021',
    title: 'a brief introduction to querySelectorAll',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1600/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    readMore: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'a brief introduction to querySelectorAll',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1601/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    readMore: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'a brief introduction to querySelectorAll',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1602/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    readMore: 'articles/brief-introduction-to-queryselectorall.html'
  },
  {
    author: author,
    date: '11/24/2021',
    title: 'a brief introduction to querySelectorAll',
    minutesToRead: 10,
    tags: ['javascript', 'html'],
    image: 'https://placekitten.com/1603/900',
    altText: 'image of kittens',
    teaser: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis magni natus! Blanditiis quibusdam mod',
    readMore: 'articles/brief-introduction-to-queryselectorall.html'
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
        <h2 class="tease-post__title"><a href="${articles.readMore}">${articles.title}</a></h2>
        <div class="tease-post__details">
          <h4><i class="fa fa-clock"></i> ${articles.minutesToRead} minute read</h4>
          <h4><i class="fa fa-tag"></i> ${articles.tags}</h4>
        </div>
        <hr>
        <img class="tease-post__img" src="${articles.image}" alt="${articles.altText}">
        <div class="tease-post__text">
          <p>${articles.teaser}</p>

          <a href="${articles.readMore}" class="tease-post__more">[read more]</a>
        </div>      
      </div>
    </div>    
  `;
}

document.getElementById('blogTeaserList').innerHTML = `
  ${blogArticles.map(blogArticlesTemplate).join('')}
  `;