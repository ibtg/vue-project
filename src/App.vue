<template>
  <div class="wrapper" @click="handleFocusOut" >
      <SliderComponent></SliderComponent>
      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
      >
        {{ text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
    </v-snackbar>
  </div>
</template>

<script>
import SliderComponent from './views/Slider'

export default {
  components:{
    SliderComponent,
  },
  data: () => ({
    snackbar:false,
    text: "이미지를 누르세요",
    timeout: 2000,
  }),
  methods:{
      handleFocusOut(event){
        if(event.target.className === 'lightbox-overlay'){
          return
        } 
        else if (event.target.tagName !== "IMG" && event.target.tagName !== "SPAN" && event.target.tagName !== "A"){
          this.snackbar = true
        }
      }
    }
};
</script>

<style scoped lang="scss">


.wrapper{
  height: 100vh;
  .contents{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}

</style>