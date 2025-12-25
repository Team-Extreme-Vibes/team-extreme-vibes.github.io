---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://scontent-sin2-3.cdninstagram.com/v/t51.2885-19/531853657_18380619577124011_5595590149605776426_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-sin2-3.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2QHJ41xFeJXBaheGh56zaK8G7jntRo7FH5HAPB_kBfaQ37qjJvpuRjOJDDTd4VbFOLA&_nc_ohc=APkWVlYEX8AQ7kNvwHrLifG&_nc_gid=PB6Ye1l8y3lZ5SjDrhtreA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afk1RdCxc8UjzulRD8Qy4aZYSxCV06k26zdjj0H0aekPZw&oe=69528D45&_nc_sid=7a9f4b',
    name: 'binn_rc',
    title: 'Binn Zhang',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/binn_rc/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Hello
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>