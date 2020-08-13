<template>
  <div class="card shadow">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">
            DATA KONTAK SISWA
          </h3>
        </div>
        <div class="col text-right">
          <!-- <base-button type="primary" size="sm">See all</base-button> -->
          <router-link class="nav-link nav-link-icon" to="/addContact">
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
              <th>ID KONTAK</th>
              <th>ID SISWA</th>

              <th>NOMOR TELPHON</th>
              <th>NOMOR HP</th>

              <th>EMAIL</th>

              <th>ACTION</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr scope="row" v-for="contact in result" :key="contact.ID_KONTAK">
              <td>{{ contact.ID_KONTAK }}</td>
              <td>{{ contact.ID_SISWA }}</td>

              <td>{{ contact.NO_TELP }}</td>
              <td>{{ contact.NO_HP }}</td>

              <td>{{ contact.EMAIL }}</td>

              <td>
                <router-link
                  :to="`/edit_contact/${contact.ID_KONTAK}`"
                  tag="button"
                  class="btn btn-warning"
                  >Edit</router-link
                >
                <button
                  class="btn btn-danger"
                  v-on:click="deleteData(contact.ID_KONTAK)"
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
  name: "data-kontak",
  mounted: function() {
    axios
      .get("http://localhost:8080/api/v1/contact/all_contact")
      .then((response) => {
        this.result = response.data.result;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteData(ID_KONTAK) {
      axios
        .delete(`http://localhost:8080/api/v1/contact?ID_KONTAK=${ID_KONTAK}`)
        .then(() => {
          alert("delete success");
        });
    },
  },
};
</script>
