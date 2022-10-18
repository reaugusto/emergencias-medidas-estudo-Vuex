<template>
  <div>
    <div class="profileCard">
      <img src="@/assets/profile.png" alt="foto de perfil" />
      <span>Nome</span>
      <span>Cargo</span>
      <span>Apresentação</span>
      <span>Email</span>
      <div class="skils" v-for="skil in skils" :key="skil">
        <span>{{ skil }}</span>
      </div>
      <div class="social">
        <i class="bi bi-github"></i>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-google"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardProfile",
  data: () => ({
    skils: ["Java", "JavaScript", "HTML", "CSS"]
  })
};
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
.profileCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>