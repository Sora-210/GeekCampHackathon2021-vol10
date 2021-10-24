<template>
    <div class="all">
        <v-row class="all">
            <v-col cols="2" class="all">
                <project-nav>
                </project-nav>
            </v-col>
            <v-col cols="10">
                <project-tab-all>
                </project-tab-all>
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
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectNav from '../../../components/ProjectNav.vue'
import ProjectTabAll from '../../../components/ProjectTabAll.vue'
import TodoListItem from '../../../components/TodoListItem.vue'
import { api } from '../../../axios'
import { getAuth, Auth, onAuthStateChanged} from '@firebase/auth'

export default Vue.extend({
    name: 'AllProjectTasks',
    components: {
        ProjectNav,
        ProjectTabAll,
        TodoListItem
    },
    data: function() {
        return {
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
                    api.get('/todos' , {headers: header})
                        .then((res:any) => {
                            this.todos = res.data
                        })
                        .catch((e:any) => {
                            console.log(e)
                        })
                })
                
            })
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