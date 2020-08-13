<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA BEASISWA
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addBeasiswa">
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
              <th>BEASISWA ID</th>
              <th>ID SISWA</th>
              <th>JENIS BEASISWA</th>

              <th>KETERANGAN</th>
              <th>TAHUN MULAI</th>
              <th>TAHUN SELESAI</th>

              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr
              scope="row"
              v-for="beasiswa in result"
              :key="beasiswa.BEASISWA_ID"
            >
              <td>{{ beasiswa.BEASISWA_ID }}</td>
              <td>{{ beasiswa.ID_SISWA }}</td>
              <td>{{ beasiswa.ID_JENIS_BEASISWA }}</td>

              <td>{{ beasiswa.KETERANGAN }}</td>
              <td>{{ beasiswa.TAHUN_MULAI }}</td>

              <td>{{ beasiswa.TAHUN_SELESAI }}</td>

              <td>
                <router-link
                  :to="`/edit_beasiswa/${beasiswa.BEASISWA_ID}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(beasiswa.BEASISWA_ID)"
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
  name: "data-beasiswa",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/beasiswa/semua_beasiswa_siswa")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(BEASISWA_ID) {
      axios
        .delete(
          `http://localhost:8080/api/v1/beasiswa?BEASISWA_ID=${BEASISWA_ID}`
        )
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
