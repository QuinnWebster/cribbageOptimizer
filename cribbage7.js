var Card = {
    name: "",
    suit: "",
    value: "",
    compareValue: "",
  
    getValue: function() {
      return this.value;
    },
    setValue: function(newValue) {
      this.value = newValue;

    },
  
    getName: function() {
      return this.name;
    },
    setName: function(newName) {
      this.name = newName;

      if(newName === 'Ace'){
        this.setValue(1);
        this.setCompareValue(1);
      }else if(newName === 'Two'){
        this.setValue(2);
        this.setCompareValue(2);

      }else if(newName === 'Three'){
        this.setValue(3);
        this.setCompareValue(3);

      }else if(newName === 'Four'){
        this.setValue(4);
        this.setCompareValue(4);

      }else if(newName === 'Five'){
        this.setValue(5);
        this.setCompareValue(5);

      }else if(newName === 'Six'){
        this.setValue(6);
        this.setCompareValue(6);

      }else if(newName === 'Seven'){
        this.setValue(7);
        this.setCompareValue(7);

      }else if(newName === 'Eight'){
        this.setValue(8);
        this.setCompareValue(8);

      }else if(newName === 'Nine'){
        this.setValue(9);
        this.setCompareValue(9);

      }else if(newName === 'Ten'){
        this.setValue(10);
        this.setCompareValue(10);

      }else if(newName === 'Jack'){
        this.setValue(10);
        this.setCompareValue(11);

      }else if(newName === 'Queen'){
        this.setValue(10);
        this.setCompareValue(12);

      }else if(newName === 'King'){
        this.setValue(10);
        this.setCompareValue(3);

      } 
    },
  
    getSuit: function() {
      return this.suit;
    },
    setSuit: function(newSuit) {
      this.suit = newSuit;
    },
  
    getCompareValue: function() {
      return this.compareValue;
    },
    setCompareValue: function(newCompareValue) {
        if(newCompareValue === 'Ace'){
            this.compareValue = 1;
          }else if(newCompareValue === 'Two'){
            this.compareValue = 2;

    
          }else if(newCompareValue === 'Three'){
            this.compareValue = 3;

    
          }else if(newCompareValue === 'Four'){
            this.compareValue = 4;

    
          }else if(newCompareValue === 'Five'){
            this.compareValue = 5;

    
          }else if(newCompareValue === 'Six'){
            this.compareValue = 6;

    
          }else if(newCompareValue === 'Seven'){
            this.compareValue = 7;

    
          }else if(newCompareValue === 'Eight'){
            this.compareValue = 8;

    
          }else if(newCompareValue === 'Nine'){
            this.compareValue = 9;

    
          }else if(newCompareValue === 'Ten'){
            this.compareValue = 10;

    
          }else if(newCompareValue === 'Jack'){
            this.compareValue = 11;

    
          }else if(newCompareValue === 'Queen'){
            this.compareValue = 12;

          }else if(newCompareValue === 'King'){
            this.compareValue = 13;

    
          } 

    }

        
  };  

function flushWithFiveCards(cardOne, cardTwo, cardThree, cardFour, cardFive) {
  if (
    cardOne.getSuit() === cardTwo.getSuit() &&
    cardOne.getSuit() === cardThree.getSuit() &&
    cardOne.getSuit() === cardFour.getSuit() &&
    cardOne.getSuit() === cardFive.getSuit()
  ) {
    return true;
  } else {
    return false;
  }
}

function flushWithFourCards(cardOne, cardTwo, cardThree, cardFour) {
    if (
      cardOne.getSuit() === cardTwo.getSuit() &&
      cardOne.getSuit() === cardThree.getSuit() &&
      cardOne.getSuit() === cardFour.getSuit() 
    ) {
      return true;
    } else {
      return false;
    }
  }

function pairWithFiveCards(cardOne, cardTwo, cardThree, cardFour, cardFive) {
  let points = 0.00;

  if (cardOne.getName() === cardTwo.getName()) {
    points += 2;
  }
  if (cardOne.getName() === cardThree.getName()) {
    points += 2;
  }
  if (cardOne.getName() === cardFour.getName()) {
    points += 2;
  }
  if (cardOne.getName() === cardFive.getName()) {
    points += 2;
  }
  if (cardTwo.getName() === cardThree.getName()) {
    points += 2;
  }
  if (cardTwo.getName() === cardFour.getName()) {
    points += 2;
  }
  if (cardTwo.getName() === cardFive.getName()) {
    points += 2;
  }
  if (cardThree.getName() === cardFour.getName()) {
    points += 2;
  }
  if (cardThree.getName() === cardFive.getName()) {
    points += 2;
  }
  if (cardFour.getName() === cardFive.getName()) {
    points += 2;
  }

  return points;
}

function checkJacksWithFiveCards(cardOne, cardTwo, cardThree, cardFour, cardFive) {
  if (cardOne.getCompareValue() === 11 && cardOne.getSuit() === cardFive.getSuit()) {
    return 1;
  } else if (cardTwo.getCompareValue() === 11 && cardTwo.getSuit() === cardFive.getSuit()) {
    return 1;
  } else if (cardThree.getCompareValue() === 11 && cardThree.getSuit() === cardFive.getSuit()) {
    return 1;
  } else if (cardFour.getCompareValue() === 11 && cardFour.getSuit() === cardFive.getSuit()) {
    return 1;
  } else {
    return 0;
  }
}

