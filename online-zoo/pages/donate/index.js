window.addEventListener('DOMContentLoaded', function() {
    //burger
    burgerMenuHandler(); 
    openMenuHandler();
    stopBurgerPropagation();   

    //amounts
    buttonsHandler();
    inputHandler();
});


// burger 

const MENU = document.querySelector('.header__nav');
const BURGER =  document.querySelector('.header__burger');
const BODY = document.querySelector('body');

const toggleMENU = () => {
    MENU.classList.toggle('header__nav_active'); 
    BODY.classList.toggle('overflow-hidden');        
}

const burgerMenuHandler = () => {
    BURGER.addEventListener('click', () => {
        toggleMENU();
    })
}

const stopBurgerPropagation = () => {
    BURGER.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

const openMenuHandler = () => {
    document.addEventListener('click', (e) => {
        let target = e.target;
        let its_menu = target == MENU || MENU.contains(target);
        let menu_is_active = MENU.classList.contains('header__nav_active');       

        if ( !its_menu && menu_is_active ) {
            toggleMENU();   
        }        
    });
}


// amounts

const btns = document.querySelectorAll('.amount');
const dollars = document.querySelectorAll('.pick__widget-dollar');
let actualAmount = document.querySelector('.input-number > input');

const buttonsHandler = () => {
    for (const btn of btns) { 
        btn.addEventListener('click', () => {
            clearAciveClasses();
            btn.classList.add('amount_active');           

            let number = btn.dataset.amount;
            activateDollar(number);
            writeAmount(number);
        });
    }
}

const activateDollar = (number) => {
    for (const dollar of dollars) {
        if (dollar.dataset.amount == number) {
            dollar.classList.add('pick__widget-dollar_active');
        }
    }
}

const clearAciveClasses = () => {
    btns.forEach((btn) => {
       btn.classList.remove('amount_active');
    });

    dollars.forEach((dollar) => {
        dollar.classList.remove('pick__widget-dollar_active');
    });
}

const writeAmount = (number) => {
    actualAmount.value = number;
}

const inputHandler = () => {
    actualAmount.oninput = function() {
        actualAmount.value = actualAmount.value.slice(0, 4);
    }

    actualAmount.addEventListener('input', () => {
        clearAciveClasses();
        for (const btn of btns) {
            if (btn.dataset.amount == actualAmount.value) {
                btn.classList.add('amount_active');  
    
                let number = btn.dataset.amount;
                activateDollar(number);
            }        
        }
    });
} 