import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    titulo: "--> Emergengias Medicas< --",
    equipe: {
      enfermeiro: "",
      socorrista: "",
      medico: "",
      carro: "",
      telefone: "",
      kit: ""
    },
    equipes: [],
    enfermeiros: [],
    socorristas: [],
    medicos: [],
    equipamentos: {
      carros: [],
      telefones: [],
      kitsDeReanimacao: []
    }
  },
  getters: {
    totalEnfermeiros(state) {
      return state.enfermeiros.length;
    },
    socorristasPorTurno(state) {
      return turno => {
        return !turno
          ? state.socorristas
          : state.socorristas.filter(s => s.turno === turno);
      };
    },
    totalSocorristas: state => state.socorristas.length,
    totalSocorristasPorTurno: (state, getters) => turno =>
      getters.socorristasPorTurno(turno).length
  },
  mutations: {
    setItemEquipe: (state, { item }) => {
      //let item = payload.item;
      let tp = item.tipo;
      let dd = item.dados;

      if (tp == "enfermeiros") state.equipe.enfermeiro = dd.nome;
      if (tp == "socorristas") state.equipe.socorrista = dd.nome;
      if (tp == "medicos") state.equipe.medico = dd.nome;
      if (tp == "carros") state.equipe.carro = dd.placa;
      if (tp == "telefones") state.equipe.telefone = dd.telefone;
      if (tp == "kits-de-reanimacao") state.equipe.kit = dd.kit;
    },
    setEnfermeiros: (state, payload) => {
      state.enfermeiros = payload;
    },
    setSocorristas: (state, payload) => {
      state.socorristas = payload;
    },
    setMedicos: (state, payload) => {
      state.medicos = payload;
    },
    setCarros: (state, carros) => {
      state.equipamentos.carros = carros;
    },
    setTelefones: (state, telefones) => {
      state.equipamentos.telefones = telefones;
    },
    setKits: (state, kitsDeReanimacao) => {
      state.equipamentos.kitsDeReanimacao = kitsDeReanimacao;
    },
    adicionarEquipeEquipes: (state, equipe) => {
      state.equipes.push(equipe);
      state.equipe = {};
    }
  },
  actions: {
    fetchEquipemantos(context, { carros, telefones, kitsDeReanimacao }) {
      fetch("https://dpxf9d-3001.preview.csb.app/equipamentos")
        .then(response => response.json())
        .then(dados => {
          //console.log(dados);
          if (carros) context.commit("setCarros", dados.carros);
          if (telefones) context.commit("setTelefones", dados.telefones);
          if (kitsDeReanimacao)
            context.commit("setKits", dados.kitsDeReanimacao);
        });
    },
    fetchProfissionais(context) {
      fetch("https://dpxf9d-3001.preview.csb.app/enfermeiros")
        .then(response => response.json())
        .then(dados => context.commit("setEnfermeiros", dados));

      fetch("https://dpxf9d-3001.preview.csb.app/socorristas")
        .then(response => response.json())
        .then(dados => context.commit("setSocorristas", dados));

      fetch("https://dpxf9d-3001.preview.csb.app/medicos")
        .then(response => response.json())
        .then(dados => context.commit("setMedicos", dados));
    }
  }
});

// context.commit("setCarros", carros);
// context.commit("setTelefones", telefones);
// context.commit("setKits", kitsDeReanimacao);
