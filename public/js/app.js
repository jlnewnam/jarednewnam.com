//opens all external links in a new window, keeps internal links in same window
var all_links = document.querySelectorAll('a');
for (var i = 0; i < all_links.length; i++) {
  var a = all_links[i];
  if (a.hostname != location.hostname) {
    a.rel = 'noopener';
    a.target = '_blank';
  }
}

//word counter
// (function countWords() {
//   let allText = document.querySelectorAll(".post p");
//   let count = 0;

//   for (var i = 0; i < allText.length; i++) {
//     count += allText[i].innerHTML.split(" ").length;
//   }
//   let wordsCounted = count;
//   let wpm = 225;
//   let readTime = (wordsCounted/wpm).toFixed(0);
//   wordCount.textContent = `${readTime} minute read`;  
// })();

//get footer 
fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });