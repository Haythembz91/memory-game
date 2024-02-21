document.addEventListener('DOMContentLoaded', () => {
    // Card options
    const cards = [
        {name:'fries', 
         img: 'images/fries.png'},
        {name:'cheeseburger',
        img:'images/cheeseburger.png'},
        {name:'hotdog',
        img:'images/hotdog.png'},
        {name:'ice-cream',
        img:'images/ice-cream.png'},
        {name:'milkshake',
        img:'images/milkshake.png'},
        {name:'pizza',
        img:'images/pizza.png'},
        {name:'fries', 
         img: 'images/fries.png'},
        {name:'cheeseburger',
        img:'images/cheeseburger.png'},
        {name:'hotdog',
        img:'images/hotdog.png'},
        {name:'ice-cream',
        img:'images/ice-cream.png'},
        {name:'milkshake',
        img:'images/milkshake.png'},
        {name:'pizza',
        img:'images/pizza.png'}
    ]
    // Sorting randomly the array
    cards.sort(() => 0.5 - Math.random()) 
    // console.log(cards)
    let cardChosen =[]
    let cardChosenIds = []

    //Create the board
    const grid = document.querySelector('.grid')
    function createBoard (){
        for (let i = 0; i<cards.length; i++){
            let card = document.createElement('img')
            card.src='images/blank.png'
            card.setAttribute('data-id',i)
            card.setAttribute('class', 'card')
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
            
        }
    }
    createBoard()
    let allCards = document.querySelectorAll('.card')
    let result = document.getElementById('result')
    let total = 0
    
    //Function to flip a card
    function flipCard () {
        let dataId = this.getAttribute('data-id')
        cardChosen.push(cards[dataId].name)
        cardChosenIds.push(dataId)
        // console.log(cardChosen)
        // console.log(cardChosenIds)
        // console.log(allCards)
        this.setAttribute('src',cards[dataId].img)
        if (cardChosen.length ===2 ){
           setTimeout(checkMatch,500)

        }
    }
    // Check for match function

    function checkMatch (){
        
        
        if (cardChosenIds[0]===cardChosenIds[1]) {
            alert('You have clicked the same image twice!')
            allCards[cardChosenIds[0]].setAttribute('src','images/blank.png')
            cardChosen=[]
            cardChosenIds=[]
            // console.log(cardChosenIds)
        }
        else if (cardChosen[0]===cardChosen[1]) {
            alert(`Congratulations! You found a match`)
            allCards[cardChosenIds[0]].setAttribute('src','images/white.png')
            allCards[cardChosenIds[1]].setAttribute('src','images/white.png')
            allCards[cardChosenIds[0]].removeEventListener('click',flipCard)
            allCards[cardChosenIds[1]].removeEventListener('click',flipCard)
            total +=1
            if (total === 6){
                result.innerHTML = 'Congratulations! You found them all!!!'}
                else {result.innerHTML = total}
            
            cardChosen=[]
            cardChosenIds=[]
            
        }
        else {
            alert('Sorry, try again')
            allCards[cardChosenIds[1]].setAttribute('src','images/blank.png')
            allCards[cardChosenIds[0]].setAttribute('src','images/blank.png')
            cardChosen=[]
            cardChosenIds=[]
        }
    }


    


    
    
    
        




    

})