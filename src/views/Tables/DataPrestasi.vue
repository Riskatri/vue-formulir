<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA PRESTASI SISWA
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addPrestasi">
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
              <th>ID PRESTASI SISWA</th>
              <th>PRESTASI ID</th>

              <th>ID SISWA</th>
              <th>ID TINGKAT PRESTASI</th>

              <th>NAMA PRESTASI</th>
              <th>TAHUN</th>
              <th>PENYELENGGARA</th>

              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr
              scope="row"
              v-for="prestasi in result"
              :key="prestasi.ID_PRESTASI_SISWA"
            >
              <td>{{ prestasi.ID_PRESTASI_SISWA }}</td>
              <td>{{ prestasi.PRESTASI_ID }}</td>

              <td>{{ prestasi.ID_SISWA }}</td>
              <td>{{ prestasi.ID_TINGKAT }}</td>

              <td>{{ prestasi.NAMA_PRESTASI }}</td>
              <td>{{ prestasi.TAHUN }}</td>
              <td>{{ prestasi.PENYELENGGARA }}</td>

              <td>
                <router-link
                  :to="`/edit_prestasi/${prestasi.ID_PRESTASI_SISWA}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(prestasi.ID_PRESTASI_SISWA)"
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
  name: "data-prestasi",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/prestasi_siswa/semua_prestasi_siswa")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(ID_PRESTASI_SISWA) {
      axios
        .delete(
          `http://localhost:8080/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=${ID_PRESTASI_SISWA}`
        )
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
