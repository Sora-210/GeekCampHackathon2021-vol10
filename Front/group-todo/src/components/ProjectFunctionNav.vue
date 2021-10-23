<template>
    <v-list-group
        color="teal"
        :prepend-icon="icon"
    >
        <template v-slot:activator>
            <v-list-item-title>
                {{ projectName }}
            </v-list-item-title>
        </template>
        <v-list-item-group>
            <v-list-item

                :to="tasksPaht"
            >
                <v-list-item-icon>
                    <v-icon>mdi-format-list-checks</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Tasks
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item

                :to="usersPaht"
            >
                <v-list-item-icon>
                    <v-icon>mdi-account-box-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        Users
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list-group>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ProjectFunctionNav',
    props: [
        'projectName',
        'projectId',
        'icon'
    ],
    computed: {
        tasksPaht: function() {
            return '/project/' + this.projectId + '/tasks'
        },
        usersPaht: function() {
            return '/project/' + this.projectId + '/users'
        }
    }
})
</script>