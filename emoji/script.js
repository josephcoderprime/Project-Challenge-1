function createmoji() {
  const emoji = document.createElement
    ('div');
  emoji.classList.add('emoji');
  emoji.innerText = '😂';
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = Math.
    random() * 2 + 3 + "5";
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createmoji, 300);