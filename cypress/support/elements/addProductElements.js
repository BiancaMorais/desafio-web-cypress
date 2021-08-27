class addProductElements {
    searchQuery = () => { return '[id=search_query_top]' }
    submitSearch = () => { return '#searchbox > .btn' }
    productList = () => { return '.product_list' }
    productName = () => { return 'Faded Short Sleeve T-shirts' }
    sucessfullMessage = () => { return 'Product successfully added to your shopping cart' }
    layerCartProduct = () => { return '.layer_cart_product' }
    closeWindow = () => { return '.cross' }
    shoppingCart = () => { return '[title="View my shopping cart"]' }
    cartDescription = () => { return '.cart_description > .product-name > a' }
    cartAvail = () => { return '#product_1_1_0_0 > .cart_avail' }
    inStock = () => { return 'In stock' }

}

export default addProductElements;