function checkRunsWithFiveCards(cardOne, cardTwo, cardThree, cardFour, cardFive) {
    let cardList = [cardOne, cardTwo, cardThree, cardFour, cardFive];
    cardList.sort((a, b) => a.getCompareValue() - b.getCompareValue());
  
    // Check for a run of five
    if (
      cardList[1].getCompareValue() - 1 === cardList[0].getCompareValue() &&
      cardList[2].getCompareValue() - 2 === cardList[0].getCompareValue() &&
      cardList[3].getCompareValue() - 3 === cardList[0].getCompareValue() &&
      cardList[4].getCompareValue() - 4 === cardList[0].getCompareValue()
    ) {
      return 5;
    }
  
    // Check for double runs of four
    if (cardList[0].getCompareValue() === cardList[1].getCompareValue()) {
      if (
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2 &&
        cardList[1].getCompareValue() === cardList[4].getCompareValue() - 3
      ) {
        return 8;
      }
    } else if (cardList[1].getCompareValue() === cardList[2].getCompareValue()) {
      if (
        cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[4].getCompareValue() - 2
      ) {
        return 8;
      }
    } else if (cardList[2].getCompareValue() === cardList[3].getCompareValue()) {
      if (
        cardList[0].getCompareValue() === cardList[2].getCompareValue() - 2 &&
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
        cardList[2].getCompareValue() === cardList[4].getCompareValue() - 1
      ) {
        return 8;
      }
    } else if (cardList[3].getCompareValue() === cardList[4].getCompareValue()) {
      if (
        cardList[0].getCompareValue() === cardList[3].getCompareValue() - 3 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2 &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() - 1
      ) {
        return 8;
      }
    }
  
    // Check for triple runs of three
    if (
      (cardList[0].getCompareValue() === cardList[1].getCompareValue() &&
        cardList[1].getCompareValue() === cardList[2].getCompareValue() &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() - 1 &&
        cardList[2].getCompareValue() === cardList[4].getCompareValue() - 2) ||
      (cardList[1].getCompareValue() === cardList[2].getCompareValue() &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() &&
        cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[4].getCompareValue() - 1) ||
      (cardList[2].getCompareValue() === cardList[3].getCompareValue() &&
        cardList[3].getCompareValue() === cardList[4].getCompareValue() &&
        cardList[0].getCompareValue() === cardList[3].getCompareValue() - 2 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 1)
    ) {
      return 9;
    }
  
    // Check for double runs of three
    if (cardList[0].getCompareValue() === cardList[1].getCompareValue()) {
      if (
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2
      ) {
        return 6;
      }
    }
  
    if (cardList[1].getCompareValue() === cardList[2].getCompareValue()) {
      if (
        cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 1
      ) {
        return 6;
      } else if (
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 1 &&
        cardList[1].getCompareValue() === cardList[4].getCompareValue() - 2
      ) {
        return 6;
      }
    } else if (cardList[2].getCompareValue() === cardList[3].getCompareValue()) {
      if (
        cardList[0].getCompareValue() === cardList[2].getCompareValue() - 2 &&
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1
      ) {
        return 6;
      }
  
      if (
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
        cardList[4].getCompareValue() === cardList[2].getCompareValue() + 1
      ) {
        return 6;
      }
    } else if (cardList[3].getCompareValue() === cardList[4].getCompareValue()) {
      if (
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2 &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() - 1
      ) {
        return 6;
      }
    }
  
    // Check for double double runs of three
    else if (
      (cardList[0].getCompareValue() === cardList[1].getCompareValue() &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() &&
        cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
        cardList[3].getCompareValue() === cardList[4].getCompareValue() - 1) ||
      (cardList[1].getCompareValue() === cardList[2].getCompareValue() &&
        cardList[3].getCompareValue() === cardList[4].getCompareValue() &&
        cardList[2].getCompareValue() === cardList[3].getCompareValue() - 1 &&
        cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1) ||
      (cardList[0].getCompareValue() === cardList[1].getCompareValue() &&
        cardList[3].getCompareValue() === cardList[4].getCompareValue() &&
        cardList[1].getCompareValue() === cardList[3].getCompareValue() - 1 &&
        cardList[2].getCompareValue() === cardList[1].getCompareValue() + 1)
    ) {
      return 12;
    }
  
    // Check for runs of four
    else if (
      cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1 &&
      cardList[0].getCompareValue() === cardList[2].getCompareValue() - 2 &&
      cardList[0].getCompareValue() === cardList[3].getCompareValue() - 3
    ) {
      return 4;
    } else if (
      cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
      cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2 &&
      cardList[1].getCompareValue() === cardList[4].getCompareValue() - 3
    ) {
      return 4;
    }
  
    // Check for all possible runs of three
    else if (
      cardList[0].getCompareValue() === cardList[1].getCompareValue() - 1 &&
      cardList[0].getCompareValue() === cardList[2].getCompareValue() - 2
    ) {
      return 3;
    } else if (
      cardList[1].getCompareValue() === cardList[2].getCompareValue() - 1 &&
      cardList[1].getCompareValue() === cardList[3].getCompareValue() - 2
    ) {
      return 3;
    } else if (
      cardList[2].getCompareValue() === cardList[3].getCompareValue() - 1 &&
      cardList[2].getCompareValue() === cardList[4].getCompareValue() - 2
    ) {
      return 3;
    }
  
    return 0;
  }
  
  

  function countFifteensWithFiveCards(CardOne, CardTwo, CardThree, CardFour, CardFive) {
    const cards = [CardOne, CardTwo, CardThree, CardFour, CardFive];
    let combinations = 0.00;
    const maxCombinations = Math.pow(2, cards.length) - 1;

    for (let i = 1; i <= maxCombinations; i++) {
        let sum = 0;

        for (let j = 0; j < cards.length; j++) {
            if ((i & (1 << j)) !== 0) {
                sum += cards[j].getValue();
            }
        }

        if (sum === 15) {
            combinations++;
        }
    }

    return combinations * 2; // Each combination of 15 gives 2 points
}


