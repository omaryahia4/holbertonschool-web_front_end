function setCookies() {
    username = document.form1.firstname.value;
    document.cookie = "username= " + username;
    email = document.form1.email.value;
    document.cookie = "email= " + email;

}
function showCookies() {
    let c = document.createElement('p');
    c.innerText = "Cookies: " +  document.cookie;
    document.body.append(c);
}