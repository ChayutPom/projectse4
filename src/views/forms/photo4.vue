<template>
    <v-container fluid>
        <center><h2 >งานแต่งงาน</h2></center><br>
        
         <v-col cols="12" sm="6" md="3">
             รายละเอียดงาน<v-textarea
              solo       
      ></v-textarea></v-col>


  <v-col cols="12" sm="6" md="3"> 
  <label  for="">วัน-เวลาเริ่มงาน:</label><br>
  <input type="datetime-local" id="time" name="birthdaytime"><br><br>
  <label for="">วัน-เวลาสิ้นสุดงาน:</label><br>
  <input type="datetime-local" id="time" name="birthdaytime">
</v-col>

 <v-col cols="12" sm="6" md="3">สถานที่ <v-text-field
        solo
            ></v-text-field> </v-col>

    </v-container >
</template>

<script>


  export default {

   data: () => ({
    items: ['1', '2', '3', '4','5'],
  }),

  }

</script>