function getAllPossibleHands(cards, cardOne) {

    const allPossibleHands = new Array(15);

    
    // Initialize each row with an empty array
    for (let i = 0; i < allPossibleHands.length; i++) {
        allPossibleHands[i] = new Array(13).fill(null); // Initialize each element as null
    }

    // Declare the inner values as card objects
    for (let i = 0; i < allPossibleHands.length; i++) {
        for (let j = 0; j < allPossibleHands[i].length; j++) {
            allPossibleHands[i][j] = Object.create(Card);
        }
    }

    let index = 0;
    for (let i = 0; i < cards.length - 3; i++) {
        for (let j = i + 1; j < cards.length - 2; j++) {
            for (let k = j + 1; k < cards.length - 1; k++) {
                for (let l = k + 1; l < cards.length; l++) {
                    allPossibleHands[index][0] = cards[i];
                    allPossibleHands[index][1] = cards[j];
                    allPossibleHands[index][2] = cards[k];
                    allPossibleHands[index][3] = cards[l];


                    allPossibleHands[index][4] = Object.create(Card);
                    allPossibleHands[index][4].name = "";
                    allPossibleHands[index][4].suit = "";
                    allPossibleHands[index][4].value = 0;

                    allPossibleHands[index][5] = Object.create(Card);
                    allPossibleHands[index][5].name = "";
                    allPossibleHands[index][5].suit = "";
                    allPossibleHands[index][5].value = 0;

                    allPossibleHands[index][8] = Object.create(Card);
                    allPossibleHands[index][8].name = "";
                    allPossibleHands[index][8].suit = "";
                    allPossibleHands[index][8].value = 0;

                    allPossibleHands[index][9] = Object.create(Card);
                    allPossibleHands[index][9].name = "";
                    allPossibleHands[index][9].suit = "";
                    allPossibleHands[index][9].value = 0;

                    allPossibleHands[index][10] = Object.create(Card);
                    allPossibleHands[index][10].name = "";
                    allPossibleHands[index][10].suit = "";
                    allPossibleHands[index][10].value = 0;

                    allPossibleHands[index][11] = Object.create(Card);
                    allPossibleHands[index][11].name = "";
                    allPossibleHands[index][11].suit = "";
                    allPossibleHands[index][11].value = 0;

                    allPossibleHands[index][12] = Object.create(Card);
                    allPossibleHands[index][12].name = "";
                    allPossibleHands[index][12].suit = "";
                    allPossibleHands[index][12].value = 0;


                    /*

                    allPossibleHands[index][4] = { name: "", suit: "", value: 0 }; // Add a field to store the total points of four cards
                    allPossibleHands[index][5] = { name: "", suit: "", value: 0 }; // Add a field to store the total points of five cards
                    allPossibleHands[index][8] = { name: "", suit: "", value: 0 }; // Add a field to store the total points of crib
                    allPossibleHands[index][9] = { name: "", suit: "", value: 0 }; // Add a field to store the total points of hand + crib
                    allPossibleHands[index][10] = { name: "", suit: "", value: 0 }; // Add a field to store the total points of hand - crib
                    allPossibleHands[index][11] = { name: "", suit: "", value: 0 }; // Add a field to store the ranking of this hand if it's your crib
                    allPossibleHands[index][12] = { name: "", suit: "", value: 0 }; // Add a field to store the ranking of this hand if it's their crib
*/
                    //index 6 and 7 store the two discarded cards
                    // Store the two discarded cards
                    let discardedCardIndex = 0;
                    for (let m = 0; m < cards.length; m++) {
                      if (m != i && m != j && m != k && m != l) {
                        allPossibleHands[index][6 + discardedCardIndex] = cards[m];
                        discardedCardIndex++;
                        if (discardedCardIndex == 2) {
                          break; // We have stored both discarded cards, so exit the loop
                        }
                      }
                    }

                    index++
                }
            }
        }
    }
    return allPossibleHands;
  }
  
  

