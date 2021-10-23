<template>
    <v-navigation-drawer>
            <v-list nav>
                <v-list-item-group
                    color="teal"
                    :prepend-icon="icon"
                >
                    <v-list-item
                        color="teal"
                        to="/project/all/tasks"
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
                        :to="path(project.id)"
                    >
                        <v-list-item-title>
                            {{ project.name }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ProjectNav',
    computed: {
        path: function() {
            return function(projectId:number):string {
                return '/project/' + projectId + '/tasks'
            }
        }
    }
})
</script>