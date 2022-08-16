class CartService {
	#cart
	constructor(cart={}) {
		this.#cart = cart
	}
	add(product) {
		// Добавление позиции в cart
		const { id, title, price } = product
		if (`${id}` in this.#cart) {
			this.#cart[id].amount++
			return
		}
		this.#cart[id] = { title, price, amount: 1 }
	}
	remove(productId) {
		// Удаление позиции по ID из cart
		if (this.#cart[productId].amount > 1) {
			--this.#cart[productId].amount
		} else {
			delete this.#cart[productId]
		}
	}
	clear() {
		// очистка
		this.#cart = {}
	}
	getInfo() {
		// Получение элементов для отрисовки cart и итоговой суммы
		const items = Object.keys(this.#cart).map(id => {
			const {title, amount, price} = this.#cart[id]
			return { id, title, amount, price}
		})
		const totalPrice = items.reduce((acc, item) => {
			return acc + (item.price * item.amount)
		}, 0)
		return { items, totalPrice }
	}
}
