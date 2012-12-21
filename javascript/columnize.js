function columnizeItemOrder(id, numColumns) {
	function swapItems(list, item) {
		item = list.removeChild(item);
		list.insertBefore(item, items[items.length - 1]);
	}

	var list = document.getElementById(id);
	var items = list.getElementsByTagName("li");
	var orderedItems = [];
	var perCol = Math.floor(items.length / numColumns);
	for(var i = 0, j = 0; j < perCol; j++) {
		for(var c = 0; c < numColumns; i++, c++) {
			if(i < items.length - 1)
				orderedItems[i] = items[j + perCol * c];
		}
	}

	for(var i = 0; i < orderedItems.length; i++) {
		swapItems(list, orderedItems[i]);
	}
}
