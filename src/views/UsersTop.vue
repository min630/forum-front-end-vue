<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersTopCard
        v-for="user in users"
        :key="user.id"
        :initialUserTop="user"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import UsersTopCard from "../components/userTopCard";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$kHBy5vpGjBIHKkc0EHSgiu6GDzSK8FSGY03HBA8u5AEQEmFCr6m8a",
      isAdmin: true,
      image: "https://i.pravatar.cc/140?img=10",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$rkzaj69m3JdCNIFVzfOIGuRPWh6VAbgQAWy/Rf7hlkfrUUAT1p9My",
      isAdmin: false,
      image: "https://i.pravatar.cc/140?img=12",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$fHShiPktEMv0/dXQ3i0f6OHwp8VkMjW49JpjHWKCtGtTdzLM7TTO6",
      isAdmin: false,
      image: "https://i.pravatar.cc/140?img=14",
      createdAt: "2022-01-25T08:32:54.000Z",
      updatedAt: "2022-01-25T08:32:54.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>