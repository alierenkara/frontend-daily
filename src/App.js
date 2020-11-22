import React from 'react'
import { Search, SearchFilter, OptionFilter } from './components/day_1'
import {
  Header,
  ProfileCard,
  CreatePost,
  RecommendationCard,
  Post,
} from './components/day_2'
import { Search2, Topics, List } from './components/day_3'
import Layout from './components/layout'

const menuArray = [
  {
    name: 'Day 1',
    items: [
      {
        name: 'Search',
        component: <Search />,
      },
      {
        name: 'Search Filter',
        component: <SearchFilter />,
      },
      {
        name: 'Option Filter',
        component: <OptionFilter />,
      },
    ],
  },
  {
    name: 'Day 2',
    items: [
      {
        name: 'Header',
        component: <Header />,
      },
      {
        name: 'Profile Card',
        component: <ProfileCard />,
      },
      {
        name: 'Create Post',
        component: <CreatePost />,
      },
      {
        name: 'Recommendation Card',
        component: <RecommendationCard />,
      },
      {
        name: 'Post',
        component: <Post />,
      },
    ],
  },
  {
    name: 'Day 3',
    items: [
      {
        name: 'Search',
        component: <Search2 />,
      },
      {
        name: 'Topics',
        component: <Topics />,
      },
      {
        name: 'List',
        component: <List />,
      },
    ],
  },
]

function App() {
  return <Layout menuArray={menuArray} />
}

export default App
