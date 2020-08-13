<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Edit Data Ayah</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="editData()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID AYAH"
              addon-left-icon="ni ni-circle-08"
              v-model="model.ID_AYAH"
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
                <label>KEBUTUHAN KHUSUS</label>
                <select v-model="model.ID_KH">
                  <option selected disabled>pilih kebutuhan</option>
                  <option
                    v-for="kh in kebutuhan"
                    :key="kh.ID_KH"
                    :value="kh.ID_KH"
                  >{{ kh.JENIS_KH }}</option>
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

            <div class="row">
              <div class="col-lg-6">
                <label>PENGHASILAN</label>
                <select v-model="model.ID_PENGHASILAN">
                  <option selected disabled>pilih penghasilan</option>
                  <option
                    v-for="gaji in penghasilan"
                    :key="gaji.ID_PENGHASILAN"
                    :value="gaji.ID_PENGHASILAN"
                  >{{ gaji.PENGHASILAN }}</option>
                </select>
              </div>
            </div>
            <br />
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA"
              addon-left-icon="ni ni-single-02"
              v-model="model.NAMA"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NIK"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NIK_AYAH"
            ></base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TAHUN LAHIR"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TAHUN_LAHIR"
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
  name: "edit-data-ayah",
  data() {
    return {
      model: {
        ID_AYAH: "",
        ID_SISWA: "",
        ID_KH: "",
        ID_PEKERJAAN: "",
        ID_PENDIDIKAN: "",
        ID_PENGHASILAN: "",
        NAMA: "",
        NIK_AYAH: "",
        TAHUN_LAHIR: "",
      },
      result: [],
      siswa: [],
      pekerjaan: [],
      pendidikan: [],
      penghasilan: [],
      kebutuhan: [],
    };
  },
  created() {
    this.getData();
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
    axios
      .get("http://localhost:8080/api/v1/penghasilan/semua_penghasilan")
      .then((res) => {
        this.penghasilan = res.data.result;
      });
    axios.get("http://localhost:8080/api/v1/kh/semua_kh").then((res) => {
      this.kebutuhan = res.data.result;
    });
  },

  methods: {
    getData() {
      axios
        .get(
          `http://localhost:8080/api/v1/data_ayah?ID_AYAH=${this.$route.params.id}`
        )
        .then((response) => (this.result = response.data.result[0]));
    },
    editData() {
      axios
        .put(
          `http://localhost:8080/api/v1/data_ayah?ID_AYAH=${this.$route.params.id}`,
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
