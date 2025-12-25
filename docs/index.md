---
layout: home
---


<script setup>
// 定义你的图片列表（确保这些图片在 public/image 目录下）
const images = [
  '/image/pic1.jpg',
  '/image/pic2.jpg',
  '/image/pic3.jpg'
]
</script>

<div class="home-carousel">
  <el-carousel height="500px" motion-blur>
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="item" style="width: 100%; height: 100%; object-fit: cover;" />
    </el-carousel-item>
  </el-carousel>
</div>

<style scoped>
.home-carousel {
  max-width: 1152px; /* 与 VitePress 默认容器宽度对齐 */
  margin: 350px 40px 40px 40px;
  padding: 0 24px;
  border-radius: 12px;
  overflow: hidden;
}

/* 适配移动端高度 */
@media (max-width: 640px) {
  .home-carousel :deep(.el-carousel__container) {
    height: 200px !important;
  }
}
</style>