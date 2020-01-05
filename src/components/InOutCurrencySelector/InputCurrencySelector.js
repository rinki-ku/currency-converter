import { connect } from "react-redux";
import { changeInputCurrency } from "../../store/actions/currencyActions";
import CurrencySelector from "./CurrencySelector";

const mapStateToProps = state => {
  return {
    value: state.currency.currency.IN,
    currencies: Object.keys(state.currency.rates)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(changeInputCurrency(value));
    }
  };
};

const InputCurrencySelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySelector);

export default InputCurrencySelector;
