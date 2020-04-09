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
             // cheack if the card matches color//
            if (
                clickedCard.getAttribute('data-color') === 
                target.getAttribute('data-color')
                ){
                console.log('cards ARE equal');
                // clickedCard.className += ' done';
                // target.className += ' done';
            } else {
                console.log('cards not equal');
                setTimeout(() => {
                    clickedCard.className.replace('done', '').trim();
                    target.className.replace('done', '').trim();
                }, 500);
            }
        }

    

}