// import * as React from 'react';
// import {Container} from '@src/components/elements';
// import {FeaturedTab, NewestTab, TrendingTab, RecomendedTab} from './Tabs';
// import {TabView} from '@src/components/elements';
// import styles from './style';
// import {TabViewData} from '@src/components/elements/TabView/TabView';

// type BusinessProps = {};

// const tabData: TabViewData = [
//   {key: '0', title: 'Featured', content: FeaturedTab},
//   {
//     key: '1',
//     title: 'Newest',
//     content: NewestTab,
//   },
//   {
//     key: '3',
//     title: 'Trending',
//     content: TrendingTab,
//   },
//   {
//     key: '4',
//     title: 'Recomended',
//     content: RecomendedTab,
//   },
// ];

// const Business: React.FC<BusinessProps> = () => {
//   return (
//     <Container style={styles.container}>
//       <TabView
//         tabData={tabData}
//         tabBarStyle={styles.tabBarStyle}
//         isTabBarFullWidth
//       />
//     </Container>
//   );
// };

// export default Business;

import * as React from 'react';
import {Container} from '@src/components/elements';
import {FeaturedTab, NewestTab} from './Tabs';
import {TabView} from '@src/components/elements';
import styles from './style';
import {TabViewData} from '@src/components/elements/TabView/TabView';

type BusinessProps = {};

const tabData: TabViewData = [
  {key: '0', title: 'Featured', content: FeaturedTab},
  {
    key: '1',
    title: 'Newest',
    content: NewestTab,
  },
];

const Business: React.FC<BusinessProps> = () => {
  return (
    <Container style={styles.container}>
      <TabView
        tabData={tabData}
        tabBarStyle={styles.tabBarStyle}
        isTabBarFullWidth
      />
    </Container>
  );
};

export default Business;
