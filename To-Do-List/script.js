var items = ["item 1", "item 2", "item 3", "item 4"];

var list = document.querySelector("#myList");
/* var html = ""; ***/
/* Data entry from array */
items.forEach(function (item) {
	/* html += '<li class="list-group-item">' + item + "</li>"; ***/
	CreateItem(item);

	/* createitem i asagıya tasıdık fonksiyon olarak ayrı yaptık.dk30 
	www.youtube.com/watch?v=zgfDYlVrnuo todolist sadikturan */
});
/* list.innerHTML = html; ***/

/* Completed Todo List */
list.addEventListener("click", function (item) {
	/* console.log(item.target.tagName); */
	if ((item.target.tagName = "LI")) {
		item.target.classList.toggle("checked");
		ToggleDeleteButton();
	}
});

/*Delete All button function  */
document.querySelector("#deleteAll").onclick = function () {
	var elements = document.querySelectorAll(".checked");
	/* console.log(elements); */
	elements.forEach(function (item) {
		item.style.display = "none";
	});
};

/* Delete All Button */
function ToggleDeleteButton() {
	var checkList = document.querySelectorAll(".list-group-item.checked");
	/*  sadece sayfadaki linin icindeki checked leri almak icin ekstradan  başına parent ini yazdık. d-none==display:none */

	console.log(checkList.length);
	if (checkList.length == 1) {
		delButton = document.querySelector("#deleteAll");
		delButton.innerHTML = "Delete";
		document.querySelector("#deleteAll").classList.remove("d-none");
	} else if (checkList.length > 1) {
		delButton.innerHTML = "Delete All";
		document.querySelector("#deleteAll").classList.remove("d-none");
	} else {
		document.querySelector("#deleteAll").classList.add("d-none");
	}
}

/* Data entry from input */
/* Creating part input girişi dk30 CreateItem(item) olarak ayrı fonksiyon olusturduk istedigimiz yerde tekrardan cagırdık. ister üsteki gibi  dizi elemanlarından gelsin isterse burdaki gibi inputtan gelsin aynı fonksiyon calısacak*/
document.querySelector("#btnCreate").onclick = function () {
	var input = document.querySelector("#txtItem");
	var item = document.querySelector("#txtItem").value;

	if (item == "") {
		alert("Lütfen alanı doldurunuz.");
		return;
	}
	CreateItem(item);
	input.value = "";
};

/* Data entry with Enter */
var input = document.querySelector("input");
input.addEventListener("keyup", function (e) {
	var inputValue = document.querySelector("input").value;

	if (e.keyCode == 13) {
		if (inputValue == "") {
			alert("Lütfen alanı doldurunuz.");
			return;
		}
		CreateItem(inputValue);
		input.value = "";
	}
});
/* CreateItem function */
function CreateItem(item) {
	var li = document.createElement("li");
	var txt = document.createTextNode(item);

	li.className = "list-group-item";
	li.appendChild(txt);
	list.appendChild(li);

	/* aynı li ye sonradan indexte span olan x i  asagıda ekledik. li nin icine önce item1 geldi sonra altına span x span geldi sag tık incele kısmında */
	var span = document.createElement("span");
	var i = document.createElement("i");

	span.className = "close";
	i.className = "fas fa-trash-alt";
	span.appendChild(i);
	li.appendChild(span);

	/* Deleting Section */
	span.onclick = function () {
		/* this burdaki spanin kendisi oluyor.close[i] derken herbir close spanının kendisinie ulasıcaz burda onclick yada addeventlistener da olabilir. */
		/* close[i] yerine span yazdık zaten elimizde var.  asagıda tekrar spanları bulmamıza gerek yok */
		var li = this.parentElement; /* liyi  aldık burda o spana ait li */
		li.style.display = "none";
		li.classList.remove("checked");
		/* DeleteAll button icin checked leri kaldırıcaz onları düzgün saymak icin. delete yapınca checked kalıyordu onu silmek için yaptık. */
	};
}
//DELETING yukarıya  foreach in icine tasıdık daha sade ve az kodla yazmıs olduk.
// var close = document.getElementsByClassName("close");
// /*  getElementsByClassName için for düngüsü kullanmak gerekir foreach kullanılamaz ancak queryselector kullanınca foreach i kullanabilirsin*/

// for (var i = 0; i < close.length; i++) {
// 	close[i].onclick = function () {
// 		/* this burdaki spanin kendisi oluyor.close[i] derken herbir close spanının kendisinie ulasıcaz burda onclick yada addeventlistener da olabilir. */
// 		var li = this.parentElement; /* liyi  aldık burda o spana ait li */
// 		li.style.display = "none";
// 	};
// }
