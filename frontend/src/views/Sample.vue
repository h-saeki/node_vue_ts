<template>
  <div>
    <my-items :group-id="parentGroupId" />
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

@Component({
  components: {
    MyItems
  }
})
export default class Sample extends Vue {
  parentGroupId: number = 123;

  changeGroupId(): void {
    console.log("呼ばれたよ");
    this.parentGroupId = 234;
  }
}
</script>
