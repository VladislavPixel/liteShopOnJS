// Instances modules
let instanceProductService
const instanceCartService = new CartService()
const instanceHTMLService = new HtmlService()
const instanceRenderService = new RenderService()
const instanceFetchService = new FetchService()

// Get HTML elements
const productsContainer = document.getElementById("products-container")
const filterInput = document.getElementById("filter")
const cartContainer = document.getElementById("cart-container")

// Обработчик фильтра (Input)
filterInput.addEventListener("input", (event) => {
	const inputValue = event.target.value
	const filterProducts = instanceProductService.filterBy(inputValue)
	instanceRenderService.renderProducts(filterProducts)
})
// Обработка клика по продукту магазина
productsContainer.addEventListener("click", (event) => {
	const element = event.target.closest(".item-products-shop")
	if (element && element.dataset.id) {
		instanceCartService.add(instanceProductService.getById(Number(element.dataset.id)))
		instanceRenderService.renderCart()
	}
})
// Работа с корзиной
cartContainer.addEventListener("click", (event) => {
	const essenceClassList = event.target.classList
	if (essenceClassList.contains("info-cart__clear-btn")) {
		instanceCartService.clear()
		instanceRenderService.renderCart()
	} else if (essenceClassList.contains("list-cart__item")) {
		const id = event.target.dataset.id
		if (id) {
			instanceCartService.remove(id)
			instanceRenderService.renderCart()
		}
	}
})

// Загрузка стартовых данных через API
instanceFetchService.startApplication()
