<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">DATA IBU</h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addIbu">
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
              <th>ID IBU</th>
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
            <tr scope="row" v-for="ibu in result" :key="ibu.ID_IBU">
              <td>{{ ibu.ID_IBU }}</td>
              <td>{{ ibu.ID_SISWA }}</td>
              <td>{{ ibu.ID_KH }}</td>
              <td>{{ ibu.ID_PEKERJAAN }}</td>
              <td>{{ ibu.ID_PENDIDIKAN }}</td>
              <td>{{ ibu.ID_PENGHASILAN }}</td>
              <td>{{ ibu.NAMA }}</td>
              <td>{{ ibu.NIK_IBU }}</td>
              <td>{{ ibu.TAHUN_LAHIR }}</td>
              <td>
                <router-link
                  :to="`/edit_ibu/${ibu.ID_IBU}`"
                  tag="button"
                  class="btn btn-warning"
                >Edit</router-link>
                <button class="btn btn-danger" v-on:click="deleteData(ibu.ID_IBU)">Delete</button>
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
  name: "data-ibu",
  created() {
    axios
      .get("http://localhost:8080/api/v1/data_ibu/semua_data_ibu")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(ID_IBU) {
      axios
        .delete(`http://localhost:8080/api/v1/data_ibu?ID_IBU=${ID_IBU}`)
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