function printAllPossibleHands(myHand, cardOne){
		
		
    //console.log('All possible hands')
        
    let allPossibleHands = getAllPossibleHands(myHand, cardOne);

    

    for(let i = 0; i < 15; i++){

     // console.log('This hand is ')

        for(let j = 0; j < 4; j++){

            //console.log(allPossibleHands[i][j].getName() + ' of ' +allPossibleHands[i][j].getSuit())

        }

        //console.log("Discarded cards are " + allPossibleHands[i][6].getName() +" "+ allPossibleHands[i][7].getName());

    }

    return allPossibleHands;
}

function declareDiscardedArray(allPossibleHands){

    const discardedCards = new Array(15);

    
    // Initialize each row with an empty array
    for (let i = 0; i < discardedCards.length; i++) {
        discardedCards[i] = new Array(2).fill(null); // Initialize each element as null
    }

    // Declare the inner values as card objects
    for (let i = 0; i < discardedCards.length; i++) {
        for (let j = 0; j < discardedCards[i].length; j++) {
            discardedCards[i][j] = Object.create(Card);
        }
    }
	
    for(let i = 0; i < 15; i++){
        
        discardedCards[i][0] = allPossibleHands[i][6];
        discardedCards[i][1] = allPossibleHands[i][7];
        
    }

    return discardedCards;
}

function calculatePointsFromHand(totalNumberOfPointsWithFiveCards, allPossibleHands, leftoverCards){
		
    for(let i = 0; i < allPossibleHands.length; i++){
        
    
        for(let j = 0; j < leftoverCards.length; j++){
            
        
            totalNumberOfPointsWithFiveCards += countFifteensWithFiveCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3], leftoverCards[j]);

            
            totalNumberOfPointsWithFiveCards += pairWithFiveCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3], leftoverCards[j]);
            
            if(flushWithFiveCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3], leftoverCards[j])){
                
                     totalNumberOfPointsWithFiveCards += 5;
            }else if(flushWithFourCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3])){
                
                     totalNumberOfPointsWithFiveCards += 4;
            }
            
    
            totalNumberOfPointsWithFiveCards += checkJacksWithFiveCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3], leftoverCards[j]);

            totalNumberOfPointsWithFiveCards += checkRunsWithFiveCards(allPossibleHands[i][0], allPossibleHands[i][1], allPossibleHands[i][2], allPossibleHands[i][3], leftoverCards[j])


        }
        
        totalNumberOfPointsWithFiveCards = totalNumberOfPointsWithFiveCards/46;

        allPossibleHands[i][5].setValue(totalNumberOfPointsWithFiveCards);

        totalNumberOfPointsWithFiveCards = 0;

    }

  }

    

function calculatePointsFromCrib(leftoverCards, discardedCards, pointsFromCrib, allPossibleHands) {
    for (let q = 0; q < discardedCards.length; q++) {
      for (let i = 0; i < leftoverCards.length - 2; i++) {
        for (let j = i + 1; j < leftoverCards.length - 1; j++) {
          for (let k = j + 1; k < leftoverCards.length; k++) {
            let card1 = leftoverCards[i];
            let card2 = leftoverCards[j];
            let card3 = leftoverCards[k];
  
            pointsFromCrib += checkRunsWithFiveCards(discardedCards[q][0], discardedCards[q][1], card1, card2, card3);
  
            pointsFromCrib += countFifteensWithFiveCards(discardedCards[q][0], discardedCards[q][1], card1, card2, card3);
  
            pointsFromCrib += pairWithFiveCards(discardedCards[q][0], discardedCards[q][1], card1, card2, card3);
  
            if (flushWithFiveCards(discardedCards[q][0], discardedCards[q][1], card1, card2, card3)) {
              pointsFromCrib += 5;
            }
          }
        }
      }
  
      pointsFromCrib = pointsFromCrib / 15180;
  
      allPossibleHands[q][8].setValue(pointsFromCrib);
  
      pointsFromCrib = 0;
    }
  }


  function getBestHandWhenYourCrib(allPossibleHands){

    for(let i = 0; i < allPossibleHands.length; i++){
        allPossibleHands[i][9].setValue(allPossibleHands[i][5].getValue() + allPossibleHands[i][8].getValue()) 
    }

    let bestIndex = 0;

    let totalNumPoints = 0;

    for(let i = 0; i < allPossibleHands.length; i++){

        if(allPossibleHands[i][9].getValue() > totalNumPoints){
            totalNumPoints = allPossibleHands[i][9].getValue()
            bestIndex = i;
        }

    }

    return bestIndex;

  }

  function getBestHandWhenNotYourCrib(allPossibleHands){

    for(let i = 0; i < allPossibleHands.length; i++){
        allPossibleHands[i][10].setValue(allPossibleHands[i][5].getValue() - allPossibleHands[i][8].getValue())
    }

    let bestIndex = 0;

    let totalNumPoints = 0;


    for(let i = 0; i < allPossibleHands.length; i++){

        if(allPossibleHands[i][10].getValue() > totalNumPoints){
            totalNumPoints = allPossibleHands[i][10].getValue()
            bestIndex = i;
        }

    }

    return bestIndex;
}


