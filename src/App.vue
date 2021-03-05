<template>
  <div class="wrapper">
      <SliderComponent></SliderComponent>
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