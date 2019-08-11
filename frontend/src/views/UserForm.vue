<template>
  <div>
    <form>
      <div class="form-group">
        <label for="last-name">氏</label>
        <input
          v-model="LastName"
          type="text"
          class="form-control" />
        <!-- <input type="text" class="form-control" id="last-name" :value="value.lastName" @input="update('lastName', $event.target.value)" /> -->
      </div>
      <div>
        <label for="first-name">名</label>
        <!-- <input type="text" class="form-control" id="first-name" :value="value.firstName" @input="update('firstName', $event.target.value)" /> -->
        <input
          v-model="FirstName"
          type="text"
          class="form-control" />
      </div>
    </form>
    <div>
      <button @click="postMyServer">
        投稿
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
  name: "UserForm",
})
export default class UserForm extends Vue {
  LastName: string = ""
  FirstName: string = ""
  // @Prop() values! : { [key: string]: string }
  // update(key:string, val: string){
  //   this.values[key] = val;
  // }

  postMyServer(): void {
    alert(`投稿サンプル：${this.LastName} ${this.FirstName}が入力されています`)
  }
}
</script>
