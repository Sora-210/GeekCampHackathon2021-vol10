<template>
    <v-tabs>
        <v-tab
            :to="taskspath"
        >
            Todos
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
        <v-tab disabled>
            <s>資料</s>
        </v-tab>
        <v-tab disabled>
            <s>Members</s>
        </v-tab>
        <v-tab disabled>
            <s>設定</s>
        </v-tab>
    </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "ProjectTab",
    props: [
        'projectId'
    ],
    computed: {
        taskspath: function() {
            return '/project/' + this.projectId + '/tasks'
        },
        userspath: function() {
            return '/project/' + this.projectId + '/users'
        }
    }
})
</script>