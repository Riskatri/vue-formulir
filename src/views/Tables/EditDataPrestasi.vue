<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Edit Data Prestasi</small>
          </div>
        </div>
        <div class="card-body px-lg-6 py-lg-5">
          <form role="form" @submit.prevent="editData()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID PRESTASI SISWA"
              addon-left-icon="ni ni-hat-3"
              v-model="model.ID_PRESTASI_SISWA"
            ></base-input>

            <div class="row">
              <div class="col-lg-6">
                <label>JENIS PRESTASI</label>
                <select v-model="model.PRESTASI_ID">
                  <option selected disabled>pilih jenis prestasi</option>
                  <option
                    v-for="pres in prestasi"
                    :key="pres.PRESTASI_ID"
                    :value="pres.PRESTASI_ID"
                  >{{ pres.JENIS }}</option>
                </select>
              </div>
            </div>

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
                <label>TINGKAT PRESTASI</label>
                <select v-model="model.ID_TINGKAT">
                  <option selected disabled>pilih tingkat prestasi</option>
                  <option
                    v-for="rank in tingkat"
                    :key="rank.ID_TINGKAT"
                    :value="rank.ID_TINGKAT"
                  >{{ rank.TINGKAT_PRESTASI }}</option>
                </select>
              </div>
            </div>

            <br />
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA PRESTASI"
              addon-left-icon="ni ni-hat-3"
              v-model="model.NAMA_PRESTASI"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TAHUN"
              addon-left-icon="ni ni-calendar-08"
              v-model="model.TAHUN"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="PENYELENGGARA"
              addon-left-icon="ni ni-bus-front-12"
              v-model="model.PENYELENGGARA"
            ></base-input>

            <button type="submit" class="btn btn-primary">EDIT</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "edit-data-prestasi",
  data() {
    return {
      model: {
        ID_PRESTASI_SISWA: "",
        PRESTASI_ID: "",
        ID_SISWA: "",
        ID_TINGKAT: "",
        NAMA_PRESTASI: "",
        TAHUN: "",
        PENYELENGGARA: "",
      },
      result: [],
      siswa: [],
      prestasi: [],
      tingkat: [],
    };
  },
  created() {
    this.getData();
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/prestasi/semua_prestasi")
      .then((res) => {
        this.prestasi = res.data.result;
      });
    axios
      .get("http://localhost:8080/api/v1/tingkat_prestasi/semua_tingkat")
      .then((res) => {
        this.tingkat = res.data.result;
      });
  },

  methods: {
    getData() {
      axios
        .get(
          `http://localhost:8080/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=${this.$route.params.id}`
        )
        .then((response) => (this.result = response.data.result[0]));
    },
    editData() {
      axios
        .put(
          `http://localhost:8080/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=${this.$route.params.id}`,
          this.model
        )
        .then(() => {
          alert("edit success");
        });
    },
  },
};
</script>
<style></style>
