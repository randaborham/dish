<template>
  <form @submit.prevent="handleSubmit" class="p-4 md:p-5">
    <div class="grid gap-[20px] mb-4 grid-cols-12">
      <!-- حقل Category Name -->
      <div class="lg:col-span-12 col-span-12">
        <label for="name" class="block mb-2 text-[16px] font-medium text-[#2E2E2E] dark:text-white">
          Category Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="formData.name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Type Category Name"
        />
      </div>

      <!-- عنصر التحكم في Delivery باستخدام v-switch -->
      <div class="lg:col-span-6 col-span-12">
        <h2 class="text-[#2E2E2E] text-center text-[16px] font-medium ">Delivery</h2>
        <div class="flex gap-4 capitalize items-center justify-center">
          <span :class="[!isChecked ? 'text-red-500 font-semibold' : '', 'text-[16px]']">No</span>

          <v-switch
            v-model="isChecked"
            inset
            color="red"
            class="mx-4 mt-[17px]"
          ></v-switch>

          <span :class="[isChecked ? 'text-red-500 font-semibold' : '', 'text-[16px]']">Yes</span>
        </div>
      </div>

    
    </div>

    <!-- زر إرسال النموذج -->
    <div class="w-full flex justify-end">
      <LoadingButton v-if="isLoading || editIsLoading" />
      <button
        v-else
        type="submit"
        class="text-white flex bg-gradient-to-r from-[#F23F39] to-[#BD0600] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
        </svg>
        Add new Categories
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      formData: {
        name: this.data ? this.data.name : ''
      },
      isChecked: false,
      isLoading: false,
      editIsLoading: false
    };
  },
  methods: {
    handleSubmit() {
      // منطق إرسال النموذج هنا
      console.log('Form Submitted:', this.formData);
    },
    setFile(file) {
      // منطق التعامل مع رفع الملف هنا
      console.log('File Uploaded:', file);
    }
  }
};
</script>

<style scoped>
/* يمكنك إضافة أنماط CSS هنا إذا كنت بحاجة إلى تخصيص إضافي */
</style>
