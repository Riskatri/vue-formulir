<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">REGISTRASI SISWA</h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addRegistrasi">
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
              <th>ID REGISTRASI</th>
              <th>ID SISWA</th>
              <th>ID PENDAFTARAN</th>
              <th>TANGGAL MASUK</th>
              <th>NIS</th>
              <th>NOMOR PESERTA UJIAN</th>
              <th>NO SERI IJAZAH</th>
              <th>NO SERI SKHUS</th>

              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr scope="row" v-for="registrasi in result" :key="registrasi.REGISTRASI_ID">
              <td>{{ registrasi.REGISTRASI_ID }}</td>
              <td>{{ registrasi.ID_SISWA }}</td>
              <td>{{ registrasi.ID_PENDAFTARAN }}</td>
              <td>{{ registrasi.TANGGAL_MASUK | formatDate }}</td>
              <td>{{ registrasi.NIS }}</td>
              <td>{{ registrasi.NOMOR_PESERTA_UJIAN }}</td>
              <td>{{ registrasi.NO_SERI_IJAZAH }}</td>
              <td>{{ registrasi.NO_SERI_SKHUS }}</td>

              <td>
                <router-link
                  :to="`/edit_regis/${registrasi.REGISTRASI_ID}`"
                  tag="button"
                  class="btn btn-warning"
                >Edit</router-link>
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(registrasi.REGISTRASI_ID)"
                >Delete</button>
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
import moment from "moment";
import Vue from "vue";

export default {
  data: function () {
    return {
      result: [],
    };
  },
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
  },
  name: "data-registrasi",
  mounted: function () {
    axios
      .get("http://localhost:8080/api/v1/registrasi/semua_registrasi")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(REGISTRASI_ID) {
      axios
        .delete(
          `http://localhost:8080/api/v1/registrasi?REGISTRASI_ID=${REGISTRASI_ID}`
        )
        .then(() => {
          alert("delete success");
        });
    },
  },
};
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});
</script>
