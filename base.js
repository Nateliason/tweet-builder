const tweet1Count = document.querySelector('#tweet1Count');
const tweet1 = document.querySelector('#tweetArea1');

// Make a function for updating character count

function updateChar() {
  tweet1Count.textContent = tweet1.textLength;
}

tweet1.addEventListener('input', updateChar);

// Function for clearing the tweet info
function resetTweet() {
  tweet1.value = '';
  tweet1Count.textContent = '0';
}

const saveButton = document.querySelector('#saveButton');

saveButton.addEventListener('click', function () {
  // Make the div for the saved tweet
  const saved = document.getElementById('savedTweets');

  // Add the text and make the Edit & Copy buttons
  saved.insertAdjacentHTML(
    'beforeend',
    `<div class="savedTweet">
      <p>${tweet1.value} <a href='#' onclick=editText(this)>Edit</a> <a href='#'>Copy</a> </p>
    </div>`
  );

  // Reset the drafting box
  resetTweet();
});

// Add the edit function to put the tweet back in the text area and update the character count
function editText(tweetText) {
  const parent = tweetText.parentElement;
  tweet1.value = parent.textContent.slice(0, -11);
  updateChar();
  parent.remove();
}

const fillWords = [
  'think',
  'pretty',
  'really',
  'to be',
  'actually',
  'around',
  'a lot',
  'very',
  'thing',
  'much',
  'just',
  'that',
  'unfortunate',
  'fortunate',
  'nice',
];

const removeWords = document.querySelector('.fillerWordsList');
const checkButton = document.querySelector('#checkButton');

checkButton.addEventListener('click', function () {
  removeWords.textContent = ``;

  fillWords.forEach((element) => {
    if (tweet1.value.includes(element) === true) {
      removeWords.insertAdjacentHTML('beforeend', `<li>${element}</li>`);
    }
  });
});
