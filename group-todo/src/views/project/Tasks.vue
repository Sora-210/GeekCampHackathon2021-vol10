<template>
    <div id="all">
        <project-nav>
        </project-nav>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectNav from '../../components/ProjectNav.vue'

export default Vue.extend({
    name: 'ProjectTasks',
    components: {
        ProjectNav
    }
})
</script>

<style scoped>
#all {
    height: 100%;
}
</style>