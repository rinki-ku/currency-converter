import { connect } from "react-redux";
import LiveRating from "./LiveRating";
import getSymbolFromCurrency from "currency-symbol-map";

const mapStateToProps = state => {
  const currency = state.currency;
  const out = (
    currency.rates[currency.currency.OUT] / currency.rates[currency.currency.IN]
  ).toFixed(3);

  return {
    in: `${getSymbolFromCurrency(currency.currency.IN)}1.00`,
    out: `${getSymbolFromCurrency(currency.currency.OUT)}${
      out !== "NaN" ? out : "0.00"
    }`
  };
};
const ConnectedLiveRating = connect(mapStateToProps)(LiveRating);

export default ConnectedLiveRating;
