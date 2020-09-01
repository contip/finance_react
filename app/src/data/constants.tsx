import SelectInput from "@material-ui/core/Select/SelectInput";

export const LookupColumnsMap: any = {
        companyName: "Company Name",
        symbol: "Trade Symbol",
        latestPrice: "Current Price",
        previousClose: "Last Closing Price",
        low: "24h Low Price",
        lowTime: "24h Low Time",
        high: "24h High Price",
        highTime: "24h High Time",
        week52Low: "Yearly Low Price",
        week52High: "Yearly High Price",
}

export const HoldingsColumnsMap: any = {
        stock_name: "Stock Name",
        stock_symbol: "Stock Symbol",
        shares: "Shares Owned",
        price: "Current Price",
        value: "Total",
}

export const HistoryColumnsMap: any = {
        date: "Transaction Date",
        stock_name: "Stock Name", 
        stock_symbol: "Stock Symbol",
        stock_price: "Price at Transaction Time",
        shares: "Shares",
        transaction_price: "Total Transaction Amount",
}

export const CurrencyOptions = {
        price: {currencySetting: true},
        value: {currencySetting: true},
}

const ServerUrl = "http://localhost:6969/";

export const Urls = {
        login: ServerUrl + "auth/login",
        register: ServerUrl + "auth/register",
        available: ServerUrl + "auth/available",
        buy: ServerUrl + "trades/buy",
        sell: ServerUrl + "trades/sell",
        history: ServerUrl + "trades/history",
        lookup: ServerUrl + "lookup",
}