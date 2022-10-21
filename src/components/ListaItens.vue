<template>
  <div>
    <div v-if="tipo == 'socorristas'">
      <select class="form-control form-control-sm" v-model="turno">
        <option value="">Todos</option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>
    <item
      v-for="(item, indice) in items"
      :key="indice"
      :dados="item"
      :tipo="tipo"
    />
    <div v-if="tipo == 'socorristas'">Total: {{ totalSocorristas(turno) }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import Item from "@/components/Item.vue";

export default {
  name: "ListaItens",
  components: {
    Item
  },
  props: {
    tipo: String
  },
  data: () => ({
    turno: ""
  }),
  computed: {
    ...mapState({
      enfermeiros: state => state.enfermeiros,
      medicos: state => state.medicos,
      carros: state => state.equipamentos.carros,
      telefones: state => state.equipamentos.telefones,
      kits: state => state.equipamentos.kitsDeReanimacao
    }),
    ...mapGetters({
      totalSocorristas: "totalSocorristasPorTurno",
      socorristasTurno: "socorristasPorTurno"
    }),
    items() {
      switch (this.tipo) {
        case "enfermeiros":
          return this.enfermeiros;
        case "socorristas":
          return this.socorristasTurno(this.turno);
        case "medicos":
          return this.medicos;
        case "carros":
          return this.carros;
        case "telefones":
          return this.telefones;
        case "kits-de-reanimacao":
          return this.kits;
        default:
          return [];
      }
    }
  }
};
</script>
