import { empresaTypes } from "../../actions";

const INITIAL_STATE = {
  empresa: {},
  veiculos: {},
};

export const empresa = (state = INITIAL_STATE, action) => {
  if (action.type === empresaTypes.SET_EMPRESA) {
    let e = action.empresa;

    let body = {
      initFantasia: e.empresa,
      initEmail: e.email,
      initData: e.dataFundacao,
      initCnpj: e.cnpj,
      initContato: e.contato,
      initRede: e.redeSocial,
      initFaixa: e.faixaPreco,
      initEndereco: e.endereco,
      initLocalizacao: e.localizacao.coordinates,
    };

    return { ...state, empresa: body };
  }
  if (action.type === empresaTypes.SET_VEICULOS) {
    let body = {
      initVans: action.empresa.vans,
      initOnibus: action.empresa.onibus,
    };

    return { ...state, veiculos: body };
  } else {
    return state;
  }
};
