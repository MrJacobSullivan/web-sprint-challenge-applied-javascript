import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div')
  const headline = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')
  const authorName = document.createElement('span')

  card.classList.add('card')
  headline.classList.add('headline')
  authorDiv.classList.add('author')
  imgContainer.classList.add('img-container')

  headline.textContent = article.headline
  img.src = article.authorPhoto
  authorName.textContent = article.authorName

  card.append(headline, authorDiv)
  authorDiv.append(imgContainer, authorName)
  imgContainer.append(img)

  card.addEventListener('click', () => console.log(article.headline))

  return card
}

const cardAppender = async (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const res = await axios.get('http://localhost:5000/api/articles')

  try {
    const data = res.data.articles

    let articles = []
    for (const [, value] of Object.entries(data)) {
      value.forEach((article) => articles.push(article))
    }

    const articleElements = articles.map((article) => Card(article))
    articleElements.forEach((articleElement) => {
      document.querySelector(selector).append(articleElement)
    })
  } catch (err) {
    console.error(err)
  }
}

export { Card, cardAppender }
