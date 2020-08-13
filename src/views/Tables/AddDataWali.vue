<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Add Data WALI</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="add()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID WALI"
              addon-left-icon="ni ni-circle-08"
              v-model="model.ID_WALI"
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
                <label>PEKERJAAN</label>
                <select v-model="model.ID_PEKERJAAN">
                  <option selected disabled>pilih pekerjaan</option>
                  <option
                    v-for="pek in pekerjaan"
                    :key="pek.ID_PEKERJAAN"
                    :value="pek.ID_PEKERJAAN"
                  >{{ pek.JENIS_PEKERJAAN }}</option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <label>PENDIDIKAN</label>
                <br />
                <select v-model="model.ID_PENDIDIKAN">
                  <option selected disabled>pilih pendidikan</option>
                  <option
                    v-for="pen in pendidikan"
                    :key="pen.ID_PENDIDIKAN"
                    :value="pen.ID_PENDIDIKAN"
                  >{{ pen.JENJANG_PENDIDIKAN }}</option>
                </select>
              </div>
            </div>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA"
              addon-left-icon="ni ni-single-02"
              v-model="model.NAMA_WALI"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NIK"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NIK_WALI"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TAHUN LAHIR"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TAHUN_LAHIR"
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
  name: "add-data-wali",
  data() {
    return {
      model: {
        ID_WALI: "",
        ID_SISWA: "",

        ID_PEKERJAAN: "",
        ID_PENDIDIKAN: "",

        NAMA_WALI: "",
        NIK_WALI: "",
        TAHUN_LAHIR: "",
      },
      siswa: [],
      pekerjaan: [],
      pendidikan: [],
    };
  },
  created() {
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/pekerjaan/semua_pekerjaan")
      .then((res) => {
        this.pekerjaan = res.data.result;
      });
    axios
      .get("http://localhost:8080/api/v1/pendidikan/semua_pendidikan")
      .then((res) => {
        this.pendidikan = res.data.result;
      });
  },
  methods: {
    add() {
      axios
        .post("http://localhost:8080/api/v1/data_wali", this.model)
        .then(() => {
          alert("success add data");
          this.$router.go();
        });
    },
  },
};
</script>
<style></style>
