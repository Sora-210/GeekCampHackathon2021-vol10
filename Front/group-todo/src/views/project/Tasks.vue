<template>
    <div class="all">
        <v-row class="all">
            <v-col cols="2">
                <project-nav
                    @reloadTodo="getTodos"
                >
                </project-nav>
            </v-col>
            <v-col cols="10">
                <project-tab
                    :projectId="$route.params.projectId"
                >
                </project-tab>
                <v-list>
                    <todo-list-item
                        v-for="todo in todos"
                        :key="todo.id"
                        :todoData=todo
                        :index="todo.id"
                        @click.native="action(todo.id)"
                    >
                    </todo-list-item>
                </v-list>
                <v-btn
                    @click="isTodoDialog = true"
                >
                    ToDoを追加する
                </v-btn>
            </v-col>
        </v-row>
        <todo-add-dialog
            :projectId="$route.params.projectId"
            :isDialog="isTodoDialog"
            @close="DialogClose"
        >
        </todo-add-dialog>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectNav from '../../components/ProjectNav.vue'
import ProjectTab from '../../components/ProjectTab.vue'
import TodoListItem from '../../components/TodoListItem.vue'
import TodoAddDialog from '../../components/TodoAddDialog.vue'

import { api } from '../../axios'
import { getAuth, Auth, onAuthStateChanged} from '@firebase/auth'

export default Vue.extend({
    name: 'ProjectTasks',
    components: {
        ProjectNav,
        ProjectTab,
        TodoListItem,
        TodoAddDialog
    },
    data: function() {
        return {
            isTodoDialog: false,
            todos: []
        }
    },
    methods: {
        action: function(index:number) {
            const auth: Auth = getAuth()
            onAuthStateChanged(auth,async (user) => {
                const header = {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                }

                user!.getIdToken()
                .then((token) => {
                    header.Authorization = token
                    api.patch('/todos/'+index, {},{headers: header})
                        .then((res:any) => {
                            this.getTodos()
                        })
                        .catch((e:any) => {
                            console.log(e)
                        })
                })
                
            })
        },
        getTodos: function() {
            const auth: Auth = getAuth()
            onAuthStateChanged(auth,async (user) => {
                const header = {
                    'Content-Type': 'application/json',
                    'Authorization': ''
                }

                user!.getIdToken()
                .then((token) => {
                    header.Authorization = token
                    api.get('/todos/project/'+this.$route.params.projectId, {headers: header})
                        .then((res:any) => {
                            this.todos = res.data
                        })
                        .catch((e:any) => {
                            console.log(e)
                        })
                })
                
            })
        },
        DialogClose: function() {
            this.getTodos()
            this.isTodoDialog = false
        }
    },
    mounted: function() {
        this.getTodos()
    }
})
</script>

<style scoped>
.all {
    height: 100%;
}
</style>