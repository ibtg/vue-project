<template>
    <lightbox 
        :images="images" 
    ></lightbox>
</template>

<script>
export default {
    data () {
        return {
          images: [
                {
                  src:'https://unsplash.it/500',
                },
                {
                  src:'https://unsplash.it/501'
                },
                                {
                  src:'https://unsplash.it/502'
                },
                                {
                  src:'https://unsplash.it/503'
                },
                                {
                  src:'https://unsplash.it/504'
                },
                                {
                  src:'https://unsplash.it/505'
                },
            ],
        }
    }
}
</script>

<style scoped lang="scss">

.vue-lightbox{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  ::v-deep ul {
    min-width: 780px;
    }

}


</style>