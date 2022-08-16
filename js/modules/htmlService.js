class HtmlService{
	paintProduct(product) {
		const { id, title, image, price } = product
		return `
			<li class="list-products-shop__item item-products-shop" data-id="${id}">
				<img class="item-products-shop__image" title="Изображение товара ->${title}" src="${image}" alt="Изображение товара" />
				<small>${instanceUtilsService.ellipsis(title)}</small>
				<small>
					<strong>$${price}</strong>
				</small>
			</li>
		`
	}
	paintProducts(products=[]) {
		return products.map(this.paintProduct).join("")
	}
	paintProductsError(text) {
		const message = text ? text : "Произошла ошибка получения данных, перезагрузите страницу или приходите позже..."
		return `<p class="list-products-shop__message-error error-message">${message}</p>`
	}
	paintProductsLoading() {
		return `
		<div class="spinner">
			<div class="spinner__element lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			<div>
		</div>
		`
	}
	paintCartItem(item) {
		const { id, amount, title, price } = item
		return `
			<li class="list-cart__item" data-id="${id}">
				(${amount})
				${title}
				<strong>$${price}</strong>
			</li>
		`
	}
	paintCart({ items, totalPrice }) {
		if (items.length === 0) return `<p class="cart__empty-message">Корзина пуста...</p>`
		return `
			<ul class="cart__list list-cart">
				${items.map(this.paintCartItem).join("")}
			</ul>
			<hr class="cart__element-border" />
			<p class="cart__info info-cart">
				<span>Общая цена: <strong>$${totalPrice.toFixed(2)}</strong></span>
				<button class="info-cart__clear-btn">Очистить корзину</button>
			</p>
		`
	}
}