`
დავალება:
1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true თუ რიცხვი არის 5-ის ჯერადი, ხოლო თუ არაა მაშინ false. 

2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას. 

3.დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

4.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს uppercase სტრინგს (მაგ: MY NAME IS JANE) და დააბრუნებს lowerCase სტრინგს (my name is jane)

5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს, (.filter) სადაც მხოლოდ კენტი რიცხვები იქნება

6*. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი data.js სადაც გვაქვს პროდუქტების მასივი . გადააკოპირეთ ეს მასივი თქვენთან, ან მთლიანი ფაილი შემოიტანეთ ისეთი ფორმატით როგორც კოდშია და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტს(ობიექტს), რომლის ფასიც (price) არის უმცირესი

7*. დაწერეთ ფუნქცია რომელიც პარამეტრად მიღებს ობიექტების მასივს (ობიექტს უნდა ჰქონდეს title ველი) და მეორე პარამეტრად მიიღებს სტრინგს. ამ მასივში  . find ის დახმარებით მოვძებნოთ ელემენტი რომლის title ველის მნიშვნელობა ემთხვევა ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი, 

`


// 1.
function vielfaches (ricxvi){
    return ricxvi % 5 === 0;
}

console.log(vielfaches(10));
console.log(vielfaches(12));

// 2.
function priceToPay (fasi, discount){
    return fasi - discount;
}
console.log("Total price to pay is : ", priceToPay(200, 50))

// 2. დაწერეთ ფუნცქია რომელიც პარამეტრად მიიღებს პროდუქტის საწყის ფასს და ფასდაკლების პროცენტს რიცხვების სახით (მაგ: (1000, 10)  >> ფასი 1000, ფასდაკლება 10%). და დააბრუნებს ფასდაკლების შემდეგ გადასახდელ თანხას.
function calculateDiscountedPrice(price, discount) {
	const percentage = discount / 100; // 30 / 100 = 0.3
	const discountedPrice = price * percentage; // 997 * 0.3 = 300
	return Math.round(price - discountedPrice); // 1000 - 300 = 700
}



//3 .
function getCurrencySymbolFromCode (currencyCode){
    switch(currencyCode){
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'GEL':
            return 'ლ';
        default:
            return 'Valute code is unknown';
    }
};

console.log(getCurrencySymbolFromCode('USD'));
console.log(getCurrencySymbolFromCode('EUR'));
console.log(getCurrencySymbolFromCode('GEL'));
console.log(getCurrencySymbolFromCode('ADC'));


// 3.დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება
function getCurrencySymbolFromCode(code) {
	const formatedCode = code.toUpperCase();

	switch (formatedCode) {
		case "USD":
			return "$";
		case "EUR":
			return "€";
		case "GEL":
			return "₾";
		default:
			return "Unknown currency code";
	}
}

// console.log(getCurrencySymbolFromCode("Usd")); // $
// console.log(getCurrencySymbolFromCode("eur")); // €


// 4. 
function lowerCase (text){
    return text.toLowerCase();
}
console.log(lowerCase("MY NAME IS NIA"));


// 5.

function filteri(nummers){
    return nummers.filter(nr=> nr % 2 !== 0)
};
const nummersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(filteri(nummersArray));


// 6.

const newData =data;

// hier reduce()  eine eingebaute Funktion von JavaScript und wird auf Arrays angewendet. 

function cheapestItem(dataHier){
    return dataHier.reduce((cheapest, aktuelle) =>{
        return aktuelle.price  < cheapest.price ? aktuelle : cheapest;
    });
};
console.log(cheapestItem(newData));



// 7.

function sucheDurch(object, titleString){
    return object.find(el=> el.title === titleString);
};
const produqtebi = [
    {id: 1, title: "bla1", price:"23.33"},
    {id: 2, title: "bla2", price: "34.45"},
    {id: 4, title: "bla3", price: "34.56"}
];
const search = sucheDurch(produqtebi, "bla1");
console.log(search)

