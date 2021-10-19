<template>
    <v-navigation-drawer>
            <v-list nav>
                <v-list-item
                    color="teal"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-ballot</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            All Project
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    v-for="project in $store.state.projectList"
                    :key="project.id"
                >
                    <project-function-nav
                        :projectName='project.name'
                        :projectId='project.id'
                        :icon="project.icon"
                    >
                    </project-function-nav>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectFunctionNav from './ProjectFunctionNav.vue'

export default Vue.extend({
    name: 'ProjectNav',
    components: {
        ProjectFunctionNav
    }
})
</script>