<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Edit Data Priodik</small>
          </div>
        </div>
        <div class="card-body px-lg-6 py-lg-5">
          <form role="form" @submit.prevent="editData()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID DATA PRIODIK"
              addon-left-icon="ni ni-circle-08"
              v-model="model.ID_DATA_PRIODIK"
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

            <br />
            <base-input
              class="input-group-alternative mb-3"
              placeholder="TINGGI BADAN (cm)"
              addon-left-icon="ni ni-ruler-pencil"
              v-model="model.TINGGI_BADAN"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="BERAT BADAN (kg)"
              addon-left-icon="ni ni-ruler-pencil"
              v-model="model.BERAT_BADAN"
            ></base-input>
            <div class="row">
              <div class="col-lg-6">
                <label>JARAK TEMPUH KE SEKOLAH</label>
                <!-- <p>JENIS KELAMIN</p> -->
                <input type="radio" value="kurang dari 1 km" />
                Kurang dari 1 km
                <input type="radio" value="lebih dari 1 km" />
                lebih dari 1 km
              </div>
            </div>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="SEBUTKAN dalam (km)"
              addon-left-icon="ni ni-bus-front-12"
              v-model="model.JARAK_KE_SEKOLAH"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="WAKTU TEMPUH KE SEKOLAH (km)"
              addon-left-icon="ni ni-watch-time"
              v-model="model.WAKTU_TEMPUH_KE_SEKOLAH"
            ></base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="JUMLAH SAUDARA KANDUNG"
              addon-left-icon="ni ni-circle-08"
              v-model="model.JUMLAH_SAUDARA_KANDUNG"
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
  name: "edit-data-priodik",
  data() {
    return {
      model: {
        ID_DATA_PRIODIK: "",
        ID_SISWA: "",
        TINGGI_BADAN: "",
        BERAT_BADAN: "",
        JARAK_KE_SEKOLAH: "",
        WAKTU_TEMPUH_KE_SEKOLAH: "",
        JUMLAH_SAUDARA_KANDUNG: "",
      },
      result: [],
      siswa: [],
    };
  },
  created() {
    this.getData();
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
  },

  methods: {
    getData() {
      axios
        .get(
          `http://localhost:8080/api/v1/data_priodik?ID_DATA_PRIODIK=${this.$route.params.id}`
        )
        .then((response) => (this.result = response.data.result[0]));
    },
    editData() {
      axios
        .put(
          `http://localhost:8080/api/v1/data_priodik?ID_DATA_PRIODIK=${this.$route.params.id}`,
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
