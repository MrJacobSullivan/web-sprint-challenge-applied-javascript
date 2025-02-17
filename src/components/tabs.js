import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // create parent topics div
  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics')

  // Topic creator helper funciton, creates <div class="tab">{ textContent }</div>
  const Topic = (textContent) => {
    // create element
    const topic = document.createElement('div')

    // add class and attribute
    topic.classList.add('tab')
    topic.textContent = textContent

    return topic
  }

  // iterate over topics, creating Topic element for each, appending to topicsDiv
  const topicElements = topics.map((topic) => Topic(topic))
  topicElements.forEach((topic) => topicsDiv.append(topic))

  return topicsDiv
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const entry = document.querySelector(selector)

  // get from api and use response or handle error
  axios
    .get('http://localhost:5000/api/topics')
    .then((res) => {
      // get topics from data, create and append Tabs element to selector
      const topics = res.data.topics
      entry.append(Tabs(topics))
    })
    .catch((err) => console.error(err))
}

export { Tabs, tabsAppender }
