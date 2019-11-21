<template>
  <div>
    <canvas width="800" height="580" id="canvas"></canvas>
  </div>
</template>

<script>

export default {
  name: "jtopo",
  mounted() {
    this.initTopo()
  },
  methods: {
   initTopo() {
      let canvas = document.getElementById("canvas");

      let stage = new JTopo.Stage(canvas);

      // stage.eagleEye.visible = true;
      stage.wheelZoom = 1.2; //缩放比例
      let scene = new JTopo.Scene(stage);
      scene.background = '/static/bg.jpg';

      var node = new JTopo.Node("难凉热血");                            
      node.setLocation(409, 269);
      scene.add(node);
     
     
      // 将画布居中
      stage.centerAndZoom();
    }
  }
};
</script>
