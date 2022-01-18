var studentHogwarts = (function(){
    let privateScore = 0;
    let name = null;
    function changeScoreBy(points) {
     privateScore += points;
    }
    return {
        setName :function(newName){
            newName = name;
        },
        rewardStudent :function() {
            return changeScoreBy(1);
        },
        penalizeStudent :function() {
            return changeScoreBy(-1);
        },
        getScore :function() {
            return name + ':' + privateScore
        }
    }
});
    let harry = new studentHogwarts();
    harry.setName('Harry');
    for (var i = 0; i < 4; i++){
        harry.rewardStudent();
    }
    console.log(harry.getScore());
    let draco = new studentHogwarts();
    draco.setName('Draco');
    for (var i = 0; i < 1; i++){
        draco.rewardStudent();
    }
    for (var i = 0; i < 3; i++){
        draco.penalizeStudent();
    }
    console.log(draco.getScore())
