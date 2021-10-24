<template>
    <v-tabs>
        <v-tab
            to="/project/all/tasks"
        >
            Todos
        </v-tab>
        <v-tab disabled>
            <s>参加プロジェクト</s>
        </v-tab>
        <v-tab disabled>
            <s>作業記録</s>
        </v-tab>
        <v-tab disabled>
            <s>ガントチャート</s>
        </v-tab>
        <v-tab disabled>
            <s>カレンダー</s>
        </v-tab>
        <v-tab disabled>
            <s>打合せまとめ</s>
        </v-tab>
    </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "ProjectTabAll",
    props: [
        'projectId'
    ]
})
</script>