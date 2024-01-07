<script setup>
import { RoutesLabels } from "@/router";
import Button from "primevue/button";

const formSchema = {
  fields: [
    {
      label: "Full Name",
      type: "text",
      model: "fullName",
      placeholder: "John Doe",
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    {
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      required: true,
    },
    {
      label: "Subscribe to Newsletter",
      type: "checkbox",
      description: "Receive updates and special offers",
    },
    {
      label: "Select Country",
      type: "select",
      required: true,
      options: [
        {
          label: "United States",
          value: "USA",
        },
        {
          label: "Canada",
          value: "Canada",
        },
        {
          label: "United Kingdom",
          value: "UK",
        },
        {
          label: "Australia",
          value: "Australia",
        },
      ],
    },
    {
      label: "Terms and Conditions",
      type: "checkbox",
      required: true,
      description: "I accept the terms and conditions",
    },
  ],
};
</script>

<template>
  <div>
    <h2>Form Page</h2>
    <form-renderer :schema="formSchema" />
    <router-link v-slot="{ navigate }" :to="`${RoutesLabels.ROOT}`" custom>
      <Button label="Return to Home" @click="navigate" />
    </router-link>
  </div>
</template>
