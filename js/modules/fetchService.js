class FetchService{
	async startApplication() {
		instanceRenderService.renderCart()
		instanceRenderService.renderProductsLoading()
		try {
			const responce = await fetch(FAKE_STORE_API, {
				method: "GET"
			})
			const products = await responce.json()
			instanceProductService = new ProductService(products)
			// Отрисовка и перерисовка UI/UX
			instanceRenderService.renderProducts(instanceProductService.getData())
		} catch (err) {
			instanceRenderService.renderProductsMessageError()
		}
	}
}
