function setCookies() {
    username = Cookies.set('name', document.form1.firstname.value);
    email = Cookies.set('email', document.form1.email.value);

}
function showCookies() {
    let c = document.createElement('p');
    c.innerText = "Cookies: " + 'name: ' + Cookies.get('name')+ ', ' + 'email: ' + Cookies.get('email');
    document.body.appendChild(c);
}