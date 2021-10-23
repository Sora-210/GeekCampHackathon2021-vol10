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
                    <todo-list-item
                        v-for="todo,index in todos"
                        :key="index"
                        :todoData=todo
                        :index="index"
                        @click.native="action(index)"
                    >
                    </todo-list-item>
                </v-list>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectNav from '../../components/ProjectNav.vue'
import ProjectTab from '../../components/ProjectTab.vue'
import TodoListItem from '../../components/TodoListItem.vue'

export default Vue.extend({
    name: 'ProjectTasks',
    components: {
        ProjectNav,
        ProjectTab,
        TodoListItem
    },
    data: function() {
        return {
            todos: [
                {
                    status: false,
                    content: "プログラミング",
                    period: "2021/10/30",
                    users: [
                        'https://avatars.githubusercontent.com/u/46365745?v=4'
                    ]
                },
                {
                    status: true,
                    content: "買い物",
                    period: "2021/10/30",
                    users: [
                        'https://avatars.githubusercontent.com/u/46365745?v=4'
                    ]
                },
                {
                    status: true,
                    content: "技育camp",
                    period: "2021/10/30",
                    users: [
                        'https://avatars.githubusercontent.com/u/46365745?v=4'
                    ]
                },
                {
                    status: false,
                    content: "課題",
                    period: "2021/10/30",
                    users: [
                        'https://avatars.githubusercontent.com/u/46365745?v=4'
                    ]
                }
            ]
        }
    },
    methods: {
        action: function(index:number) {
            this.todos[index].status = !this.todos[index].status
        },
        test: function() {
            const token = this.$store.getters.jwtToken
            console.log(token)
        }
    }
})
</script>

<style scoped>
.all {
    height: 100%;
}
</style>