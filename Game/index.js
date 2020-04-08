console.log('here');

    function onCardClicked(e) {
        const target = e.currentTarget;
        if (target.className.includes('done')){
            return;
        }
        target.className = target.className
            .replace('color-hidden', '')
            .trim();
        console.log(target.getAttribute('data-color'));


        //keep the track of card, display color//
        if (!clickedCard) {
            clickedCard = target;
        } else if (clickedCard) {
            if (clickedCard.getAttribute('data-color')) === target.getAttribute('data-color')){
                clickedCard.className += ' done';
                target.className += ' done';
            }
        }

    // cheack if the card matches color//

}