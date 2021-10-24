<template>
    <div class="all">
        <v-row class="all">
            <v-col cols="2">
                <project-nav>
                </project-nav>
            </v-col>
            <v-col cols="10">
                <project-tab
                    :projectId="$route.params.projectId"
                >
                </project-tab>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img
                                src="https://avatars.githubusercontent.com/u/46365745?v=4"
                            >
                            </v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>
                                Sora 210
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectNav from '../../components/ProjectNav.vue'
import ProjectTab from '../../components/ProjectTab.vue'

export default Vue.extend({
    name: 'ProjectUsers',
    components: {
        ProjectNav,
        ProjectTab
    }
})
</script>

<style scoped>
.all {
    height: 100%;
}
</style>