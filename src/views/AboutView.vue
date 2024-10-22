<template>
  <div class="bg-gray-100 min-h-[87.5vh] lg:ps-[110px]">
    <div>
      <div class="pt-[20px]">
        <div
          class="flex flex-col gap-[20px] bg-white rounded-[20px] lg:w-[90%] lg:m-auto p-[16px] lg:px-[20px] md:p-[28px] shadow-lg"
        >
          <v-card class="">
            <v-tabs v-model="tab" bg-color="#BD0600" class="flex">
              <v-tab value="one" class="">Change Password</v-tab>
              <v-tab value="two" class="mx-[150px]">Social Media</v-tab>
              <v-tab value="three">Profile</v-tab>
            </v-tabs>

            <v-card-text>
              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                  <form @submit.prevent="">
                    <div class="flex flex-col lg:p-5 gap-[20px]">
                      <div class="grid-cols-12 lg:p-5 p-2 grid gap-4">
                        <div class="lg:col-span-12 md:col-span-12 col-span-12">
                          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                            <!-- Old Password -->
                            <div class="relative">
                              <label for="" class="flex flex-start">Old Password</label>
                              <input
                                type="password"
                                placeholder="************"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <div
                                class="absolute inset-y-0 right-0 top-6 text-[#BD0600] pr-3 flex items-center cursor-pointer"
                              >
                                <v-icon>mdi-eye</v-icon>
                              </div>
                            </div>

                            <!-- New Password -->

                            <div class="relative">
                              <label for="" class="flex flex-start">New Password</label>
                              <input
                                type="password"
                                placeholder="************"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <div
                                class="absolute inset-y-0 right-0 top-6 text-[#BD0600] pr-3 flex items-center cursor-pointer"
                              >
                                <v-icon>mdi-eye</v-icon>
                              </div>
                            </div>

                            <!-- Confirm Password -->

                            <div class="relative">
                              <label for="" class="flex flex-start"
                                >Confirm Password</label
                              >
                              <input
                                type="password"
                                placeholder="************"
                                class="mt-1 block w-full px-3 py-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                              <div
                                class="absolute inset-y-0 right-0 top-6 text-[#BD0600] pr-3 flex items-center cursor-pointer"
                              >
                                <v-icon>mdi-eye</v-icon>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex capitalize justify-end">
                      <button
                        type="submit"
                        class="bg-[#BD0600] rounded-full text-[18px] text-white shadow-md px-10 py-3 mt-6"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </v-tabs-window-item>

                <v-tabs-window-item value="two">
                  <form @submit.prevent="">
                    <div class="flex flex-col p-5 gap-[20px] pb-[30px]">
                      <div class="grid-cols-12 lg:p-5 p-2 grid gap-4">
                        <div class="lg:col-span-12 md:col-span-12 col-span-12">
                          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                            <!-- Phone Number -->
                            <div class="flex flex-col p-0 justify-end">
                              <label class="flex flex-start mb-[5px]">Phone Number</label>

                              <vue-tel-input
                                class="mt-1 block w-full px-3 py-1 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                v-model="phone"
                              ></vue-tel-input>
                            </div>

                            <!-- WhatsApp Number -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">WhatsApp Number</label>
                              <input
                                type="text"
                                placeholder="WhatsApp Number"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Facebook Link -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Facebook Link</label>
                              <input
                                type="text"
                                placeholder="Enter Facebook Link"
                                class="mt-1 block w-full px-3 py-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Twitter Link -->

                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Twitter Link</label>
                              <input
                                type="text"
                                placeholder="Enter Twitter Link"
                                class="mt-1 block w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Tiktok Link -->

                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Tiktok Link</label>
                              <input
                                type="text"
                                placeholder="Enter Tiktok Link"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Instagram Link -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Instagram Link</label>
                              <input
                                type="text"
                                placeholder="Enter Instagram Link"
                                class="mt-1 block w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Snapchat Link -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Snapchat Link</label>
                              <input
                                type="text"
                                placeholder="Enter Snapchat Link"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex capitalize justify-end">
                      <button
                        type="submit"
                        class="bg-[#BD0600] rounded-full text-[18px] text-white bg-custom-gradient shadow-md px-10 py-3 mt-6"
                      >
                        Add Social
                      </button>
                    </div>
                  </form>
                </v-tabs-window-item>

                <v-tabs-window-item value="three">
                  <form @submit.prevent="">
                    <div class="flex flex-col p-5 gap-[20px] pb-[30px]">
                      <!-- Upload Image and Cover Image -->
                      <div class="w-full p-4">
                        <div
                          class="flex justify-center bg-[#F5F5F5] items-center border-dashed border-2 rounded-3xl border-[#B7B7B7] p-10"
                        >
                          <v-file-input
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            label="Upload Image"
                            placeholder="Pick an avatar"
                            prepend-icon="mdi-cloud-upload"
                            class="no-border-bottom ma-2"
                          >
                          </v-file-input>
                        </div>
                      </div>
                      <!-- Form Inputs -->
                      <div class="grid-cols-12 lg:p-5 p-2 grid gap-4">
                        <div class="lg:col-span-12 md:col-span-12 col-span-12">
                          <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                            <!-- Restaurant Name -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Your Name</label>
                              <input
                                type="text"
                                placeholder="Enter Restaurant Name"
                                class="mt-1 block w-full px-3 py-3 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Publication Start Date -->

                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Start Date</label>
                              <input
                                type="date"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Publication End Date -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">End Date</label>
                              <input
                                type="date"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>

                            <!-- Location Address -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Location Address</label>
                              <input
                                type="text"
                                placeholder="El Mansoura - Egypt"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <!-- Phone Number -->

                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Phone Number</label>
                              <vue-tel-input
                                class="mt-1 block w-full px-3 py-1 border bg-gray-100 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                v-model="phone"
                              ></vue-tel-input>
                            </div>

                            <!-- Email -->
                            <div class="flex flex-col gap-2">
                              <label class="flex flex-start">Email</label>
                              <input
                                type="email"
                                placeholder="example@gmail.com"
                                class="mt-1 block w-full px-3 py-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex capitalize justify-end">
                      <button
                        type="submit"
                        class="bg-[#BD0600] rounded-full text-[18px] text-white bg-custom-gradient shadow-md px-10 py-3 mt-6"
                      >
                        Edit Profile
                      </button>
                    </div>
                  </form>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
<style>
.no-border-bottom {
  border-bottom: none !important;
}
</style>
