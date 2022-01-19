let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'jerusalem',
    occupation: 'Engineer'
}
function logWelcomeUser(welcomeString){
 console.log(welcomeString + ', ' + user.firstName + '. ' + 'Your occupation is: ' + user.occupation)
}
let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Hello');