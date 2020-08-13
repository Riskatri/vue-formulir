<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total  "
            type="gradient-red"
            sub-title="Father"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">{{ result.length }}</span>
              <span class="text-nowrap">Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-orange"
            sub-title="Mother"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i>{{ ibu.length }}</i>
              </span>
              <span class="text-nowrap">Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-green"
            sub-title="Wali"
            icon="ni ni-circle-08"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">{{wali.length}}</span>
              <span class="text-nowrap">Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-info"
            sub-title="Student"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">{{siswa.length}}</span>
              <span class="text-nowrap">Since Today</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <data-ayah title="Light Table"></data-ayah>
          <br />
          <data-ibu title="Light Table"></data-ibu>
          <br />
          <data-wali title="Light Table"></data-wali>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataAyah from "./Tables/DataAyah";
import DataIbu from "./Tables/DataIbu";
import DataWali from "./Tables/DataWali";
import axios from "axios";
export default {
  name: "data-ortu",
  components: {
    DataAyah,
    DataIbu,
    DataWali,
  },
  data: function () {
    return {
      result: [],
      ibu: [],
      wali: [],
      siswa: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8080/api/v1/data_ayah/semua_data_ayah")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/data_ibu/semua_data_ibu")
      .then((response) => {
        this.ibu = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/data_wali/semua_data_wali")
      .then((response) => {
        this.wali = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/siswa/semua_siswa")
      .then((response) => {
        this.siswa = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style></style>
