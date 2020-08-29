<template>
<v-container fluid>
        <v-col cols="12">
          <v-row
       
            class="grey lighten-5"
          >
            <v-card max-width="100%" class="mx-auto" 

              tile
              outlined

                :key="key" v-for="(task, key) in taskphotos">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="">{{task.taskType}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  รายบะเอียด: {{task.taskDetail}} <br>
  ตำแหน่ง: {{task.taskLocation}}<br>
    วัน เวลา: {{task.taskStart}}<br>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">

          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            small
          
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-card>
  
          </v-row>
        </v-col>
    </v-container>


</template>

<script>
import firebase from "../forms/firebaseConfig";

var database = firebase.database();
var taskphotoRef = database.ref("/taskphoto");

export default {
 

  data: () => {
    return {
      taskphotos: {},
      reviews: {},
      users:{},
      name: "",
      realname: "",
      email: "",
      phone: "",
      introduce: "",
      address: "",
      img: "",
      uid_user: "",
      uid: "",
          dialog: false,


    
    };
  },

  mounted() {
      taskphotoRef.orderByChild("keyPhoto").equalTo('all').on("value", snapshot => {
      this.taskphotos = snapshot.val();
        console.log(this.taskphotoRef);
    });
  }
};
</script>
