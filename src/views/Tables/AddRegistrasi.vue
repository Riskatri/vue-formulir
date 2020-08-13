<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Add Data Registrasi</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="add()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="REGISTRASI ID"
              addon-left-icon="ni ni-circle-08"
              v-model="model.REGISTRASI_ID"
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
                <label>PENDAFTARAN</label>
                <select v-model="model.ID_PENDAFTARAN">
                  <option selected disabled>pilih pendaftaran</option>
                  <option
                    v-for="daftar in pendaftaran"
                    :key="daftar.ID_PENDAFTARAN"
                    :value="daftar.ID_PENDAFTARAN"
                  >{{ daftar.JENIS }}</option>
                </select>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6">
                TANGGAL MASUK
                <input
                  class="input-group-mb-3"
                  v-model="model.TANGGAL_MASUK"
                  type="date"
                />
              </div>
            </div>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NIS"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NIS"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR PESERTA UJIAN"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NOMOR_PESERTA_UJIAN"
            ></base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR SERI IJAZAH"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NO_SERI_IJAZAH"
            ></base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR SERI SKHUS"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NO_SERI_SKHUS"
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
  name: "add-data-registrasi",
  data() {
    return {
      model: {
        REGISTRASI_ID: "",
        ID_SISWA: "",
        ID_PENDAFTARAN: "",
        TANGGAL_MASUK: "",
        NIS: "",
        NOMOR_PESERTA_UJIAN: "",
        NO_SERI_IJAZAH: "",
        NO_SERI_SKHUS: "",
      },
      siswa: [],
      pendaftaran: [],
    };
  },
  created() {
    axios.get("http://localhost:8080/api/v1/siswa/semua_siswa").then((res) => {
      this.siswa = res.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/pendaftaran/semua_pendaftaran")
      .then((res) => {
        this.pendaftaran = res.data.result;
      });
  },
  methods: {
    add() {
      axios
        .post("http://localhost:8080/api/v1/registrasi", this.model)
        .then(() => alert("success add data"));
    },
  },
};
</script>
<style></style>