function changeCards(allPossibleHands, index) {
    const newCardImagesDiv = document.getElementById("newCardImage");
    clearCardImages(newCardImagesDiv); // Clear the existing card images
  
    for (let i = 0; i < 4; i++) {
      const img = document.createElement("img");

      const folderPath = 'cardImages/'

      img.src = folderPath + 
        allPossibleHands[index][i].getName() +
        "Of" +
        allPossibleHands[index][i].getSuit() +
        ".png";
  
      img.classList.add("new-card-image");
  
      // Append the <img> element to the newCardImage div
      newCardImagesDiv.appendChild(img);
    }
  }
  


function handleCribSelection(isYourCrib, index) {
    if (isYourCrib) {
      console.log("You selected your crib.");

      for(let i = 0; i < allPossibleHands.length; i++){
           // console.log("Total number of points is " + allPossibleHands[i][9].getValue())

      }

      console.log("The best number of points is " + allPossibleHands[index][9].getValue())


      changeCards(allPossibleHands, index)

    } else {
      console.log("You selected not your crib.");

      for(let i = 0; i < allPossibleHands.length; i++){
        //console.log("Total number of points is " + allPossibleHands[i][10].getValue() + ' of ' + allPossibleHands[i][10].getSuit())

    }

    console.log("The best number of points is " + allPossibleHands[index][10].getValue())


      changeCards(allPossibleHands, index)

    }
  }

  function createDeck() {
    var deck = [];
  
    var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    
    var names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  
    // Loop through suits and names to create each card
    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < names.length; j++) {
        var card = Object.create(Card);
        card.setSuit(suits[i]);
        card.setName(names[j]);

        if(names[j] === 'Ace'){
            card.setCompareValue('Ace')

        }else if(names[j] === 'Two'){
            card.setCompareValue('Two')
        }
        else if(names[j] === 'Three'){
            card.setCompareValue('Three')


        }else if(names[j] === 'Four'){
            card.setCompareValue('Four')


        }else if(names[j] === 'Five'){
            card.setCompareValue('Five')


        }else if(names[j] === 'Six'){
            card.setCompareValue('Six')


        }else if(names[j] === 'Seven'){
            card.setCompareValue('Seven')


        }else if(names[j] === 'Eight'){
            card.setCompareValue('Eight')


        }else if(names[j] === 'Nine'){
            card.setCompareValue('Nine')


        }else if(names[j] === 'Ten'){
            card.setCompareValue('Ten')


        }else if(names[j] === 'Jack'){
            card.setCompareValue('Jack')


        }else if(names[j] === 'Queen'){
            card.setCompareValue('Queen')

        }else if(names[j] === 'King'){
            card.setCompareValue('King')
        } 

        deck.push(card);
      }
    }
        /*
        console.log('Testing testing')
        for(let i = 0; i < deck.length; i++){
            console.log(deck[i].getCompareValue())
        }
      */
    return deck;
}
  function getLeftOverCards(deck, card1, card2, card3, card4, card5, card6) {
    
    for(let i = 0; i < deck.length; i++){
        
        if(deck[i].getName() === card1.getName() && deck[i].getSuit() === card1.getSuit()|| 
        deck[i].getName() === card2.getName() && deck[i].getSuit() === card2.getSuit()|| 
        deck[i].getName() === card3.getName() && deck[i].getSuit() === card3.getSuit() ||
        deck[i].getName() === card4.getName() && deck[i].getSuit() === card4.getSuit()||
        deck[i].getName() === card5.getName() && deck[i].getSuit() === card5.getSuit()|| 
        deck[i].getName() === card6.getName() && deck[i].getSuit() === card6.getSuit()){
            deck.splice(i, 1)
            i = i - 1;

        }

    }

    return deck;
  }


let cardOne = Object.create(Card);
let cardTwo = Object.create(Card);
let cardThree = Object.create(Card);
let cardFour = Object.create(Card);
let cardFive = Object.create(Card);
let cardSix = Object.create(Card);

displaySelectedCards();



// Add event listeners to each dropdown menu
for (let i = 1; i <= 6; i++) {
    const cardsDropdown = document.getElementById("cards" + i);
    const suitsDropdown = document.getElementById("suits" + i);
  
    cardsDropdown.addEventListener("change", displaySelectedCards);
    suitsDropdown.addEventListener("change", displaySelectedCards);
  }

