<template>
  <v-container fluid >
    <center>
      <h2>รายละเอียดงาน</h2>
    </center>
    <br />

    <v-col cols="12" sm="6" md="3">
      รายละเอียดงาน
      <v-textarea solo   :label="this.task.taskDetail"
></v-textarea>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <label for>วัน-เวลาเริ่มงาน:</label>

       <v-text-field solo  :label="this.task.taskStart"></v-text-field>
      <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <v-text-field solo  :label="this.task.taskEnd"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      สถานที่
      <v-text-field solo  :label="this.task.taskLocation"></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      จำนวนคนในเฟรม
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>


    <center>
      <h2>รายละเอียดลูกค้า</h2>
      <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Click Me
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="headline grey lighten-2">
            รายละเอียดลูกค้า
          </v-card-title>
  
        
    <v-col cols="12" sm="6" md="3">
      ชื่อ
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      นามสกุล
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      จำนวนคนในเฟรม
      <v-text-field solo  :label="this.task.taskNum"></v-text-field>
    </v-col>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    </center>
  </v-container>

  

</template>
<script>
import firebase from "../forms/firebaseConfig";
var database = firebase.database();
var taskRef = database.ref("/taskphoto");
export default {
      data: () => {
    return { 
task:{},
  dialog: false,
     };
  },
  mounted() {
      taskRef.orderByKey().equalTo(this.$route.params.keytask).on("value", snapshot => {
          this.task = snapshot.val()[this.$route.params.keytask]
          console.log(this.task.keyUser);
 }); 
  }
}
</script>