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
          <h1>Group Task Checker</h1>
          <p>グループプロジェクトのタスクを一括管理</p>
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
  padding: 30px 50px;
  backdrop-filter: blur(4px);
  border-radius: 30px
}
</style>