function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function poemTopicPrompt(topic) {
  let apiKey = `d102f34aao5ce8t34e64ea7aab7a37d2`;
  let context = `You are a smart AI assistant that creates beautiful and short poems`;
  let prompt = `${topic}. Please create a short poem using this topic.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitMessage = document.querySelector("#poem");
  waitMessage.innerHTML = `Please wait, I'm thinking of a good one.`;
  axios.get(apiUrl).then(generatePoem);
}

function poemTopicSubmit(event) {
  event.preventDefault();
  let poemTopicInput = document.querySelector("#topic-input");
  poemTopicPrompt(poemTopicInput.value);
}

let poemTopicElement = document.querySelector("#poem-generator-form");
poemTopicElement.addEventListener("submit", poemTopicSubmit);
