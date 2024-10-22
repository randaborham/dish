<template>
  <div class="bg-gray-100 lg:min-h-[87.7vh] lg:ps-[110px] ps-[50px] min-h-[90vh]">
    <div>
      <div class="pt-[20px]">
        <div
          class="flex flex-col gap-[20px] bg-white rounded-[20px] lg:w-[90%] lg:m-auto lg:p-[16px] pt-[40px] lg:pt-[30px] md:p-[28px] shadow-lg"
        >
          <h2 class="text-[24px] text-[#373837] font-semibold">Categories</h2>
          <div>
            <div
              class="flex shadow flex-col gap-[20px] shadow-formBox rounded-[20px] lg:p-[16px] ps-[30px] pe-[20px]"
            >
              <div>
                <div class="flex lg:items-center md:flex-row flex-col mb-5 gap-4">
                  <div class="text-left">
                    <input
                      type="text"
                      class="bg-gray-100 py-2 rounded-full px-4"
                      placeholder="Search..."
                    />
                  </div>
                  <div
                    class="flex flex-wrap justify-between items-center ltr:ml-auto gap-6 lg:ltr:ml-auto lg:rtl:mr-auto"
                  >
                    <div
                      class="flex justify-between items-center gap-4 ltr:ml-auto rtl:mr-auto"
                    >
                      <div class="dropdown">
                        <button
                          type="button"
                          class="!flex items-center border font-semibold border-[#BD0600] dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark"
                        >
                          <span class="ltr:mr-1 rtl:ml-1 text-[#BD0600]">Status</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-[#BD0600]"
                          >
                            <path
                              d="M19 9L12 15L5 9"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="dropdown">
                        <button
                          type="button"
                          class="!flex items-center border font-semibold border-[#BD0600] dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark"
                        >
                          <span class="ltr:mr-1 rtl:ml-1 text-[#BD0600]">Columns</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-[#BD0600]"
                          >
                            <path
                              d="M19 9L12 15L5 9"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center flex-end justify-end gap-2 md:gap-2">
                      <div class="flex gap-2 md:gap-4 lg:gap-[40px]">
                        <button
                          @click="isActive = true"
                          class="btn bg-gradient-to-r px-5 py-2 from-[#F23F39] flex flex-end items-center justify-end to-[#BD0600] rounded-xl text-md shadow-none text-white"
                        >
                          <span class="ms-[-10px]">
                            <svg
                              width="50"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 3.33331V12.6666"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M3.33325 8H12.6666"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                          <p class="ms-[-10px] flex flex-end">Add New</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel mt-6">
                  <div class="datatables z-10">
                    <div
                      class="mantine-datatable whitespace-nowrap table-hover"
                      style="height: 100%; min-height: 200px"
                    >
                      <div class="mantine-datatable-scroll-area">
                        <div style="min-width: 100%; display: table">
                          <table
                            class="w-full text-sm text-left rtl:text-right text-gray-500"
                          >
                            <thead
                              class="text-xs text-gray-700 uppercase bg-white border-b-[2px] border-b-gray-100"
                            >
                              <tr>
                                <th class="px-6 py-3">Product</th>
                                <th class="px-6 py-3">Price</th>
                                <th class="px-6 py-3">Quantity</th>
                                <th class="px-6 py-3">Total</th>
                                <th class="px-6 py-3">
                                  <span class="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in items"
                                :key="index"
                                class="bg-white border-b hover:bg-gray-50"
                              >
                                <th class="pe-6 py-4 font-medium text-gray-900">
                                  <div class="flex items-center">
                                    <img
                                      :src="require('@/assets/Frame 1000010026.png')"
                                      class="w-[70px] h-[50px]"
                                      alt="product image"
                                    />

                                    <p class="font-medium text-[16px]">{{ item.name }}</p>
                                  </div>
                                </th>
                                <td class="px-6 py-4 font-medium text-[16px]">
                                  {{ item.price }}$
                                </td>
                                <td class="px-4 py-4">
                                  <div
                                    class="flex items-center justify-between bg-[#F6F6Fc] px-[10px] p-[5px] w-[100px] h-[50px] rounded-full"
                                  >
                                    <button
                                      @click="decreaseQuantity(index)"
                                      class="text-[#BD0600]"
                                    >
                                      <svg
                                        width="21"
                                        height="19"
                                        viewBox="0 0 21 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_10_1601)">
                                          <rect
                                            width="21"
                                            height="19"
                                            rx="9.5"
                                            fill="#BD0600"
                                          />
                                          <path
                                            d="M15.6667 8H5.66667C5.22464 8 4.80072 8.1756 4.48816 8.48816C4.17559 8.80072 4 9.22464 4 9.66667C4 10.1087 4.17559 10.5326 4.48816 10.8452C4.80072 11.1577 5.22464 11.3333 5.66667 11.3333H15.6667C16.1087 11.3333 16.5326 11.1577 16.8452 10.8452C17.1577 10.5326 17.3333 10.1087 17.3333 9.66667C17.3333 9.22464 17.1577 8.80072 16.8452 8.48816C16.5326 8.1756 16.1087 8 15.6667 8Z"
                                            fill="white"
                                          />
                                        </g>
                                      </svg>
                                    </button>
                                    <p class="text-[20px] m-[10px]">{{ item.count }}</p>
                                    <button
                                      @click="increaseQuantity(index)"
                                      class="text-[#BD0600]"
                                    >
                                      <svg
                                        width="21"
                                        height="21"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          width="21"
                                          height="21"
                                          rx="10.5"
                                          fill="#BD0600"
                                        />
                                        <path
                                          d="M15.8051 9.81601H11.3453V5.19492C11.3453 4.53321 10.8094 3.99727 10.1477 3.99727C9.48594 3.99727 8.95 4.53321 8.95 5.19492V9.81601H4.19219C3.53048 9.81601 2.99454 10.3519 2.99454 11.0136C2.99454 11.6753 3.53048 12.2113 4.19219 12.2113H8.95V16.8051C8.95 17.4668 9.48594 18.0027 10.1477 18.0027C10.8094 18.0027 11.3453 17.4668 11.3453 16.8051V12.2113H15.8051C16.4668 12.2113 17.0027 11.6753 17.0027 11.0136C17.0027 10.3519 16.4668 9.81601 15.8051 9.81601Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                                <td class="px-6 py-4 font-medium text-[16px]">
                                  {{ item.total }}$
                                </td>
                                <td class="px-6 py-4 text-right">
                                  <button
                                    @click="removeItem(index)"
                                    class="font-medium text-[#BD0600] hover:underline"
                                  >
                                    Remove
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Cart Summary -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- نافذة الحوار -->
    <v-dialog v-model="isActive" max-width="500">
      <v-card title="Add New Item">
        <v-card-text>
          <!-- محتويات نافذة الحوار -->
          <div class="">
            <Add />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" @click="isActive = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Add from "@/components/Add.vue";
export default {
  components: {
    Add,
  },
  data() {
    return {
      isActive: false, // للتحكم في عرض نافذة الحوار
      items: [
        { name: "Product 1", price: 10, count: 1, total: 10 },
        { name: "Product 2", price: 20, count: 1, total: 20 },
        { name: "Product 3", price: 30, count: 1, total: 30 },
      ],
    };
  },
  computed: {
    subtotal() {
      return this.items.reduce((acc, item) => acc + item.total, 0);
    },
    tax() {
      return (this.subtotal * 0.1).toFixed(2);
    },
    total() {
      return (parseFloat(this.subtotal) + parseFloat(this.tax)).toFixed(2);
    },
  },
  methods: {
    increaseQuantity(index) {
      this.items[index].count++;
      this.items[index].total = this.items[index].count * this.items[index].price;
    },
    decreaseQuantity(index) {
      if (this.items[index].count > 1) {
        this.items[index].count--;
        this.items[index].total = this.items[index].count * this.items[index].price;
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    checkout() {
      alert("Proceeding to checkout");
    },
  },
};
</script>

<style scoped>
/* الحاوية التي تحتوي على الجدول */
.mantine-datatable-scroll-area {
  max-height: 400px; /* تعيين ارتفاع ثابت للحاوية */
  overflow-y: auto; /* إضافة تمرير رأسي */
  overflow-x: auto; /* إضافة تمرير أفقي في حال كانت الأعمدة كبيرة */
}

/* الجدول نفسه */
.table-wrapper {
  display: block; /* لتفعيل تمرير الـ div */
  min-width: 100%; /* عرض الجدول */
}

/* تصحيح تنسيق الجدول عند الحاجة للتمرير */
table {
  width: 100%; /* جعل الجدول يأخذ المساحة الكاملة */
}
</style>
