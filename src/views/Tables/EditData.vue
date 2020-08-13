<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-dark pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Edit Data Siswa</small>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <form role="form" @submit.prevent="editData()">
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ID SISWA"
              addon-left-icon="ni ni-circle-08"
              v-model="model.ID_SISWA"
            >
            </base-input>

            <div class="row">
              <div class="col-lg-6">
                <label> AGAMA </label>
                <select v-model="model.ID_AGAMA">
                  <option selected disabled> pilih agama </option>
                  <option
                    v-for="religi in agama"
                    :key="religi.ID_AGAMA"
                    :value="religi.ID_AGAMA"
                  >
                    {{ religi.JENIS_AGAMA }}
                  </option></select
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <label> LAYAK PIP </label>
                <select v-model="model.ID_PIP">
                  <option selected disabled> pilih alasan </option>
                  <option
                    v-for="alasan in pip"
                    :key="alasan.ID_PIP"
                    :value="alasan.ID_PIP"
                  >
                    {{ alasan.ALASAN }}
                  </option></select
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <label> TRANSPORTASI </label>
                <select v-model="model.ID_TRANSPORTASI">
                  <option selected disabled> pilih transportasi </option>
                  <option
                    v-for="transportasi in transport"
                    :key="transportasi.ID_TRANSPORTASI"
                    :value="transportasi.ID_TRANSPORTASI"
                  >
                    {{ transportasi.JENIS }}
                  </option></select
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <label> TEMPAT TINGGAL </label>
                <select v-model="model.ID_TINGGAL">
                  <option selected disabled> pilih tempat tinggal </option>
                  <option
                    v-for="tempat in tinggal"
                    :key="tempat.ID_TINGGAL"
                    :value="tempat.ID_TINGGAL"
                  >
                    {{ tempat.TEMPAT_TINGGAL }}
                  </option></select
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <label> BERKEBUTUHAN KHUSUS </label>
                <select v-model="model.ID_KH">
                  <option selected disabled> pilih Kebutuhan khusus </option>
                  <option
                    v-for="kh in kebutuhan"
                    :key="kh.ID_KH"
                    :value="kh.ID_KH"
                  >
                    {{ kh.JENIS_KH }}
                  </option></select
                >
              </div>
            </div>
            <br />
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA LENGKAP"
              addon-left-icon="ni ni-circle-08"
              v-model="model.NAMA_LENGKAP"
            >
            </base-input>

            <label> JENIS KELAMIN </label>
            <!-- <p>JENIS KELAMIN</p> -->
            <input
              type="radio"
              v-model="model.JENIS_KELAMIN"
              value="laki-laki"
            />
            laki-laki

            <input
              type="radio"
              v-model="model.JENIS_KELAMIN"
              value="perempuan"
            />
            perempuan
            <base-input
              class="input-group-alternative mb-3"
              placeholder="TEMPAT LAHIR"
              addon-left-icon="ni ni-square-pin"
              v-model="model.TEMPAT_LAHIR"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="TANGGAL LAHIR"
              addon-left-icon="ni ni-calendar-grid-58"
              v-model="model.TANGGAL_LAHIR"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA NEGARA"
              addon-left-icon="ni ni ni-folder-17"
              v-model="model.NAMA_NEGARA"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="ALAMAT JALAN"
              addon-left-icon="ni ni-square-pin"
              v-model="model.ALAMAT_JALAN"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="RT"
              addon-left-icon="ni ni-square-pin"
              v-model="model.RT"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="RW"
              addon-left-icon="ni ni-square-pin"
              v-model="model.RW"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA DUSUN"
              addon-left-icon="ni ni-square-pin"
              v-model="model.NAMA_DUSUN"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA KELURAHAN/DESA"
              addon-left-icon="ni ni-square-pin"
              v-model="model.NAMA_KELURAHAN_DESA"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="KECAMATAN"
              addon-left-icon="ni ni-square-pin"
              v-model="model.KECAMATAN"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="KODE POS"
              addon-left-icon="ni ni-square-pin"
              v-model="model.KODE_POS"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR KPS"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NO_KPS"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR KIP"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NOMOR_KIP_"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NAMA TERTERA DI KIP"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NAMA_TERTERA_KIP"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR KKS"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NOMOR_KKS"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="bANK"
              addon-left-icon="ni ni-folder-17"
              v-model="model.BANK"
            >
            </base-input>

            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR AKTA LAHIR"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NOMOR_AKTA_LAHIR"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="NOMOR REKENING"
              addon-left-icon="ni ni-folder-17"
              v-model="model.NO_REKENING_BANK"
            >
            </base-input>
            <base-input
              class="input-group-alternative mb-3"
              placeholder="ATAS NAMA"
              addon-left-icon="ni ni-folder-17"
              v-model="model.ATAS_NAMA"
            >
            </base-input>

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
  name: "edit-data",
  data() {
    return {
      model: {
        ID_SISWA: "",
        ID_AGAMA: "",
        ID_PIP: "",
        ID_TRANSPORTASI: "",
        ID_TINGGAL: "",
        ID_KH: "",
        NAMA_LENGKAP: "",
        JENIS_KELAMIN: "",
        TEMPAT_LAHIR: "",
        TANGGAL_LAHIR: "",
        NAMA_NEGARA: "",
        ALAMAT_JALAN: "",
        RT: "",
        RW: "",
        NAMA_DUSUN: "",
        NAMA_KELURAHAN_DESA: "",
        KECAMATAN: "",
        KODE_POS: "",
        NO_KPS: "",
        NOMOR_KIP_: "",
        NAMA_TERTERA_KIP: "",
        NOMOR_KKS: "",
        BANK: "",
        NOMOR_AKTA_LAHIR: "",
        NO_REKENING_BANK: "",
        ATAS_NAMA: "",
      },
      //   ID_SISWA= this.$route.params.ID_SISWA,
      result: [],
      agama: [],
      pip: [],
      transport: [],
      tinggal: [],
      kebutuhan: [],
    };
  },

  created() {
    this.getData();
    axios
      .get("http://localhost:8080/api/v1/agama/semua_agama")
      .then((response) => {
        this.agama = response.data.result;
      });
    axios.get("http://localhost:8080/api/v1/pip/semua_pip").then((response) => {
      this.pip = response.data.result;
    });
    axios
      .get("http://localhost:8080/api/v1/transport/semua_transport")
      .then((res) => {
        this.transport = res.data.result;
      });
    axios
      .get("http://localhost:8080/api/v1/tempat_tinggal/semua_tempat")
      .then((res) => {
        this.tinggal = res.data.result;
      });
    axios.get("http://localhost:8080/api/v1/kh/semua_kh").then((res) => {
      this.kebutuhan = res.data.result;
    });
  },

  methods: {
    getData(ID_SISWA) {
      axios
        .get(`http://localhost:8080/api/v1/siswa?ID_SISWA=${ID_SISWA}`)
        .then((response) => (this.result = response.data.result[0]));
    },
    editData(ID_SISWA) {
      axios
        .put(
          `http://localhost:8080/api/v1/siswa?ID_SISWA=${ID_SISWA}`,
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
