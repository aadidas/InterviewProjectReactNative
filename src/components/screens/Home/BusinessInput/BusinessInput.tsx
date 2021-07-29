import * as React from 'react';
import {
  Button,
  Card,
  Container,
  Text,
  TextField,
} from '@src/components/elements';
import styles from './styles';
import {useState} from 'react';
import BusinessStore from '@src/stores/BusinessStore';

type BusinessInputProps = {};

const BusinessInput: React.FC<BusinessInputProps> = () => {
  const [businessName, setBusinessName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const onSumbit = () => {
    const data = {
      title: businessName,
      subTitle: type,
      note: description,
    };
    BusinessStore.addBusiness(data);
  };

  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <Text isHeadingTitle isCenter>
          ADD BUSINESS
        </Text>
        <TextField
          style={styles.input}
          hasMargin
          placeholder="Business name"
          onChangeText={(val) => setBusinessName(val)}
        />
        <TextField
          style={styles.input}
          hasMargin
          placeholder="Type"
          onChangeText={(val) => setType(val)}
        />
        <TextField
          style={styles.input}
          multiline
          hasMargin
          placeholder="Description"
          onChangeText={(val) => setDescription(val)}
        />
        <Button onPress={onSumbit}>
          <Text isSecondary>SUBMIT</Text>
        </Button>
      </Card>
    </Container>
  );
};

export default BusinessInput;
