console.log('here');

    function onCardClicked(e) {
        const target = e.currentTarget;
        console.log(target.className);
        target.className = target.className
        .replace('color-hidden', '')
        .trim();

    }