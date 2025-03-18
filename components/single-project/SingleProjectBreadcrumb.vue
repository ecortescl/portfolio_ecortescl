<template>
  <section class="single-page-hero-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2>{{ project_data?.title || 'Proyecto' }}</h2>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  project_data: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Proyecto'
    })
  }
});
</script>
