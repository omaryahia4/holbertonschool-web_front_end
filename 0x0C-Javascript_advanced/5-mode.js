function changeMode(size, weight, transform, background, color) {
 return function() {
  document.body.style.fontSize = size;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.background = background;
  document.body.style.color = color;
 }
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    let body = document.body;
    let p = document.createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    body.appendChild(p);
    let btn = document.createElement("button");
    btn.innerHTML = "Spooky";
    body.appendChild(btn);
    btn.addEventListener("click", spooky);
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Dark Mode";
    body.appendChild(btn1);
    btn1.addEventListener("click", darkMode);
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Scream Mode";
    body.appendChild(btn2);
    btn2.addEventListener("click", screamMode);

}
main();