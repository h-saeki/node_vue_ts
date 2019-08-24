<template>
  <div>
    <table>
      <thead>
        <td>ID</td>
        <td>名前</td>
      </thead>
      <tbody>
        <tr
          v-for="e in list"
          :key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.name }}</td>
        </tr>
      </tbody>
    </table>
    <div>親から渡されたprops{{ groupId }}</div>
    <div>{{ errorMessage }}</div>
    <button @click="onClick">なにか値を変更</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Item } from "../models/Item";
import axios from "axios";

@Component({
  name: "my-items"
})
export default class MyItems extends Vue {
  @Prop({ default: 0 })
  groupId!: number;
  list: Item[] = [];
  errorMessage: string = "";

  mounted() {
    console.log("呼ばれました");
    this.Query();
  }
  Query(): void {
    axios
      .get("/items")
      .then(response => {
        this.list = response.data;
        this.errorMessage = "取れました";
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(response => {
        console.log("取得だめでした");
        this.errorMessage = "取得だめでした";
        this.list = [];
        this.list.push(new Item(1, "カントリーマアム"));
        this.list.push(new Item(2, "うまい棒"));
      });
  }
  onClick(): void {
    this.list[0].name = this.list[0].name + "r";
  }
}
</script>
