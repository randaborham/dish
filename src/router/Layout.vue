<template>
  <v-card>
    <v-layout>
      <!-- Sidebar -->
      <v-navigation-drawer
        location="left"
        permanent
        class="bg-light custom-side-shadow"
        v-model="drawer"
        :rail="rail"
        @click="rail = false"
        app
      >
        <!-- الشعار -->
        <div class="logo" v-if="!rail">
          <img :src="require('@/assets/Artboard 2 2.png')" alt="My Image" />
        </div>

        <!-- زر لإغلاق وفتح Sidebar -->
        <v-list-item nav>
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <!-- قائمة الروابط -->
        <v-list density="compact" nav>
          <router-link to="/" class="nav-item">
            <v-list-item prepend-icon="mdi-home-city">
              <v-list-item-title v-if="!rail" class="font-weight-bold"
                >Home</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <!-- 
          <router-link to="/account" class="nav-item">
            <v-list-item prepend-icon="mdi-account">
              <v-list-item-title v-if="!rail" class="font-weight-bold"
                >My Account</v-list-item-title
              >
            </v-list-item>
          </router-link> -->

          <router-link to="/user" class="nav-item">
            <v-list-item prepend-icon="mdi-account-group-outline">
              <v-list-item-title v-if="!rail" class="font-weight-bold"
                >Users</v-list-item-title
              >
            </v-list-item>
          </router-link>

          <router-link to="/about" class="nav-item">
            <v-list-item prepend-icon="mdi-cog">
              <v-list-item-title v-if="!rail" class="font-weight-bold"
                >Settings</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <!-- المحتوى الرئيسي الذي يتمدد عند غلق Sidebar -->
      <v-main :class="{ 'content-expanded': !rail }" class="bg-gray-100">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
  <Nav />
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  components: { Nav },
  data() {
    return {
      drawer: true, // حالة الـ drawer لفتح وغلق الـ Sidebar
      rail: false, // تعيين الـ rail كـ false افتراضياً ليبدأ الـ Sidebar مفتوحاً بالكامل
    };
  },
};
</script>
<style scoped>
/* التنسيق الرئيسي للـ v-main */
.v-main {
  transition: margin-left 0.3s ease, width 0.3s ease;
  padding: 20px;
}

/* تعديل العرض عند وجود Sidebar مفتوح أو مغلق */
.content-expanded {
  margin-left: 80px; /* عرض الـ Sidebar في حالة rail */
  width: calc(100% - 80px); /* توسيع المحتوى ليأخذ باقي الشاشة */
}

/* التنسيق الافتراضي للـ Sidebar */
.v-navigation-drawer {
  transition: width 0.3s ease;
}

/* العناصر داخل قائمة الروابط */
.nav-item {
  margin-bottom: 0.25rem; /* تباعد بين العناصر */
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.375rem;
  padding: 0.625rem;
  font-weight: 900 !important;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* تأثير عند التحويم على العنصر */
.nav-item:hover {
  background: #bd0600;
  color: white;
}

/* التأثير عند استخدام الوضع المظلم */
.dark .nav-item:hover {
  background-color: #181f32;
  color: #e4e7eb;
}

/* إضافة ظل للـ Sidebar */
.custom-side-shadow {
  box-shadow: 10px 0 10px -5px rgba(0, 0, 0, 0.2);
}
</style>