//This sets each of the 6 cards to have the correct value, name, suit, and compare value
function displaySelectedCards() {
    const cardImagesDiv = document.getElementById("cardImage");
    clearCardImages(cardImagesDiv); // Clear the existing card images
  
    const folderPath = 'cardImages/'


    // Loop through each card section
    for (let i = 1; i <= 6; i++) {
      const cardValue = document.getElementById("cards" + i).value;
      const suitValue = document.getElementById("suits" + i).value;
  

      // Create an <img> element for each card
      const img = document.createElement("img");
      img.src = folderPath + cardValue + "Of" + suitValue + ".png";
      img.classList.add("card-image");
  
      // Append the <img> element to the cardImage div
      cardImagesDiv.appendChild(img);
  
      if (i === 1) {
        cardOne.setName(cardValue);
        cardOne.setSuit(suitValue);
        cardOne.setCompareValue(cardValue);
      } else if (i === 2) {
        cardTwo.setName(cardValue);
        cardTwo.setSuit(suitValue);
        cardTwo.setCompareValue(cardValue);
      } else if (i === 3) {
        cardThree.setName(cardValue);
        cardThree.setSuit(suitValue);
        cardThree.setCompareValue(cardValue);
      } else if (i === 4) {
        cardFour.setName(cardValue);
        cardFour.setSuit(suitValue);
        cardFour.setCompareValue(cardValue);
      } else if (i === 5) {
        cardFive.setName(cardValue);
        cardFive.setSuit(suitValue);
        cardFive.setCompareValue(cardValue);
      } else if (i === 6) {
        cardSix.setName(cardValue);
        cardSix.setSuit(suitValue);
        cardSix.setCompareValue(cardValue);
      }
    }
    
    let deck = createDeck();
    let myHand = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix];
  
    let remainingCards = getLeftOverCards(deck, cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix);
  
    allPossibleHands = printAllPossibleHands(myHand, cardOne)
  
    discardedCards = declareDiscardedArray(allPossibleHands)
  
    let totalNumberOfPointsWithFiveCards = 0;
  
    calculatePointsFromHand(totalNumberOfPointsWithFiveCards, allPossibleHands, remainingCards);
  
    let pointsFromCrib = 0;
  
    calculatePointsFromCrib(remainingCards, discardedCards, pointsFromCrib, allPossibleHands);
  
    let bestIndexYourCrib = getBestHandWhenYourCrib(allPossibleHands)
    let bestIndexNotYourCrib = getBestHandWhenNotYourCrib(allPossibleHands);
  
    let yourCribBtn = document.getElementById("your-crib");
    let notYourCribBtn = document.getElementById("not-your-crib");
  
    // Update the event listeners for the buttons
    yourCribBtn.removeEventListener("click", handleCribSelection);
    yourCribBtn.addEventListener("click", function () {
      handleCribSelection(true, bestIndexYourCrib);
    });
  
    notYourCribBtn.removeEventListener("click", handleCribSelection);
    notYourCribBtn.addEventListener("click", function () {
      handleCribSelection(false, bestIndexNotYourCrib);
    });
  
    // Call handleCribSelection with the default selected index (your crib) to show the new cards immediately
    handleCribSelection(true, bestIndexYourCrib);

    main(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix)
  }
  
  
  function clearCardImages(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  


function main(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix){

  let deck = createDeck();

  let myHand = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix];

/*
  for(let i = 0; i < myHand.length; i++){

    console.log(myHand[i].getName() + ' of ' + myHand[i].getSuit())

  }
*/
  let remainingCards = getLeftOverCards(deck, cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix);

  allPossibleHands = printAllPossibleHands(myHand, cardOne)

  discardedCards = declareDiscardedArray(allPossibleHands)

  let totalNumberOfPointsWithFiveCards = 0;

  calculatePointsFromHand(totalNumberOfPointsWithFiveCards, allPossibleHands, remainingCards);

  let pointsFromCrib = 0;

  calculatePointsFromCrib(remainingCards, discardedCards, pointsFromCrib, allPossibleHands);

  


  let bestIndexYourCrib = getBestHandWhenYourCrib(allPossibleHands)

  let bestIndexNotYourCrib = getBestHandWhenNotYourCrib(allPossibleHands)
  var yourCribBtn = document.getElementById("your-crib");
  var notYourCribBtn = document.getElementById("not-your-crib");

  rechangeCardImages();
    
    yourCribBtn.addEventListener("click", function() {
        handleCribSelection(true, bestIndexYourCrib);
        console.log('Got here')
    });
        
    notYourCribBtn.addEventListener("click", function() {
        handleCribSelection(false, bestIndexNotYourCrib);
    }); 

    for(let i = 0; i < 15; i++){

        console.log('This hand is ')
    
          for(let j = 0; j < 4; j++){
    
              console.log(allPossibleHands[i][j].getName() + ' of ' +allPossibleHands[i][j].getSuit())
    
          }
    
          console.log('Total number of points is ' + allPossibleHands[i][5].getValue())
    
      }
    
}


function eraseCardImages() {
    const cardImages = document.querySelectorAll('.card-image');
    const newCardImages = document.querySelectorAll('.new-card-image');
  
    // Loop through each card image and set its src attribute to blank
    cardImages.forEach((image) => {
      image.src = '';
    });
  
    // Loop through each new card image and set its src attribute to blank
    newCardImages.forEach((image) => {
      image.src = '';
    });
  }

  function rechangeCardImages(){

    /*
    console.log('Card one is ' +cardOne.getName() + ' of ' + cardOne.getSuit())
    console.log('Card two is ' +cardTwo.getName() + ' of ' + cardTwo.getSuit())
    console.log('Card three is ' +cardThree.getName() + ' of ' + cardThree.getSuit())
    console.log('Card four is ' +cardFour.getName() + ' of ' + cardFour.getSuit())
    console.log('Card five is ' +cardFive.getName() + ' of ' + cardFive.getSuit())
    console.log('Card six is ' +cardSix.getName() + ' of ' + cardSix.getSuit())
*/

  }

  function handleButtonClick(event) {
    // Get all buttons
    const buttons = document.querySelectorAll(".button");

    // Remove the active class from all buttons
    buttons.forEach(button => button.classList.remove("active"));

    // Add the active class to the clicked button
    event.target.classList.add("active");
}



