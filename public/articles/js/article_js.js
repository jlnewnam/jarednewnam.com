fetch("../footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

//highlight.js
// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('.code').forEach((snippet) => {
//     hljs.highlightElement(snippet);
//   });
// });

eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.9(\'8\',(7)=>{0.6(\'.5\').4((1)=>{3.2(1)})});',10,10,'document|snippet|highlightElement|hljs|forEach|code|querySelectorAll|event|DOMContentLoaded|addEventListener'.split('|'),0,{}))

  const pageURL = window.location.href;
  const pageTitle = document.title;

  const shareData = {
    title: 'jarednewnam.com',
    text: pageTitle,
    url: pageURL
  }

  //TODO - loop results of share click - make this a universal script call
  const shareLinks = document.querySelector('.fa-share-alt');
  // const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  shareLinks.addEventListener('click', async () => {
    navigator.share(shareData);
    // try {
    //   await navigator.share(shareData)
    //   resultPara.textContent = 'MDN shared successfully'
    // } catch(err) {
    //   resultPara.textContent = 'Error: ' + err
    // }
  });

