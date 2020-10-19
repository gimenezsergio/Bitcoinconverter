class Converter {
    static getCoin() {
        fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC")
            .then(response => response.json())
            .then(data => console.log(data.data.rates.ARS))
    }

    static main(){

    }
}

Converter.main();