//This function handles not being able to select the same card
function updateDisabledOptions() {


                let selectedCardValueOne = cards1.value;
                let selectedSuitValueOne = suits1.value;

                let selectedCardValueTwo = cards2.value;
                let selectedSuitValueTwo = suits2.value;

                let selectedCardValueThree = cards3.value;
                let selectedSuitValueThree = suits3.value;

                let selectedCardValueFour = cards4.value;
                let selectedSuitValueFour = suits4.value;

                let selectedCardValueFive = cards5.value;
                let selectedSuitValueFive = suits5.value;

                let selectedCardValueSix = cards6.value;
                let selectedSuitValueSix = suits6.value;


                //This does the first option, part 1


                // Enable all options first
                for (let option of suits2.options) {
                  option.disabled = false;
                }

        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits2.options) {
                  if (option.value === selectedSuitValueOne && cards2.value === selectedCardValueOne
                        || option.value === selectedSuitValueThree && cards2.value === selectedCardValueThree
                        || option.value === selectedSuitValueFour && cards2.value === selectedCardValueFour
                        || option.value === selectedSuitValueFive && cards2.value === selectedCardValueFive
                        || option.value === selectedSuitValueSix && cards2.value === selectedCardValueSix) {
                    option.disabled = true;
                  }
                }


                //Now were doing the first option, part 2
              

                for (let option of cards2.options) {
                  option.disabled = false;
                }
        
               
                // Disable the corresponding suit in the second dropdown
                for (let option of cards2.options) {
                  if (option.value === selectedCardValueOne && suits2.value === selectedSuitValueOne
                        || option.value === selectedCardValueThree && suits2.value === selectedSuitValueThree
                        || option.value === selectedCardValueFour && suits2.value === selectedSuitValueFour
                        || option.value === selectedCardValueFive && suits2.value === selectedSuitValueFive
                        || option.value === selectedCardValueSix && suits2.value === selectedSuitValueSix) {
                    option.disabled = true;
                  }
                }


                //Now were doing the second option, part 1

                // Enable all options first
                for (let option of suits1.options) {
                  option.disabled = false;
                }
        
              
        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits1.options) {
                  if (option.value === selectedSuitValueTwo && cards1.value === selectedCardValueTwo
                        || option.value === selectedSuitValueThree && cards1.value === selectedCardValueThree
                        || option.value === selectedSuitValueFour && cards1.value === selectedCardValueFour
                        || option.value === selectedSuitValueFive && cards1.value === selectedCardValueFive
                        || option.value === selectedSuitValueSix && cards1.value === selectedCardValueSix) {
                    option.disabled = true;
                  }
                }


                //Now were doing the second option, part 2

                for (let option of cards1.options) {
                  option.disabled = false;
                }
        
                
                // Disable the corresponding suit in the second dropdown
                for (let option of cards1.options) {
                  if (option.value === selectedCardValueTwo && suits1.value === selectedSuitValueTwo
                        || option.value === selectedCardValueThree && suits1.value === selectedSuitValueThree
                        || option.value === selectedCardValueFour && suits1.value === selectedSuitValueFour
                        || option.value === selectedCardValueFive && suits1.value === selectedSuitValueFive
                        || option.value === selectedCardValueSix && suits1.value === selectedSuitValueSix) {
                    option.disabled = true;
                  }
                }


                //Now were doing the third option, part 1


                // Enable all options first
                for (let option of suits3.options) {
                  option.disabled = false;
                }
        
              
        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits3.options) {
                  if (option.value === selectedSuitValueTwo && cards3.value === selectedCardValueTwo
                        || option.value === selectedSuitValueOne && cards3.value === selectedCardValueOne
                        || option.value === selectedSuitValueFour && cards3.value === selectedCardValueFour
                        || option.value === selectedSuitValueFive && cards3.value === selectedCardValueFive
                        || option.value === selectedSuitValueSix && cards3.value === selectedCardValueSix) {
                    option.disabled = true;
                  }
                }

                //Third option, part 2

                for (let option of cards3.options) {
                  option.disabled = false;
                }
        
                
                // Disable the corresponding suit in the second dropdown
                for (let option of cards3.options) {
                  if (option.value === selectedCardValueTwo && suits3.value === selectedSuitValueTwo
                        || option.value === selectedCardValueOne && suits3.value === selectedSuitValueOne
                        || option.value === selectedCardValueFour && suits3.value === selectedSuitValueFour
                        || option.value === selectedCardValueFive && suits3.value === selectedSuitValueFive
                        || option.value === selectedCardValueSix && suits3.value === selectedSuitValueSix) {
                    option.disabled = true;
                  }
                }



                //Now were doing the fourth option, part 1


                // Enable all options first
                for (let option of suits4.options) {
                  option.disabled = false;
                }
        
              
        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits4.options) {
                  if (option.value === selectedSuitValueTwo && cards4.value === selectedCardValueTwo
                        || option.value === selectedSuitValueOne && cards4.value === selectedCardValueOne
                        || option.value === selectedSuitValueThree && cards4.value === selectedCardValueThree
                        || option.value === selectedSuitValueFive && cards4.value === selectedCardValueFive
                        || option.value === selectedSuitValueSix && cards4.value === selectedCardValueSix) {
                    option.disabled = true;
                  }
                }

                //Fourth option, part 2

                for (let option of cards4.options) {
                  option.disabled = false;
                }
        
                
                // Disable the corresponding suit in the second dropdown
                for (let option of cards4.options) {
                  if (option.value === selectedCardValueTwo && suits4.value === selectedSuitValueTwo
                        || option.value === selectedCardValueOne && suits4.value === selectedSuitValueOne
                        || option.value === selectedCardValueThree && suits4.value === selectedSuitValueThree
                        || option.value === selectedCardValueFive && suits4.value === selectedSuitValueFive
                        || option.value === selectedCardValueSix && suits4.value === selectedSuitValueSix) {
                    option.disabled = true;
                  }
                }


                 //Now were doing the fifth option, part 1


                // Enable all options first
                for (let option of suits5.options) {
                  option.disabled = false;
                }
        
              
        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits5.options) {
                  if (option.value === selectedSuitValueTwo && cards5.value === selectedCardValueTwo
                        || option.value === selectedSuitValueOne && cards5.value === selectedCardValueOne
                        || option.value === selectedSuitValueThree && cards5.value === selectedCardValueThree
                        || option.value === selectedSuitValueFour && cards5.value === selectedCardValueFour
                        || option.value === selectedSuitValueSix && cards5.value === selectedCardValueSix) {
                    option.disabled = true;
                  }
                }

                //fifth option, part 2

                for (let option of cards5.options) {
                  option.disabled = false;
                }
        
                
                // Disable the corresponding suit in the second dropdown
                for (let option of cards5.options) {
                  if (option.value === selectedCardValueTwo && suits5.value === selectedSuitValueTwo
                        || option.value === selectedCardValueOne && suits5.value === selectedSuitValueOne
                        || option.value === selectedCardValueThree && suits5.value === selectedSuitValueThree
                        || option.value === selectedCardValueFour && suits5.value === selectedSuitValueFour
                        || option.value === selectedCardValueSix && suits5.value === selectedSuitValueSix) {
                    option.disabled = true;
                  }
                }


                //Now were doing the sixth option, part 1


                // Enable all options first
                for (let option of suits6.options) {
                  option.disabled = false;
                }
        
              
        
                // Disable the corresponding suit in the second dropdown
                for (let option of suits6.options) {
                  if (option.value === selectedSuitValueTwo && cards6.value === selectedCardValueTwo
                        || option.value === selectedSuitValueOne && cards6.value === selectedCardValueOne
                        || option.value === selectedSuitValueThree && cards6.value === selectedCardValueThree
                        || option.value === selectedSuitValueFour && cards6.value === selectedCardValueFour
                        || option.value === selectedSuitValueFive && cards6.value === selectedCardValueFive) {
                    option.disabled = true;
                  }
                }

                //Sixth option, part 2

                for (let option of cards6.options) {
                  option.disabled = false;
                }
        
                
                // Disable the corresponding suit in the second dropdown
                for (let option of cards6.options) {
                  if (option.value === selectedCardValueTwo && suits6.value === selectedSuitValueTwo
                        || option.value === selectedCardValueOne && suits6.value === selectedSuitValueOne
                        || option.value === selectedCardValueThree && suits6.value === selectedSuitValueThree
                        || option.value === selectedCardValueFour && suits6.value === selectedSuitValueFour
                        || option.value === selectedCardValueFive && suits6.value === selectedSuitValueFive) {
                    option.disabled = true;
                  }
                }





              }


