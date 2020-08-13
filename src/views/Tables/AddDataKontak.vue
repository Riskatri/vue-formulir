<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Add Data Kontak</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="add()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID KONTAK"
              addon-left-icon="ni ni-circle-08"
              v-model="model.ID_KONTAK"
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

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR TELPHONE"
              addon-left-icon="ni ni-single-02"
              v-model="model.NO_TELP"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR HANDPHONE"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NO_HP"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="EMAIL"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.EMAIL"
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
  name: "add-data-kontak",
  data() {
    return {
      model: {
        ID_KONTAK: "",
        ID_SISWA: "",

        NO_TELP: "",
        NO_HP: "",
        EMAIL: "",
      },
      siswa: [],
    };
  },
  created() {
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
  },
  methods: {
    add() {
      axios
        .post("http://localhost:8080/api/v1/contact", this.model)
        .then(() => {
          alert("success add data");
          this.$router.go();
        })
        .catch((err) => {
          console.log(err);
          alert("Failed Add Data");
        });
    },
  },
};
</script>
<style></style>
