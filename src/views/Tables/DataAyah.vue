<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">DATA AYAH</h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addAyah">
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
              <th>ID AYAH</th>
              <th>ID SISWA</th>
              <th>ID KH</th>
              <th>ID PEKERJAAN</th>
              <th>ID PENDIDIKAN</th>
              <th>ID PENGHASILAN</th>
              <th>NAMA</th>
              <th>NIK</th>
              <th>TAHUN LAHIR</th>
              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr scope="row" v-for="ayah in result" :key="ayah.ID_AYAH">
              <td>{{ ayah.ID_AYAH }}</td>
              <td>{{ ayah.ID_SISWA }}</td>
              <td>{{ ayah.ID_KH }}</td>
              <td>{{ ayah.ID_PEKERJAAN }}</td>
              <td>{{ ayah.ID_PENDIDIKAN }}</td>
              <td>{{ ayah.ID_PENGHASILAN }}</td>
              <td>{{ ayah.NAMA }}</td>
              <td>{{ ayah.NIK_AYAH }}</td>
              <td>{{ ayah.TAHUN_LAHIR }}</td>
              <td>
                <router-link
                  :to="`/edit_ayah/${ayah.ID_AYAH}`"
                  tag="button"
                  class="btn btn-warning"
                >Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteData(ayah.ID_AYAH)">Delete</button>
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
  name: "data-ayah",
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
  },
  methods: {
    deleteData(ID_AYAH) {
      axios
        .delete(`http://localhost:8080/api/v1/data_ayah?ID_AYAH=${ID_AYAH}`)
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
