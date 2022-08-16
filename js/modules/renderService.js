class RenderService{
	renderProducts(data=[]) {
		productsContainer.innerHTML = instanceHTMLService.paintProducts(data)
	}
	renderProductsMessageError(text) {
		productsContainer.innerHTML = instanceHTMLService.paintProductsError(text)
	}
	renderProductsLoading() {
		productsContainer.innerHTML = instanceHTMLService.paintProductsLoading()
	}
	renderCart() {
		cartContainer.innerHTML = instanceHTMLService.paintCart(instanceCartService.getInfo())
	}
}
