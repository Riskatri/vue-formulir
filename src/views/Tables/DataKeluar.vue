<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            PENDAFTARAN SISWA KELUAR
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addPendaftaran">
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
              <th>ID DATA SISWA KELUAR</th>
              <th>ID SISWA</th>
              <th>ID ALASAN KELUAR</th>
              <th>TANGGAL KELUAR</th>
              <th>ALASAN</th>
              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr
              scope="row"
              v-for="keluar in result"
              :key="keluar.DAFTAR_KELUAR_ID"
            >
              <td>{{ keluar.DAFTAR_KELUAR_ID }}</td>
              <td>{{ keluar.ID_SISWA }}</td>

              <td>{{ keluar.ID_ALASAN }}</td>
              <td>{{ keluar.TANGGAL_KELUAR }}</td>

              <td>{{ keluar.ALASAN }}</td>

              <td>
                <router-link
                  :to="`/edit_keluar/${keluar.DAFTAR_KELUAR_ID}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(keluar.DAFTAR_KELUAR_ID)"
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
  name: "data-keluar",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/daftar_keluar/semua_daftar_siswa")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(DAFTAR_KELUAR_ID) {
      axios
        .delete(
          `http://localhost:8080/api/v1/daftar_keluar?DAFTAR_KELUAR_ID=${DAFTAR_KELUAR_ID}`
        )
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
