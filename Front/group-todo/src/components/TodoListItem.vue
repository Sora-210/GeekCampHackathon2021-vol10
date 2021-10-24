<template>
    <v-list-item link>
            <v-list-item-icon id="status_icon">
                <v-icon v-if="todoData.status" color="teal">mdi-check-circle</v-icon>
                <v-icon v-else>mdi-check-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-subtitle>
                    {{ todoData.period }}
                </v-list-item-subtitle>
                <v-list-item-title>
                    {{ todoData.content }}
                </v-list-item-title>
            </v-list-item-content>
        <v-list-item-avatar>
            <v-img 
                v-for="user in todoData.users"
                :key="user"
                :src="user"
            ></v-img>
        </v-list-item-avatar>
    </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import {PropType} from 'vue'
import {todoDataObj} from '../interface/TodoDataObj'


export default Vue.extend({
    name: 'TodoListItem',
    props: {
        'todoData': {
            type: Object as PropType<todoDataObj>,
            required: true
        },
        'index': {
            type: Number,
            required: true
        }
    }
})
</script>