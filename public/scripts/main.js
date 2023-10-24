class Main {
    constructor() {
        this.pageViewsKey = 'pageViewsCount';
        this.initializeCounter();
        this.displayCount();
    }

    initializeCounter() {
        if (!localStorage.getItem(this.pageViewsKey)) {
            localStorage.setItem(this.pageViewsKey, '0');
        }
    }

    incrementCount() {
        let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
        currentCount++;
        localStorage.setItem(this.pageViewsKey, currentCount.toString());
    }

    displayCount() {
        this.incrementCount();
        // Update count in div id count
        document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey)  + ' times.'
    }
}

// Note that we construct the class here, but we don't need to assign it to a variable.
document.mainClass = new Main();

let clickCount = 0;
        const originalHeaderColor = 'rgba(255, 102, 163, 0.7)';
        const originalBackgroundColor = '#ffebf0';
        const lightBlueHeaderColor = 'rgba(3, 102, 214, 0.7)';
        const lightBlueBackgroundColor = '#b3e0f7';

        function changeBackgroundColor(bodyColor, headerColor) {
            document.body.style.backgroundColor = bodyColor;
            document.querySelector('header').style.backgroundColor = headerColor;
        }

        function changeBackgroundColorOnPicturesClick() {
            clickCount++;

            if (clickCount === 1) {
                changeBackgroundColor(lightBlueBackgroundColor, lightBlueHeaderColor);
            } else if (clickCount === 2) {
                // Change to light purple background with thicker horizontal lines
                document.body.classList.add('light-purple-background');
                document.querySelector('header').style.backgroundColor = 'rgba(112, 48, 160, 0.7)';
            } else if (clickCount === 3) {
                changeBackgroundColor(originalBackgroundColor, originalHeaderColor);
                // Remove the light purple background class
                document.body.classList.remove('light-purple-background');
                clickCount = 0; // Reset click count
            }
        }
        
        const changeBackgroundButton = document.getElementById('changeBackgroundButton');
        changeBackgroundButton.addEventListener('click', changeBackgroundColorOnPicturesClick);
