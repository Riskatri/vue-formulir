<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Edit Data Beasiswa</small>
          </div>
        </div>
        <div class="card-body px-lg-6 py-lg-5">
          <form role="form" @submit.prevent="editData()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID BEASISWA"
              addon-left-icon="ni ni-hat-3"
              v-model="model.BEASISWA_ID"
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
                <label>JENIS BEASISWA</label>
                <select v-model="model.ID_JENIS_BEASISWA">
                  <option selected disabled>pilih jenis beasiswa</option>
                  <option
                    v-for="bea in beasiswa"
                    :key="bea.ID_JENIS_BEASISWA"
                    :value="bea.ID_JENIS_BEASISWA"
                  >{{ bea.JENIS_BEASISWA }}</option>
                </select>
              </div>
            </div>

            <br />
            <base-input
              class="input-group-alternative mb-3"
              placeholder="KETERANGAN"
              addon-left-icon="ni ni-trophy"
              v-model="model.KETERANGAN"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TAHUN MULAI"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TAHUN_MULAI"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TAHUN SELAI"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TAHUN_SELESAI"
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
  name: "edit-data-beasiswa",
  data() {
    return {
      model: {
        BEASISWA_ID: "",
        ID_SISWA: "",
        ID_JENIS_BEASISWA: "",
        KETERANGAN: "",
        TAHUN_MULAI: "",
        TAHUN_SELESAI: "",
      },
      result: [],
      siswa: [],
      beasiswa: [],
    };
  },
  created() {
    this.getData();
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/jenis_beasiswa/semua_beasiswa")
      .then((res) => {
        this.beasiswa = res.data.result;
      });
  },

  methods: {
    getData() {
      axios
        .get(
          `http://localhost:8080/api/v1/beasiswa?BEASISWA_ID=${this.$route.params.id}`
        )
        .then((response) => (this.result = response.data.result[0]));
    },
    editData() {
      axios
        .put(
          `http://localhost:8080/api/v1/beasiswa?BEASISWA_ID=${this.$route.params.id}`,
          this.model
        )
        .then(() => {
          alert("edit success");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed Edit Data");
        });
    },
  },
};
</script>
<style></style>
