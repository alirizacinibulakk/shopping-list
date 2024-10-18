function alisverisListesineEkle(){
    let addPurchase = Number(prompt("Kaç adet ürün eklemek istiyorsunuz: "));
    let listOfShopping = [];
    if(Number(addPurchase)){
        for(let i = 0; i < addPurchase; i++ ){
            let pushedPurchase = prompt((i + 1) + ". ürünü ekleyiniz: ").toLowerCase();
            listOfShopping.push(pushedPurchase);     
        }
    }
    else{
        alert("Lütfen sayı girin.");
    }
    console.table(listOfShopping);
    console.log(`Alışveriş listesinde ${listOfShopping.length} ürün bulunuyor.`)
}

alisverisListesineEkle()