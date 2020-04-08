console.log('here');

    function onCardClicked(e) {
        const target = e.currentTarget;
        
        target.className = target.className
            .replace('color-hidden', '')
            .trim();
        console.log(target.getAttribute('data-color'));


        //keep the track of card, display color//
        if (!clickedCard) {
            clickedCard = target;
        } else if (clickedCard) {

        }

    // cheack if the card matches color//

}