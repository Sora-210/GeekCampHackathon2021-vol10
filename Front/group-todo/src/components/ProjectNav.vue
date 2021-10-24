<template>
<div>
    <v-navigation-drawer>
        <v-list nav>
            <v-list-item-group
                color="teal"
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
                    :key="project.Project.id"
                    :to="path(project.Project.id)"
                    @click="$emit('reloadTodo')"
                >
                    <v-list-item-title>
                        {{ project.Project.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-item-group>
            <v-list-item>
                <v-btn
                    color="teal"
                    outlined
                    @click="isAddProject = true"
                >
                    プロジェクトを作成
                </v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <project-add-dialog
        :isDialog="isAddProject"
        @close="isAddProject = false"
    >
    </project-add-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectAddDialog from './ProjectAddDialog.vue'

export default Vue.extend({
    name: 'ProjectNav',
    components: {
        ProjectAddDialog
    },
    computed: {
        path: function() {
            return function(projectId:number):string {
                return '/project/' + projectId + '/tasks'
            }
        }
    },
    data: function() {
        return {
            isAddProject: false
        }
  }
})
</script>