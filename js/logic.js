
document.addEventListener('DOMContentLoaded', function () {
    // Afficher la bannière à chaque chargement de page
    document.getElementById('age-banner').style.display = 'flex';

    // Ajouter un gestionnaire d'événements pour le bouton de confirmation d'âge
    document.getElementById('confirm-age').addEventListener('click', function () {
        document.getElementById('age-banner').style.display = 'none';
    });

    // Ajouter un gestionnaire d'événements pour le bouton de confirmation YouTube
    document.getElementById('confirm-agen').addEventListener('click', function () {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });

    // Fonction pour gérer le texte déroulant en réponse à un clic sur l'image
    function handleTextToggle() {
        var moreText = document.getElementById('more-text');

        // Vérifier si la propriété filter n'est pas définie ou est égale à 'blur(3px)'
        if (!moreText.style.visibility || moreText.style.visibility === 'hidden') {
            moreText.style.visibility = 'visible';
        } else {
            moreText.style.visibility = 'hidden';
        }
    }


    // Ajouter un gestionnaire d'événements pour le clic sur l'image
    var centeredImage = document.getElementById('centered-image');
    centeredImage.addEventListener('click', function () {
        // Vérifier quelle image est actuellement affichée
        if (centeredImage.src.endsWith('img/fleche.png')) {
            // Si l'ancienne image est affichée, changer vers la nouvelle image
            centeredImage.src = 'img/flecheinverse.png';
        } else {
            // Si la nouvelle image est affichée, changer vers l'ancienne image
            centeredImage.src = 'img/fleche.png';
        }
    });

    // Ajouter un gestionnaire d'événements pour le texte déroulant
    document.getElementById('centered-image').addEventListener('click', handleTextToggle);

    document.getElementById('scrollToIntro').addEventListener('click', function () {
        var introTextElement = document.getElementById('intro-text');

        // Faire défiler jusqu'à l'élément intro-text avec une animation fluide
        introTextElement.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scrollToProducts').addEventListener('click', function () {
        var productWrapper = document.getElementById('product-container-wrapper');

        // Faire défiler jusqu'à l'élément product-container-wrapper avec une animation fluide
        productWrapper.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scrollToProducts').addEventListener('click', function () {
        // Get the target element (products) by its id
        var productsElement = document.getElementById('products');

        // Scroll to the target element with smooth behavior
        productsElement.scrollIntoView({ behavior: 'smooth' });
    });


});
document.addEventListener('DOMContentLoaded', function () {
    // ...

    document.getElementById('scrollToProducts').addEventListener('click', function () {
        var productWrapper = document.getElementById('product-container-wrapper');

        // Faire défiler jusqu'à l'élément product-container-wrapper avec une animation fluide
        productWrapper.scrollIntoView({ behavior: 'smooth' });
    });

    // ...
});

function openCart() {
    document.querySelector('.shopping-cart-container').style.right = '0';
    // Update the total when the cart is opened
    updateTotal();
}

function closeCart() {
    document.querySelector('.shopping-cart-container').style.right = '-300px';
}

function addToCart(productTitle, productBasePrice, productImage, quantity) {
    // Vérifier si le produit est déjà dans le panier
    var existingCartItem = findCartItem(productTitle);

    if (existingCartItem) {
        // Mettre à jour la quantité si le produit est déjà dans le panier
        updateCartItemQuantity(existingCartItem, quantity);
    } else {
        // Créer une nouvelle ligne dans le panier si le produit n'est pas déjà présent
        createNewCartItem(productTitle, productBasePrice, productImage, quantity);
    }

    // Mettre à jour le total après l'ajout ou la mise à jour du panier
    updateTotal();
    openCart();
}

function findCartItem(productTitle) {
    // Rechercher le produit dans le panier par le titre
    var cartItems = document.querySelectorAll('.cart-item');
    for (var i = 0; i < cartItems.length; i++) {
        var titleElement = cartItems[i].querySelector('.cart-item-title');
        if (titleElement.innerText === productTitle) {
            return cartItems[i];
        }
    }
    return null;
}

function createNewCartItem(productTitle, productBasePrice, productImage, quantity) {
    // Créer une nouvelle ligne dans le panier
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    cartItem.innerHTML = `
        <div class="cart-item-details">
            <span class="cart-item-image"><img src="${productImage}"></span>
            <span class="cart-item-title">${productTitle}</span>
            <span class="cart-item-quantity">Quantité: ${quantity}</span>
            <span class="cart-item-price">${productBasePrice}€</span>
        </div>
        <button class="remove-from-cart-btn" onclick="removeFromCart(this)">Retirer</button>
    `;

    document.querySelector('.cart-content').appendChild(cartItem);
}

function updateCartItemQuantity(cartItem, newQuantity) {
    // Mettre à jour la quantité du produit existant dans le panier
    var quantityElement = cartItem.querySelector('.cart-item-quantity');
    var matchQuantity = quantityElement.innerText.match(/Quantité: (\d+)/);

    if (matchQuantity) {
        var currentQuantity = parseInt(matchQuantity[1]);
        var updatedQuantity = currentQuantity + parseInt(newQuantity);
        quantityElement.innerText = 'Quantité: ' + updatedQuantity;
    }
}

function removeFromCart(btn) {
    var cartItem = btn.parentNode;
    cartItem.parentNode.removeChild(cartItem);

    // Update the total after removing an item
    updateTotal();
}

function updateTotal() {
    var total = 0;
    var cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(function (cartItem) {
        var quantityElement = cartItem.querySelector('.cart-item-quantity');
        var priceElement = cartItem.querySelector('.cart-item-price');

        var matchQuantity = quantityElement.innerText.match(/Quantité: (\d+)/);
        var matchPrice = priceElement.innerText.match(/([\d.]+)€/);

        if (matchQuantity && matchPrice) {
            var quantity = parseInt(matchQuantity[1]);
            var basePrice = parseFloat(matchPrice[1]);
            total += basePrice * quantity; // Utiliser le prix de base multiplié par la quantité
        }
    });

    document.getElementById('totalAmount').innerText = total.toFixed(2) + '€';
}

function checkout() {
    // Add your checkout logic here
    alert('Checkout clicked!');
}