<template>
  <nav class="flex justify-between items-center p-4 bg-gray-100 shadow border-b">
    <div class="flex">
      <h2 class="text-[24px] ms-[250px] font-[500] hidden lg:block">Dashboard</h2>
    </div>
    

<form>   
    <label for="search" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-full h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
  </div>
</form>



  <Menu as="div" class="relative lg:me-[-300px] ">
      <MenuButton class="flex justify-end rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="sr-only">Open user menu</span>
           <v-btn
        v-bind="attrs"
        v-on="on"
        icon
        class="relative lg:p-2 p-1 rounded-full bg-white dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
      >
        <v-icon>mdi-bell</v-icon>
        <span class="flex absolute w-3 h-3 right-0 top-0">
          <span class="animate-ping absolute -left-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-success/50 opacity-75"></span>
          <span class="relative inline-flex rounded-full w-[6px] h-[6px] bg-success"></span>
        </span>
      </v-btn>
      </MenuButton>

      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems class="absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              <v-list-item class="dark:text-white-light/90">
          <div class="group flex px-2 py-2">
            <v-avatar size="50" class="rounded-full">
               <img :src="require('@/assets/user-profile.jpeg')" alt="My Image" />
              <v-icon class="absolute bottom-0 right-[6px]" color="success" small>mdi-circle</v-icon>
            </v-avatar>

            <div class="">
              <p class="text-[12px]">John Doeinvite you to Prototyping</p>
              <span class="text-xs  font-normal dark:text-gray-500">2 hours ago</span>
            </div>

            <v-btn
              icon
              class="ml-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
              @click="removeNotification(notification.id)"
            >
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </div>
        </v-list-item>
            </a>
          </MenuItem>
         <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              <v-list-item class="dark:text-white-light/90">
          <div class="group flex px-2 py-2">
            <v-avatar size="50" class="rounded-full">
               <img :src="require('@/assets/user-profile.jpeg')" alt="My Image" />
              <v-icon class="absolute bottom-0 right-[6px]" color="success" small>mdi-circle</v-icon>
            </v-avatar>

            <div class="">
              <p class="text-[12px]">John Doeinvite you to Prototyping</p>
              <span class="text-xs  font-normal dark:text-gray-500">2 hours ago</span>
            </div>

            <v-btn
              icon
              class="ml-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
              @click="removeNotification(notification.id)"
            >
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </div>
        </v-list-item>
            </a>
          </MenuItem>
            <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              <v-list-item class="dark:text-white-light/90">
          <div class="group flex px-2 py-2">
            <v-avatar size="50" class="rounded-full">
               <img :src="require('@/assets/user-profile.jpeg')" alt="My Image" />
              <v-icon class="absolute bottom-0 right-[6px]" color="success" small>mdi-circle</v-icon>
            </v-avatar>

            <div class="">
              <p class="text-[12px]">John Doeinvite you to Prototyping</p>
              <span class="text-xs  font-normal dark:text-gray-500">2 hours ago</span>
            </div>

            <v-btn
              icon
              class="ml-auto text-neutral-300 hover:text-danger opacity-0 group-hover:opacity-100"
              @click="removeNotification(notification.id)"
            >
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </div>
        </v-list-item>
            </a>
          </MenuItem>
             <v-list-item>
          <div class="p-4">
            <v-btn color="#BD0600" block small>Read All Notifications</v-btn>
          </div>
        </v-list-item>
        </MenuItems>
      </Transition>
    </Menu>
    <Menu as="div" class="relative">
      <MenuButton class="flex justify-end rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="sr-only">Open user menu</span>
        <img
          class="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Avatar"
        />
      </MenuButton>

      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              Your Profile
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              Settings
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
            >
              Sign out
            </a>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  </nav>
  <router-view />
</template>
<script setup>
import { ref } from 'vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const notifications = ref([
  { id: 1, message: "New message from John", time: "2 hours ago", profile: "profile1.jpg" },
  { id: 2, message: "Your order is delivered", time: "3 days ago", profile: "profile2.jpg" },
]);

function removeNotification(id) {
  notifications.value = notifications.value.filter((n) => n.id !== id);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {

     background: linear-gradient(to right, #F23F39, #BD0600); /* hover:bg-gradient-to-r from-[#F23F39] to-[#BD0600] */
  color: white !important;
    background: #BD0600;
}
</style>
