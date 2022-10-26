<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
        <br />
        <!--Total de enfermeiros: {{ $store.getters.totalEnfermeiros }} -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <lista-equipes tipo="equipes-montadas" />
      </div>
    </div>
  </div>
</template>

<script>
import ListaEquipes from "@/components/ListaEquipes";

export default {
  name: "Equipes",
  components: {
    ListaEquipes
  }
};
</script>
