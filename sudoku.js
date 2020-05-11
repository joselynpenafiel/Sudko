  var  sol = [[0,7,0,2,3,8,0,0,0],
              [0,0,0,7,4,0,8,0,9],
              [0,6,8,1,0,9,0,0,2],
              [0,3,5,4,0,0,0,0,8],
              [6,0,7,8,0,2,5,0,1],
              [8,0,0,0,0,5,7,6,0],
              [2,0,0,6,0,3,1,9,0],
              [7,0,9,0,2,1,0,0,0],
              [0,0,0,9,7,4,0,8,0]];

  var  printBoard = function(s) {
    // display  the  beginning  board
    for(i = 0; i < sol.length; i++){
      for(j = 0; j < sol[0].length; j++){
        var jd = document.getElementById("r"+(i+1)+(j+1));
        jd.innerHTML = s[i][j];
      }
    }
  };

  var  printSolution = function(s) {
    // display  the  final  solution
    if(solved(sol)){
      for(i = 0; i < sol.length; i++){
        for(j = 0; j < sol[0].length; j++){
          var td = document.getElementById("r"+(i+1)+(j+1));
          td.innerHTML = s[i][j];
        }
      }
    }

  };

  var copy = function(s){
    var snew = [[],[],[],[],[],[],[],[],[]];

    for(let i = 0; i < 9; i++){//checks rows
      for(let j = 0; j < 9; j++){
         snew[i][j] = s[i][j];
      }
    }

    printBoard(snew);
    return snew;
};

  var  solve = function(s) {
    // solve  the  puzzle s using a recursive  depth  first  search
    if(solved(s)){//base case
      printBoard(s);
      fail();
    }
    //recursive case
    for(i = 0; i < 9; i++){
      for(j = 0; j < 9; j++){
        if(s[i][j]==0){
          var tempI = i;
          var tempJ = j;
        }
      }
    }

  var tempCol = [s[0][tempJ],s[1][tempJ],s[2][tempJ],s[3][tempJ],s[4][tempJ],s[5][tempJ],s[6][tempJ],s[7][tempJ],s[8][tempJ]];

  var test = copy(s);
  for(let k = 1; k <= sol.length; k++){
    if(!tempCol.includes(k) && !s[tempI].includes(k)){
      test[tempI][tempJ] = k;
      console.log(test);
      solve(test);
    };
  }


  };

  var  solved = function(s) {
    //check to see if the  puzzle s is  solved.   Return  true or  false.
    for(i = 0; i < sol.length; i++){//checks rows for uniqueness
    var setArray = new Set();
    for(j = 0; j < sol[0].length; j++){
      var elem = s[i][j];
      if(!setArray.has(elem)){
        setArray.add(elem);
        }
      else{
        return false;
      };
    }
  }

  for(column = 0; column < sol[0].length; column++){//checks columns for uniqueness
    var setArray2 = new Set();
    for(row = 0; row < sol.length; row++){
      var elem2 = s[row][column];
      if(!setArray2.has(elem2)){
        setArray2.add(elem2);
        }
      else{
        return false;
      };
    }
  }

    var sumTotal = 405;
    var sum = 0;
      for(i = 0; i < 9; i++){//checks rows
        for(j = 0; j < 9; j++){
          sum += s[i][j];
        }
      }

    if(sum == sumTotal){
      return true;
    }
    else{
      return false;
    };
  return true;


  };


solve(sol);
