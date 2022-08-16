class UtilsService{
	ellipsis(string="", maxLength=30) {
		if (string.length <= maxLength) return string
		return string.slice(0, maxLength + 1) + "..."
	}
}

const instanceUtilsService = new UtilsService()
