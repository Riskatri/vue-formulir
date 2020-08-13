import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";
import AddData from "../src/views/Tables/AddData.vue";
import EditData from "../src/views/Tables/EditData.vue";
import AddDataAyah from "../src/views/Tables/AddDataAyah.vue";
import EditDataAyah from "../src/views/Tables/EditDataAyah.vue";
import AddDataIbu from "../src/views/Tables/AddDataIbu.vue";
import EditDataIbu from "../src/views/Tables/EditDataIbu.vue";
import AddDataWali from "../src/views/Tables/AddDataWali.vue";
import EditDataWali from "../src/views/Tables/EditDataWali.vue";
import AddDataKontak from "../src/views/Tables/AddDataKontak.vue";
import EditDataKontak from "../src/views/Tables/EditDataKontak.vue";
import AddDataPriodik from "../src/views/Tables/AddDataPriodik.vue";
import EditDataPriodik from "../src/views/Tables/EditDataPriodik.vue";
import AddDataPrestasi from "../src/views/Tables/AddDataPrestasi.vue";
import EditDataPrestasi from "../src/views/Tables/EditDataPrestasi.vue";
import AddDataBeasiswa from "../src/views/Tables/AddDataBeasiswa.vue";
import EditDataBeasiswa from "../src/views/Tables/EditDataBeasiswa.vue";
import AddRegistrasi from "../src/views/Tables/AddRegistrasi.vue";
import EditRegistrasi from "../src/views/Tables/EditRegistrasi.vue";
import AddDataKeluar from "../src/views/Tables/AddDataKeluar.vue";
import EditDataKeluar from "../src/views/Tables/EditDataKeluar.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Dashboard.vue"),
        },
        {
          path: "/dataOrtu",
          name: "data-ortu",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/DataOrtu.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserProfile.vue"),
        },
        {
          path: "/maps",
          name: "maps",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Maps.vue"),
        },
        {
          path: "/dataSiswa",
          name: "data-siswa",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/DataSiswa.vue"),
        },
      ],
    },
    {
      path: "/",
      redirect: "login",
      component: AuthLayout,
      children: [
        {
          path: "/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Login.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Register.vue"),
        },
      ],
    },
    {
      path: "/addSiswa",
      component: AddData,
      name: "add-data",
    },
    {
      path: "/edit/:id",
      component: EditData,
      name: "edit-data",
    },
    {
      path: "/addAyah",
      component: AddDataAyah,
      name: "add-data-ayah",
    },
    {
      path: "/edit_ayah/:id",
      component: EditDataAyah,
      name: "edit-data-ayah",
    },
    {
      path: "/addIbu",
      component: AddDataIbu,
      name: "add-data-ibu",
    },
    {
      path: "/edit_ibu/:id",
      component: EditDataIbu,
      name: "edit-data-ibu",
    },
    {
      path: "/addWali",
      component: AddDataWali,
      name: "add-data-wali",
    },
    {
      path: "/edit_wali/:id",
      component: EditDataWali,
      name: "edit-data-wali",
    },
    {
      path: "/addContact",
      component: AddDataKontak,
      name: "add-data-kontak",
    },
    {
      path: "/edit_contact/:id",
      component: EditDataKontak,
      name: "edit-data-kontak",
    },
    {
      path: "/addPriodik",
      component: AddDataPriodik,
      name: "add-data-priodik",
    },
    {
      path: "/edit_priodik/:id",
      component: EditDataPriodik,
      name: "edit-data-priodik",
    },
    {
      path: "/addPrestasi",
      component: AddDataPrestasi,
      name: "add-data-prestasi",
    },
    {
      path: "/edit_prestasi/:id",
      component: EditDataPrestasi,
      name: "edit-data-prestasi",
    },
    {
      path: "/addBeasiswa",
      component: AddDataBeasiswa,
      name: "add-data-beasiswa",
    },
    {
      path: "/edit_beasiswa/:id",
      component: EditDataBeasiswa,
      name: "edit-data-beasiswa",
    },
    {
      path: "/addRegistrasi",
      component: AddRegistrasi,
      name: "add-data-registrasi",
    },
    {
      path: "/edit_regis/:id",
      component: EditRegistrasi,
      name: "edit-data-registrasi",
    },
    {
      path: "/addPendaftaran",
      component: AddDataKeluar,
      name: "add-data-keluar",
    },
    {
      path: "/edit_keluar/:id",
      component: EditDataKeluar,
      name: "edit-data-keluar",
    },
  ],
});
