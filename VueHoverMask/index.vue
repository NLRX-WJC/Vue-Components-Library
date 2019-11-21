<template>
  <div class="vue-hover-mask">
    <slot></slot>
    <span
      @click="handleClick"
      class="vue-hover-mask_action"
    >
      <slot name="action"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VueHoverMask',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.vue-hover-mask {
  overflow: hidden;
  position: relative;
  line-height: 1;
  background-color: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 0;
  vertical-align: middle;
}

.vue-hover-mask_action {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s;
}
.vue-hover-mask_action::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.vue-hover-mask_action:hover {
  opacity: 1;
}
</style>
