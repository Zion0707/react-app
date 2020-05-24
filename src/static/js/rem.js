var docEl = document.documentElement,
    Size = docEl.clientWidth / (750 / 40);
docEl.style.fontSize = Size + 'px';
if (Size >= 25) {
    Size = 20;
    docEl.style.fontSize = '20px';
}
