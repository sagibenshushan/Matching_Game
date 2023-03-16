document.addEventListener('DOMContentLoaded', ()=>{   
    const cardArray=[
    {
    name:'astronut1',
    img:'images/astronut1.jpg'
    },
    {
    name:'astronut2',
    img:'images/astronut2.jpg'
    },
    {
    name:'astronut3',
    img:'images/astronut3.jpg'
    },
    {
    name:'astronut4',
    img:'images/astronut4.jpg'
    },
    {
    name:'astronut5',
    img:'images/astronut5.jpg'
    },
    {
    name:'astronut6',
    img:'images/astronut6.jpg'
    },
    {
    name:'astronut7',
    img:'images/astronut7.jpg'
    },
    {
    name:'astronut8',
    img:'images/astronut8.jpg'
    },
    {
    name:'astronut9',
    img:'images/astronut9.jpg'
    },
    {
    name:'astronut10',
    img:'images/astronut10.jpg'
    },
    {
    name:'astronut11',
    img:'images/astronut11.jpg'
    },
    {
    name:'astronut12',
    img:'images/astronut12.jpg'
    },
    {
    name:'astronut13',
    img:'images/astronut13.jpg'
    },
    {
    name:'astronut14',
    img:'images/astronut14.jpg'
    },
    {
    name:'astronut15',
    img:'images/astronut15.jpg'
    },
    {
    name:'astronut1',
    img:'images/astronut1.jpg'
    },
    {
    name:'astronut2',
    img:'images/astronut2.jpg'
    },
    {
    name:'astronut3',
    img:'images/astronut3.jpg'
    },
    {
    name:'astronut4',
    img:'images/astronut4.jpg'
    },
    {
    name:'astronut5',
    img:'images/astronut5.jpg'
    },
    {
    name:'astronut6',
    img:'images/astronut6.jpg'
    },
    {
    name:'astronut7',
    img:'images/astronut7.jpg'
    },
    {
    name:'astronut8',
    img:'images/astronut8.jpg'
    },
    {
    name:'astronut9',
    img:'images/astronut9.jpg'
    },
    {
    name:'astronut10',
    img:'images/astronut10.jpg'
    },
    {
    name:'astronut11',
    img:'images/astronut11.jpg'
    },
    {
    name:'astronut12',
    img:'images/astronut12.jpg'
    },
    {
    name:'astronut13',
    img:'images/astronut13.jpg'
    },
    {
    name:'astronut14',
    img:'images/astronut14.jpg'
    },
    {
    name:'astronut15',
    img:'images/astronut15.jpg'
    },
    ]
    cardArray.sort(()=>0.5-Math.random());
    
    const grid =document.querySelector('.grid');
    const resultDisplay=document.querySelector('#result');
    var cardsChosen=[];
    var cardsChosenId=[];
    var cardsWon=[];
    let moves = 0;
    
    
    function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
    var card=document.createElement('img');
    card.setAttribute('src','images/astronut16.jpg');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipcard);
    grid.appendChild(card);
    }
    }
    function checkForMatch()
    {
    var cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1])
    {
    cards[optionOneId].setAttribute('src', 'images/white.jpg');
    cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    cardsWon.push(cardsChosen)
    }
    else {
    
    cards[optionOneId].setAttribute('src','images/astronut16.jpg');
    cards[optionTwoId].setAttribute('src','images/astronut16.jpg');
    }
    
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/2){
    resultDisplay.textContent='you won';
    alert('you won');
    }
    }
    
    function flipcard()
    {
    var cardId=this.getAttribute('data-id');
    var currentCardSrc = this.getAttribute("src");;
    if (currentCardSrc === "images/white.jpg" || currentCardSrc === cardArray[cardId].img) {
    // do not flip the card
    return;
    }
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    moves++;
    document.querySelector('#moves-count').textContent = moves;
    if(cardsChosen.length===2)
    {
    setTimeout(checkForMatch,500)
    }
    }
    createBoard()
    function clearBoard() {
    while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
    }
    }
    
    const newGameButton = document.querySelector("#new-game-btn");
    newGameButton.addEventListener("click", () => {
    moves = 0;
    matches = 0;
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    document.querySelector("#moves-count").textContent = moves;
    document.querySelector("#result").textContent = matches;
    clearBoard();
    cardArray.sort(()=>0.5-Math.random())
    createBoard();
    });
    
    
    })
    