const tweet1Count = document.querySelector('#tweet1Count');
const tweet1 = document.querySelector('#tweetArea1');

tweet1.addEventListener('input', function () {
  tweet1Count.textContent = tweet1.textLength;
});

const saveButton = document.querySelector('#saveButton');

saveButton.addEventListener('click', function () {
  // Make the div for the saved tweet
  const block = document.createElement('div');
  block.className = 'savedTweet';

  // Create a paragraph element in the div and add the tweet text
  const para = document.createElement('p');
  para.className = 'savedTweetText';
  para.insertAdjacentText('beforeend', tweet1.value);

  // Put the paragraph text in the div
  block.appendChild(para);

  // Make the Edit & Copy buttons
  block.insertAdjacentHTML(
    'beforeend',
    ` <a href='#' onclick=editText(this)>Edit</a> <a href='#'>Copy</a>`
  );

  // Put the new div inside the savedTweets div
  const saved = document.getElementById('savedTweets');
  saved.appendChild(block);

  // Reset the drafting box
  tweet1.value = '';
  tweet1Count.textContent = '0';
});

function editText(tweetText) {
  const parent = tweetText.parentElement;
  tweet1.value = parent.querySelector('p').textContent;
  tweet1Count.textContent = tweet1.textLength;
  parent.remove();
}

const fillWords = ['pretty', 'very'];
const removeWords = document.querySelector('.fillerWordsList');

const checkButton = document.querySelector('#checkButton');

checkButton.addEventListener('click', function () {
  removeWords.textContent = ``;

  fillWords.forEach((element) => {
    if (tweet1.value.includes(element) === true) {
      removeWords.textContent += `${element}`;
    }
  });
});
