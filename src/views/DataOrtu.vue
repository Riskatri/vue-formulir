<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total Father "
            type="gradient-red"
            sub-title=""
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2"> {{ result.length }} </span>
              <span class="text-nowrap">Father's student today</span>
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
          <data-ayah title="Light Table"></data-ayah>
          <br />
          <data-ibu title="Light Table"> </data-ibu>
          <br />
          <data-wali title="Light Table"> </data-wali>
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
  name: "icons",
  components: {
    DataAyah,
    DataIbu,
    DataWali,
  },
  data: function() {
    return {
      result: [],
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/data_ayah/semua_data_ayah")
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
