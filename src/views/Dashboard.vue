<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-red"
            sub-title="Students"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">{{ result.length }}</span>
              <span class="text-nowrap">Student Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="PRIODIK"
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i>
                <i>{{ priodik.length }}</i>
              </span>
              <span class="text-nowrap">Students Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-green"
            sub-title="Registration"
            icon="ni ni-folder-17"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">{{registrasi.length}}</span>
              <span class="text-nowrap">Students Since Today</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Total"
            type="gradient-info"
            sub-title="Reward"
            icon="ni ni-trophy"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i>
                {{prestasi.length}}
              </span>
              <span class="text-nowrap">Student Since Today</span>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>
    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <calendar-view />
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total students --> {{result.length}}</h5>
              </div>
            </div>

            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData"></bar-chart>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row mt-5">
        <div class="col-xl-8 mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </div>
        <div class="col-xl-4">
          <social-traffic-table></social-traffic-table>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import PageVisitsTable from "../views/Dashboard/PageVisitsTable";
// Tables
import SocialTrafficTable from "./Dashboard/SocialTrafficTable";
import CalendarView from "../components/CalendarView";
import axios from "axios";

export default {
  components: {
    PageVisitsTable,
    SocialTrafficTable,
    CalendarView,
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
      },
      result: [],
      priodik: [],
      registrasi: [],
      prestasi: [],
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
  created() {
    axios
      .get("http://localhost:8080/api/v1/siswa/semua_siswa")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/data_priodik/semua_data_priodik")
      .then((response) => {
        this.priodik = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/registrasi/semua_registrasi")
      .then((response) => {
        this.registrasi = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8080/api/v1/prestasi_siswa/semua_prestasi_siswa")
      .then((response) => {
        this.prestasi = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style></style>
