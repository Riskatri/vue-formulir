<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA SISWA
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addSiswa">
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
              <th>ID SISWA</th>
              <th>NAMA LENGKAP</th>
              <th>JENIS KELAMIN</th>
              <th>TEMPAT LAHIR</th>
              <th>TANGGAL LAHIR</th>
              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr scope="row" v-for="siswa in result" :key="siswa.ID_SISWA">
              <td>{{ siswa.ID_SISWA }}</td>
              <td>{{ siswa.NAMA_LENGKAP }}</td>
              <td>{{ siswa.JENIS_KELAMIN }}</td>
              <td>{{ siswa.TEMPAT_LAHIR }}</td>
              <td>{{ siswa.TANGGAL_LAHIR }}</td>
              <td>
                <router-link
                  :to="`/edit/${siswa.ID_SISWA}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(siswa.ID_SISWA)"
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
  name: "projects-table",
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
  methods: {
    deleteData(ID_SISWA) {
      axios
        .delete(`http://localhost:8080/api/v1/siswa?ID_SISWA=${ID_SISWA}`)
        .then(() => {
          alert("delete success");
        });
    },
  },
  // methods: {
  //   editMahasiswa(id) {
  //     this.$router.push({
  //       path: `/edit/${id}`,
  //     });
  //   },
  // },
};
</script>
