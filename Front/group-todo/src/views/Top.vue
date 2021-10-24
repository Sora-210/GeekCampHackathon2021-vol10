<template>
  <div>
    <v-parallax
      alt="パソコンの写真"
      src="../../public/img/top.jpg"
    >
      <v-row
        justify="center"
        id="title_box"
      >
        <div id="title">
          <h1>ProTasu (プロタス)</h1>
          <p><span class="weight">プロ</span>ジェクトを<span class="weight">タス</span>ことでスムーズに</p>
        </div>
      </v-row>
    </v-parallax>
    <div>
      <!-- アプリケーションの説明を書く -->
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Top',
  })
</script>

<style scoped>
#title_box {
  flex-wrap: wrap;
  align-content: center;
}
#title {
  color: #2c2c2c;
  text-align: center;
  padding: 40px 70px;
  backdrop-filter: blur(4px);
  border-radius: 30px
}
.weight {
  color: #009688
}
</style>