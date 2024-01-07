<template>
  <div>
    <component
      :is="getComponentType(field)"
      v-for="(field, index) in fields"
      :key="index"
      v-model="formData[field.model]"
      :placeholder="field.placeholder"
      :mask="field.type === 'email' ? 'a*@a*.a*' : undefined"
      :options="field.type === 'select' ? field.options : undefined"
    ></component>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";

const props = defineProps(["schema"]);
const formData = ref({});

const fields = computed(() => props.schema.fields);

const getComponentType = (field) => {
  switch (field.type) {
    case "text":
      return InputText;
    case "email":
      return InputMask;
    case "select":
      return Dropdown;
    case "checkbox":
      return Checkbox;
    default:
      return null;
  }
};
</script>
