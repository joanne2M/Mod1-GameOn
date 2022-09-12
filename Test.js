let attempts=0;
 let play =0;
 const elem = document.getElementById('submit')
 elem.addEventListener('click', TriviaGames)

 function TriviaGames(){ 

    let points = 0;

  let uq1 = document.getElementById("Rq1").value 
  if (uq1 === "4") {
    points = points +1
    console.log(uq1)
    console.log(points)
  }

  let uq2 = document.getElementById("Rq2").value
  if (uq2 ==="2") {
    points += 1;
    console.log(uq2)
    console.log(points)
  }

    let uq3 = document.getElementById("Rq3").value
 if (uq3 === "4") {
   points += 1;
   console.log(uq3)
   console.log(points)
 }
   let uq4 = document.getElementById("Rq4").value
   if (uq4 === "1") {
     points += 1;
     console.log(uq4)
     console.log(points)
   }
     let uq5 = document.getElementById("Rq5").value
     if (uq5 === "4") {
       points += 1;
       console.log(uq5)
       console.log(points)
  
}

console.log(points)

if (points < 3) {
    alert("You got less than  3 right. You lost, but can Restart the Game to Find Your Next Date");
    console.log('You Lose')
}

else{
    console.log('You Win')
    window.location.href='http://127.0.0.1:5500/LastPage.html';
}
 }
// {

// If the Player Loses --> or If the Player Wins //