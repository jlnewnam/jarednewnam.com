fetch("../footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

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

