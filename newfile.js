var fear = fearGenerated(numPeeps, rainInInches, numSharks);


var fearMessage = function() {
    if (fear < 200){
    fearMessage = function() {
      alert(
        "Fear Level: LOW\n" +
      "Still wanna ride?"
      );
    };
  }
  else if (fear < 300) {
    fearMessage = function() {
      alert(
        "Fear Level: MEDIUM\n" +
      "Think you'll make it?"
      );
    };
  }
  else {
    fearMessage = function() {
      alert(
        "Fear Level: HIGH\n" +
      "Have a death wish?"
      );
    };
  }


 

};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide here
confirmRide(fearMessage);
