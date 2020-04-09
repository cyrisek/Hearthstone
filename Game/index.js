let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
    'pink',
    'teal',
    'purple',
    'red',
    'yellow',
    'green',
    'blue',
    'cyan',
]

const cards = document.querySelectorAll('.card');
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.lenght);
    const cardA = cards[cardIndex];
    cards.splice(cardIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.lenght);
    const cardB = cards[cardIndex];
    cards.splice(cardIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);
}
    function onCardClicked(e) {
        const target = e.currentTarget;
        if (
            preventClick ||
            target === clickedCard ||
            target.className.includes('done')){
            return;
        }
        target.className = target.className
            .replace('color-hidden', '')
            .trim();
        target.className += ' done';


        //keep the track of card, display color//
        if (!clickedCard) {
            clickedCard = target;
        } else if (clickedCard) {
             // cheack if the card matches color//
            if (
                clickedCard.getAttribute('data-color') !== 
                target.getAttribute('data-color')
                )               
                // clickedCard.className += ' done';
                // target.className += ' done';
              {
                preventClick = true;
                setTimeout(() => {
                    console.log('we are here!!!');
                    clickedCard.className =
                        clickedCard.className.replace('done', '').trim() + ' color-hidden';
                    target.className =
                        target.className.replace('done', '').trim() + ' color-hidden';
                    clickedCard = null;
                    preventClick = false;
                }, 500);
            } else {
                cobosFound++;
                cardClicked =  null;
                if (combosFound === 8) {
                    alert('YOU WIN');
                }
            }
        }  
}