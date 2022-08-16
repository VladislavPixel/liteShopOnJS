class ProductService {
	#products
	constructor(products=[]) {
		this.#products = products
	}
	getByIndex(index) {
		return this.#products[index]
	}
	getById(id) {
		return this.#products.find(item => item.id === id)
	}
	getData() {
		return this.#products
	}
	filterBy(search = "") {
		// Фильтрация отрисовываемых данных в зависимости от введенного текста в поисковый инпут
		const searchStrNoSpace = search.trim()
		if (searchStrNoSpace.length === 0) return this.#products
		const filterData = this.#products.filter(item => {
			if (item.title.trim().toLowerCase().includes(searchStrNoSpace.toLowerCase())) return item
			return null
		})
		return filterData
	}
}
