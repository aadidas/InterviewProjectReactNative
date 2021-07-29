import * as React from 'react';
import {Container} from '@src/components/elements';
import styles from './styles';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import BusinessStore from '@src/stores/BusinessStore';
import {observer} from 'mobx-react';

type NewestTabProps = {};

const NewestTab: React.FC<NewestTabProps> = observer(() => {
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

export default NewestTab;
