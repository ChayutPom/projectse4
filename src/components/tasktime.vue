<template>
    <v-col cols="12" sm="6" md="3">
      <v-select
        v-model="selected"
        :items="items"
        label="จำนวนวัน"
        dense
        outlined
      ></v-select>

      <br />
      <div v-if="selected >= 1">
          <label>วัน-เวลาเริ่มงาน: </label><br>
        วันที่ 1 เริ่มเวลา: <input
          cols="6"
          v-model="taskStart1"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        />
        <v-select
        v-model="taskTaotal1"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>

      <div v-if="selected >= 2">
        วันที่ 2 เริ่มเวลา: <input
          v-model="taskStart2"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
          v-model="taskTaotal2"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      <div v-if="selected >= 3">
        วันที่ 3 เริ่มเวลา: <input
          v-model="taskStart3"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
          v-model="taskTaotal3"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      <div v-if="selected >= 4">
        วันที่ 4 เริ่มเวลา: <input
          v-model="taskStart4"
          type="datetime-local"
          id="time"
          name="birthdaytime"
        /><v-select
        v-model="taskTaotal4"
          cols="6"
          :items="items2"
          label="จำนวนชั่วโมง"
          dense
          outlined
        ></v-select>
      </div>
      <br />
      
      <!-- <br />
      <label for>วัน-เวลาสิ้นสุดงาน:</label>
      <br />
      <input v-model="taskEnd" type="datetime-local" id="time" name="birthdaytime" /> -->
    </v-col>
</template>
<script>
export default {
     data: () => ({
    selected: null,
    items: ["1", "2", "3", "4"],
    items2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], 
    taskStart1: "",taskStart2: "",taskStart3: "",taskStart4: "",taskTaotal1: "",taskTaotal2: "",taskTaotal3: "",taskTaotal4: "",
    }),
}
</script>