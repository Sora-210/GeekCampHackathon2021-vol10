<template>
    <v-tabs>
        <v-tab
            :to="taskspath"
        >
            Todos
        </v-tab>
        <v-tab
            :to="userspath"
        >
            Members
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