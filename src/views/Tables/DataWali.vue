<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA WALI
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addWali">
            <span class="btn btn-primary" tag="button">
              <span class="ni ni-key-25">Add</span>
            </span>
          </router-link>
          <router-view />
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <template>
        <mdb-tbl striped color="primary-color">
          <mdb-tbl-head color="black" striped>
            <tr scope="columns">
              <th>ID WALI</th>
              <th>ID SISWA</th>

              <th>ID PEKERJAAN</th>
              <th>ID PENDIDIKAN</th>

              <th>NAMA</th>
              <th>NIK</th>
              <th>TAHUN LAHIR</th>
              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr scope="row" v-for="wali in result" :key="wali.ID_WALI">
              <td>{{ wali.ID_WALI }}</td>
              <td>{{ wali.ID_SISWA }}</td>

              <td>{{ wali.ID_PEKERJAAN }}</td>
              <td>{{ wali.ID_PENDIDIKAN }}</td>

              <td>{{ wali.NAMA_WALI }}</td>
              <td>{{ wali.NIK_WALI }}</td>
              <td>{{ wali.TAHUN_LAHIR }}</td>
              <td>
                <router-link
                  :to="`/edit_wali/${wali.ID_WALI}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(wali.ID_WALI)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue";

export default {
  data: function() {
    return {
      result: [],
    };
  },
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
  },
  name: "data-ayah",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/data_wali/semua_data_wali")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(ID_WALI) {
      axios
        .delete(`http://localhost:8080/api/v1/data_wali?ID_WALI=${ID_WALI}`)
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
