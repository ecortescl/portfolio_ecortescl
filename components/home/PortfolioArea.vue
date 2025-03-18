
<script setup>

const props = defineProps({

  handleImagePopup: {
    type: Function
  },
  portfolio_data: {
    type: Array
  }
})

</script>


<template>
  <div class="projects-area" id="portfolio">
   
  
   
    <div class="container-fluid">
      <div class="row g-4 portfolio-grid">
       

        <div 
        v-for="(item , i) in portfolio_data" :key="i"        
        :class="`col-md-6 col-xl-${item.col} portfolio-item category-2`">
          <a 
          style="cursor: pointer"
          @click.prevent="handleImagePopup(i)"
          >
            <div class="portfolio-box">
              <!-- Image -->
              <img :src="item.img" alt="" data-rjs="2" />
              <!-- Category -->
              <span class="portfolio-category">{{ item.category }}</span>
              <!-- Caption -->
              <div class="portfolio-caption">
                
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
              </div>
            </div>
          </a>
        </div>
 
      </div>
    </div>

    

  </div>
</template>
 