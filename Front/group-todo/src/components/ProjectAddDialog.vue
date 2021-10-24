<template>
    <v-dialog
    presistent
    width="70%"
    v-model="isDialog"
    @click:outside="init"
    >
        <v-stepper>
            <v-stepper-header v-model="stepperPage">
                <v-stepper-step step="1" :complete="stepperPage >= 2" complete-icon="mdi-check-circle-outline">入力</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" :complete="stepperPage >= 2" complete-icon="mdi-check-circle-outline">完了</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-form ref="form" v-model="isValid" class="pt-2 mb-4">
                        <v-text-field
                            label="プロジェクト名"
                            v-model="formData"
                            :rules="[ v => !!v || 'プロジェクト名を入力してください']"
                            outlined>
                        </v-text-field>
                    </v-form>
                    <v-btn color="success" @click="createProject">
                        作成
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-btn color="success" @click="createProject">
                        作成
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAuth, Auth, onAuthStateChanged} from '@firebase/auth'
import { api } from '../axios'

export default Vue.extend({
    name: 'ProjectAddDialog',
    props: [
        'isDialog'
    ],
    data: function() {
        return {
            stepperPage:1,
            isValid: false,
            formData: "",
            alert: ""
        }
    },
    methods: {
        createProject: async function() {
            if (this.isValid) {
                const auth: Auth = getAuth()
                onAuthStateChanged(auth,async (user) => {
                    const sendData = {
                        projectName: this.formData
                    }
                    const header = {
                        'Content-Type': 'application/json',
                        'Authorization': ''
                    }

                    user!.getIdToken()
                    .then((token) => {
                        header.Authorization = token
                        api.post('/projects', sendData, {headers: header})
                            .then((res:any) => {
                                console.log(res)
                                this.alert = "プロジェクトの作成に成功しました"
                                this.stepperPage = 2 
                            })
                            .catch((e:any) => {
                                console.log(e)
                                this.alert = "プロジェクトの作成に失敗しました"
                                this.stepperPage = 2
                            })
                    })
                    
                })
            }
        },
        init: function() {
            this.alert = ""
            this.stepperPage = 1
            this.formData = ""
            this.$emit('close')
        }
    }
})
</script>