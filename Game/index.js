let clickedCard = null;
let preventClick = false;
let combosFound = 0;

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
                    alert('YOU WIN')
                }
            }
        }

    

}