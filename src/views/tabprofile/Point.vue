<template>
    <v-container  fluid>
        <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">คะแนน</th>
            <th class="text-left">เครดิต</th>
             <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.point }}</td>
            <td>{{ item.credit }}</td>
            <td>แลก</td>
          </tr>
          
        </tbody>
      </template>
    </v-simple-table>
    </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      desserts: [
        {
          point: 10,
          credit: 50,
        },
        {
          point: 20,
          credit: 100,
        },
        {
          point: 30,
          credit: 200,
        },
        {
          point: 60,
          credit: 500,
        },
        {
          point: 100,
          credit: 1000,
        },
       
      ],
    }
  }
};
</script>