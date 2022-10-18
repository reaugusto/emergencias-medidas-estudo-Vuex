<template>
  <div>
    <div class="row">
      <div class="col">
        <h5 :class="corTitulo">
          <i class="bi-boxes me-2"></i>Configuração da equipe
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>Enfermeiro: {{ Enfermeiro }}</p>
        <p>Socorrista: {{ Socorrista }}</p>
        <p>Médico: {{ Medico }}</p>
        <p>Carro: {{ Carro }}</p>
        <p>Telefone: {{ Telefone }}</p>
        <p>Kit de reanimação: {{ kit }}</p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulancias/indefinida.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ConfiguracaoEquipe",
  computed: {
    ...mapState({
      Enfermeiro: (state) => state.equipe.enfermeiro,
      Socorrista: (state) => state.equipe.socorrista,
      Medico: (state) => state.equipe.medico,
      Carro: (state) => state.equipe.carro,
      Telefone: (state) => state.equipe.telefone,
      kit: (state) => state.equipe.kit
    }),
    corTitulo() {
      let testeLogico = true;
      if (testeLogico) {
        return "text-danger";
      }
      return "text-primary";
    }
  }
};
</script>
