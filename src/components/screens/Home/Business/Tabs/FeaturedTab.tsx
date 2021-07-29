import * as React from 'react';
import {Container} from '@src/components/elements';
import styles from './styles';
import {observer} from 'mobx-react';
import BusinessStore from '@src/stores/BusinessStore';
import ListRowItem from '@src/components/elements/List/ListRowItem';

type FeaturedTabProps = {};

const FeaturedTab: React.FC<FeaturedTabProps> = observer(() => {
  return (
    <Container style={styles.tabContent}>
      {BusinessStore.mockBusiness.map((item, i) => (
        <ListRowItem
          key={i}
          title={item.title}
          subTitle={item.subTitle}
          note={item.note}
          onPress={() => BusinessStore.deleteBusiness(i)}
        />
      ))}
    </Container>
  );
});

export default FeaturedTab;
