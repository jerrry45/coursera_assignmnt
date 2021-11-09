(function () {

    var names = ["Doe", "John", "Jeni", "Dobby", "Rex", "Franky", "Barry", "Pauline", "Laurine", "Jimmy"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    