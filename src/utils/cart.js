/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/* eslint-disable eol-last */
let cart = [];
if (localStorage.getItem("cart")) {
    // eslint-disable-next-line no-unused-vars
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const exsitProduct = cart.find((item) => item.productId == newProduct.productId);
    if (!exsitProduct) {
        cart.push(newProduct);
    } else {
        exsitProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQty = (id, next) => {
    const IncreQty = cart.find(item => item.productId == id)
    if (IncreQty) {
        cart.quantity++
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
};
export const decreaseQty = (id, next) => {
    const currentProduct = cart.find((item) => item.productId == id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemInCart = (id, next) => {
    console.log(id);
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm này không?");
    if (confirm) {
        cart = cart.filter(item => item.productId !== Number(id))
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}