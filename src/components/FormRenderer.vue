<script setup lang="ts">
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import Card from "primevue/card";

const props = defineProps(["schema"]);
const formData = ref({});

const fields = computed(() => props.schema.fields);

const getComponentType = (field) => {
  switch (field.type) {
    case "text":
    case "email":
      return InputText;
    case "select":
      return Dropdown;
    case "checkbox":
      return Checkbox;
    default:
      return null;
  }
};
const onSubmit = (event) => {
  event.preventDefault();
  console.table(formData);
};
</script>

<template>
  <Card>
    <template #title>Form Renderer</template>
    <template #content>
      <form @submit="onSubmit">
        <component
          :is="getComponentType(field)"
          v-for="(field, index) in fields"
          :key="index"
          v-model="formData[field.model]"
          :placeholder="field.placeholder"
          :options="field.type === 'select' ? field.options : undefined"
          :option-label="field.type === 'select' ? 'label' : undefined"
          :option-value="field.type === 'select' ? 'value' : undefined"
          :binary="field.type === 'checkbox' ? true : undefined"
          :required="field.required"
          :minlength="
            field.type === 'text' || field.type === 'email' ? 5 : undefined
          "
          :maxlength="
            field.type === 'text' || field.type === 'email' ? 20 : undefined
          "
        />
        <Button type="submit" label="Submit" />
      </form>
    </template>
  </Card>
</template>
