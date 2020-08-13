<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA PRIODIK
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addPriodik">
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
              <th>ID DATA PRIODIK</th>
              <th>ID SISWA</th>

              <th>TINGGI BADAN</th>
              <th>BERAT BADAN</th>

              <th>JARAK KE SEKOLAH</th>
              <th>WAKTU TEMPUH</th>
              <th>JUMLAH SAUDARA</th>

              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr
              scope="row"
              v-for="priodik in result"
              :key="priodik.ID_DATA_PRIODIK"
            >
              <td>{{ priodik.ID_DATA_PRIODIK }}</td>
              <td>{{ priodik.ID_SISWA }}</td>

              <td>{{ priodik.TINGGI_BADAN }}</td>
              <td>{{ priodik.BERAT_BADAN }}</td>

              <td>{{ priodik.JARAK_KE_SEKOLAH }}</td>
              <td>{{ priodik.WAKTU_TEMPUH_KE_SEKOLAH }}</td>
              <td>{{ priodik.JUMLAH_SAUDARA_KANDUNG }}</td>

              <td>
                <router-link
                  :to="`/edit_priodik/${priodik.ID_DATA_PRIODIK}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(priodik.ID_DATA_PRIODIK)"
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
  name: "data-priodik",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/data_priodik/semua_data_priodik")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(ID_DATA_PRIODIK) {
      axios
        .delete(
          `http://localhost:8080/api/v1/data_priodik?ID_DATA_PRIODIK=${ID_DATA_PRIODIK}`
        )
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
