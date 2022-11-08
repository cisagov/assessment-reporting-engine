<template>
  <span
    data-id="sds-loading-box"
    :class="['loadingBox rounded flex flex-row relative overflow-hidden bg-gray-200', width, height]"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'SdsLoadingBox',
  props: {
    /**
     * Sets the height of the box. Accepts tailwind height classes.
     */
    height: {
      default: 'h-full',
      type: String
    },
    /**
     * Sets the width of the box. Accepts tailwind width classes.
     */
    width: {
      default: 'w-full',
      type: String
    }
  }
})
</script>

<style scoped>
.loadingBox::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: rgb(255,255,255);
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#dedfe0+33,efefef+50,dedfe0+66&0+0,1+33,1+50,1+66,0+100 */
  background: -moz-linear-gradient(45deg,  rgba(222,223,224,0) 0%, rgba(222,223,224,1) 36%, rgba(239,239,239,1) 50%, rgba(222,223,224,1) 67%, rgba(222,223,224,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg,  rgba(222,223,224,0) 0%,rgba(222,223,224,1) 36%,rgba(239,239,239,1) 50%,rgba(222,223,224,1) 67%,rgba(222,223,224,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg,  rgba(222,223,224,0) 0%,rgba(222,223,224,1) 36%,rgba(239,239,239,1) 50%,rgba(222,223,224,1) 67%,rgba(222,223,224,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00dedfe0', endColorstr='#00dedfe0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  animation: shimmer 6s infinite;
  content: '';
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
