const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // create elements
  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const h1 = document.createElement('h1')
  const tempSpan = document.createElement('span')

  // add classes
  header.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')

  // add attributes
  dateSpan.textContent = date
  h1.textContent = title
  tempSpan.textContent = temp

  // append in correct element structure
  header.append(dateSpan, h1, tempSpan)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // create Header element using data, append to selector
  const header = Header('Lambda Times', 'January 6, 2021', '26°')
  document.querySelector(selector).append(header)
}

export { Header, headerAppender }
