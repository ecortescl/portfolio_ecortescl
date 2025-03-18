
<script setup>
 
 const props = defineProps({

handleImagePopup: {
  type: Function
},
project_data: {
  type: Array
}
})



</script>

<template>

  <div class="single-project-page-design">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h2>A Branch with Flowers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi
            sfejdis aliquam, purus sit amet luctus venenatis, lectus magna
            sansit trandis fringilla urna, porttitor rhoncus dolor purus non
            enim dollors praesent tabasi elementum facilisis leo.
          </p>
        </div>
        <div class="col-lg-6">
          <div class="single-project-image">
            <img src="~/assets/images/projects/work2.webp" alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-60 pb-40 ">
      <div class="row">
        <div class="col-lg-4">
          <!-- START SINGLE LEFT DESIGN AREA -->
          <div class="single-project-page-left wow fadeInUp delay-0-2s">
            <div class="single-info">
              <p>Year</p>
              <h3>2024</h3>
            </div>
            <div class="single-info">
              <p>Client</p>
              <h3>Bento Studio</h3>
            </div>
            <div class="single-info">
              <p>Services</p>
              <h3>Web Design</h3>
            </div>
            <div class="single-info">
              <p>Project</p>
              <h3>Creative</h3>
            </div>
          </div>
          <!-- / END SINGLE LEFT DESIGN AREA -->
        </div>
        <!-- START SINGLE RIGHT DESIGN AREA -->
        <div class="col-lg-8">
          <div class="single-project-page-right wow fadeInUp delay-0-4s">
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi
              sfejdis aliquam, purus sit amet luctus venenatis, lectus magna
              sansit trandis fringilla urna, porttitor rhoncus dolor purus non
              enim dollors praesent tabasi elementum facilisis leo.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable sourc consectetur, from a
              Lorem Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source.
            </p>
          </div>
        </div>
        <!-- / END SINGLE RIGHT DESIGN AREA -->
      </div>
     
    </div>
    
  </div>

</template>