// Attach event listeners to buttons
document.getElementById("your-crib").addEventListener("click", handleButtonClick);
document.getElementById("not-your-crib").addEventListener("click", handleButtonClick);


//These event listeners work with the funtion that doesnt allow the same card to be chosen twice

const cards1 = document.getElementById('cards1');
const suits1 = document.getElementById('suits1');
const cards2 = document.getElementById('cards2');
const suits2 = document.getElementById('suits2');
const cards3 = document.getElementById('cards3');
const suits3 = document.getElementById('suits3');
const cards4 = document.getElementById('cards4');
const suits4 = document.getElementById('suits4');
const cards5 = document.getElementById('cards5');
const suits5 = document.getElementById('suits5');
const cards6 = document.getElementById('cards6');
const suits6 = document.getElementById('suits6');
        

cards1.addEventListener('change', updateDisabledOptions);
suits1.addEventListener('change', updateDisabledOptions);

cards2.addEventListener('change', updateDisabledOptions);
suits2.addEventListener('change', updateDisabledOptions);

cards3.addEventListener('change', updateDisabledOptions);
suits3.addEventListener('change', updateDisabledOptions);

cards4.addEventListener('change', updateDisabledOptions);
suits4.addEventListener('change', updateDisabledOptions);

cards5.addEventListener('change', updateDisabledOptions);
suits5.addEventListener('change', updateDisabledOptions);

cards6.addEventListener('change', updateDisabledOptions);
suits6.addEventListener('change', updateDisabledOptions);
        
// Trigger the update once to disable initial selections
updateDisabledOptions();
