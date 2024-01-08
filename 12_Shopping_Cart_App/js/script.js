// interactive design

const btnCart = document.querySelector('#cart-icon');
const cartMenu = document.querySelector('.cart-menu');
const btnclose = document.querySelector('.btn-close');

btnCart.addEventListener('click', () => {
    console.log('clicked');
    console.log(cartMenu);
    cartMenu.classList.add('cart-active');
});

btnclose.addEventListener('click', () => {
    console.log('clicked');
    cartMenu.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);


function loadFood() {
    console.log('dom loaded');
    loadContent();

};

function loadContent() {

    //cart remove
    const btnRemove = document.querySelectorAll('.cart-remove');
    console.log(btnRemove);

    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeItem);
    });

    // product item
    const qtyElements = document.querySelectorAll('.cart-quantity');
    console.log(qtyElements);
    qtyElements.forEach(input => {
        input.addEventListener('change', changeQty);
    })

    const addCarts = document.querySelectorAll('.add-to-cart');
    addCarts.forEach(addCart => {
        addCart.addEventListener('click', addToCart);
    })

    updateTotal();
    cartCount();
}

// remove functionality
function removeItem() {
    let parentElement = this.parentElement;
    if (confirm('are you sure to remove')) {
        parentElement.remove();
    };

    let title = parentElement.querySelector('.cart-title').innerHTML;
    console.log(title);
    cartItems = cartItems.filter(item => item.title != title);// explain each time
    console.log('item removed from array', cartItems);

    loadContent(); // again loadContent | is it neccessary? 
};

// quantity functionality
function changeQty() {
    //validation
    console.log(this.value);
    if (isNaN(this.value) || this.value < 1) {
        // console.log('Not a Number');
        this.value = 1;
    };
    updateTotal();
}

let cartItems = [];

function addToCart() {
    console.log('clicked');
    console.log(this);

    let parentElement = this.parentElement;
    console.log(parentElement);

    let title = parentElement.querySelector('.food-title').innerHTML;
    let price = parentElement.querySelector('.food-price').innerHTML;
    let imgSrc = parentElement.querySelector('.food-img').src;

    console.log(title, price, imgSrc);

    let newItem = {
        title,
        price,
        imgSrc,
    }
    console.log(newItem);

    console.log(cartItems.find(item => item.title == newItem.title));

    if (cartItems.find(item => item.title == newItem.title)) {
        alert('already added in cart');
        return;
    } else {
        cartItems.push(newItem);
        console.log(cartItems);
    }


    const cartBasket = document.querySelector('.cart-content');
    console.log(cartBasket);

    let newProductElement = createProductElement(title, price, imgSrc);//text node

    let newElement = document.createElement('div');
    newElement.innerHTML = newProductElement;//text node => HTML elements

    console.log(newElement);
    cartBasket.append(newElement);// without converting to node -> as text node
    //cartBasket.innerHTML+=newProductElement;


    loadContent();
}

function createProductElement(title, price, imgSrc) {
    return `
    <div class="cart-item">
    <div class="cart-img">
        <img src="${imgSrc}" alt="">
    </div>
    <div class="cart-details">
        <div class="cart-title">${title}</div>
        <div class="cart-price">
            <div class="default-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <div class="cart-remove">
        <ion-icon name="trash"></ion-icon>
    </div>
</div>`
}

function updateTotal() {
    const cartProducts = document.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');

    let total = 0;

    cartProducts.forEach(product => {
        let defaultPrice = product.querySelector('.default-price').innerHTML;
        console.log(defaultPrice);

        defaultPrice = parseFloat(defaultPrice.replace('Rs.', ''));
        console.log(defaultPrice);
        let qty = product.querySelector('.cart-quantity').value;
        console.log(qty);

        let productAmt = defaultPrice * qty;
        product.querySelector('.cart-amt').innerHTML = "Rs." + productAmt;

        total += productAmt;
    })
    totalPrice.innerHTML = "Rs." + total;
}

function cartCount() {
    let count = cartItems.length;
    const countElement = document.querySelector('#cart-count');
    console.log(countElement, count);

    if (count == 0) {
        countElement.style.display = 'none';
    }
    else {
        countElement.style.display = 'block';
    }
    countElement.innerHTML = count;
}

/*
    mistake:
        put filter instead of find and wrong understanding
    try to take 100% understanding 

    i understand workflow and myself.
*/

// done