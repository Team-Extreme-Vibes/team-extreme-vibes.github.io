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
    avatar: 'https://pbs.twimg.com/profile_images/1955991793482498048/xt_QZmua_400x400.jpg',
    name: 'binn_rc',
    title: 'Binn Zhang',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/binn_rc' },
      { icon: 'x', link: 'https://x.com/Binnnnn0708' },
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
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>