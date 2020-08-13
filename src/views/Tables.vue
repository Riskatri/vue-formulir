<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total Students"
            type="gradient-red"
            sub-title=""
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2"> {{ result.length }} </span>
              <span class="text-nowrap">Student last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i>
                <i>
                  {{ result.length }}
                </i></span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2"
                ><i class="fa fa-arrow-down"></i> 5.72%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2"
                ><i class="fa fa-arrow-up"></i> 54.8%</span
              >
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <projects-table title="Light Table"></projects-table>
          <data-kontak title="Light Table"> </data-kontak>
          <data-priodik title="Light Table"> </data-priodik>
          <data-prestasi title="Light Table"> </data-prestasi>
          <data-beasiswa title="Light Table"> </data-beasiswa>
          <data-registrasi> </data-registrasi>
          <data-keluar> </data-keluar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsTable from "./Tables/ProjectsTable";
import DataKontak from "./Tables/DataKontak";
import DataPriodik from "./Tables/DataPriodik";
import DataPrestasi from "./Tables/DataPrestasi";
import DataBeasiswa from "./Tables/DataBeasiswa";
import DataRegistrasi from "./Tables/DataRegistrasi";
import DataKeluar from "./Tables/DataKeluar";

import axios from "axios";

export default {
  name: "tables",
  components: {
    ProjectsTable,
    DataKontak,
    DataPriodik,
    DataPrestasi,
    DataBeasiswa,
    DataRegistrasi,
    DataKeluar,
  },
  data: function() {
    return {
      result: [],
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/siswa/semua_siswa")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style></style>
