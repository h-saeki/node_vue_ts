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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import { Item } from "../models/Item";
import axios from "axios";

@Component({
  name: "my-items"
})
export default class Items extends Vue {
  @Prop() groupId!: number;
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

  /** watch */
  @Watch("groupId")
  onValueChange(newValue: number, oldValue: number): void {
    console.log(`watch: ${newValue}, ${oldValue}`);
  }
}
</script>
