<template>
  <div>
    <my-items :group-id="parentGroupId" @on-changed="onChange"/>
    <button
      class="btn btn-primary"
      @click="changeGroupId">
      test
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyItems from "@/components/MyItems.vue";
import ISample from "@/events/ISample.ts";

@Component({
  components: {
    MyItems
  }
})
export default class Sample extends Vue implements ISample {
  parentGroupId: number = 123;

  changeGroupId(): void {
    console.log("呼ばれたよ");
    this.parentGroupId = 234;
  }

  onChange(v: string): string {
    console.log(`変更後の値${v}`);
    return "";
  }
}
</script>
