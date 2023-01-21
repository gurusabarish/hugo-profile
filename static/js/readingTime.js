function readingTime() {
  const text = document.querySelector("article").innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);

  const timeElement = document.querySelector("span#readingTime");
  timeElement.innerHTML = "<small> | </small>" + time + timeElement.innerHTML;
}
readingTime();
