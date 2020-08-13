<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Add Data Siswa Yang Keluar</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="add()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID PENDAFTARAN SISWA KELUAR"
              addon-left-icon="ni ni-circle-08"
              v-model="model.DAFTAR_KELUAR_ID"
            ></base-input>

            <div class="row">
              <div class="col-lg-6">
                <label>SISWA</label>
                <select v-model="model.ID_SISWA">
                  <option selected disabled>pilih siswa</option>
                  <option
                    v-for="sis in siswa"
                    :key="sis.ID_SISWA"
                    :value="sis.ID_SISWA"
                  >{{ sis.NAMA_LENGKAP }}</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <label>KELUAR KARENA</label>
                <select v-model="model.ID_ALASAN">
                  <option selected disabled>pilih alasan keluar</option>
                  <option
                    v-for="alasan in keluar"
                    :key="alasan.ID_ALASAN"
                    :value="alasan.ID_ALASAN"
                  >{{ alasan.KELUAR_KARNA }}</option>
                </select>
              </div>
            </div>

            <br />

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TANGGAL KELUAR"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TANGGAL_KELUAR"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="ALASAN"
              addon-left-icon="ni ni-folder-17"
              v-model="model.ALASAN"
            ></base-input>

            <button type="submit">add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "add-data-keluar",
  data() {
    return {
      model: {
        DAFTAR_KELUAR_ID: "",
        ID_SISWA: "",
        ID_ALASAN: "",
        TANGGAL_KELUAR: "",
        ALASAN: "",
      },
      siswa: [],
      keluar: [],
    };
  },
  created() {
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/alasan_keluar/semua_alasan")
      .then((res) => {
        this.keluar = res.data.result;
      });
  },
  methods: {
    add() {
      axios
        .post("http://localhost:8080/api/v1/daftar_keluar", this.model)
        .then(() => {
          alert("success add data");
          this.$router.go();
        });
    },
  },
};
</script>
<style></style>
