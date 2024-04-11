import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import NavBar from '../../../Components/BottomNav/NavBar';

const AddUser = () => {
  const [name, setName] = useState('');
  const [workingType, setWorkingType] = useState('Office');
  const [organization, setOrganization] = useState('');
  const [technology, setTechnology] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (
      name === '' ||
      workingType === '' ||
      organization === '' ||
      technology === '' ||
      mobileNo === '' ||
      email === '' ||
      city === '' ||
      address === ''
    ) {
      Alert.alert('Error', 'Fill all the Feilds ');
    } else {
      console.log('Name:', name);
      console.log('Working Type:', workingType);
      console.log('Organization:', organization);
      console.log('Technology:', technology);
      console.log('Mobile No:', mobileNo);
      console.log('Email:', email);
      console.log('City:', city);
      console.log('Address:', address);
      setName('');
      setWorkingType('');
      setOrganization('');
      setTechnology('');
      setMobileNo('');
      setEmail('');
      setCity('');
      setAddress('');
    }
  };

  return (
    <View style={styles.Wrapper}>
      <NavBar title={'add User'} color={'#fff'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>User Details</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>Working Type</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={workingType}
              onValueChange={(itemValue, itemIndex) =>
                setWorkingType(itemValue)
              }
              style={styles.picker}
              dropdownIconColor="#464646">
              <Picker.Item
                label="Office"
                value="Office"
                style={{fontFamily: 'Poppins-Regular'}}
              />

              <Picker.Item
                label="Work From Home (WFH)"
                value="Work From Home (WFH)"
                style={{fontFamily: 'Poppins-Regular'}}
              />
              <Picker.Item
                label="Hybrid"
                value="Hybrid"
                style={{fontFamily: 'Poppins-Regular'}}
              />
            </Picker>
          </View>
          <Text style={styles.label}>Organization</Text>
          <TextInput
            value={organization}
            onChangeText={setOrganization}
            placeholder="Organization"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>Technology</Text>
          <TextInput
            value={technology}
            onChangeText={setTechnology}
            placeholder="Technology"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>Mobile No.</Text>
          <TextInput
            value={mobileNo}
            onChangeText={setMobileNo}
            placeholder="Mobile No"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="City"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
            color={'#424242'}
            placeholderTextColor={'#616161'}
            style={styles.input}
            multiline={true}
            numberOfLines={3}
            spellCheck={true}
          />
          <View style={styles.BtnBox}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={[styles.Btn, {backgroundColor: '#69ff94'}]}>
              <Text style={styles.BtnTxt}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Btn, {backgroundColor: '#ff6e6e'}]}
              onPress={() => {
                setName('');
                setWorkingType('');
                setOrganization('');
                setTechnology('');
                setMobileNo('');
                setEmail('');
                setCity('');
                setAddress('');
              }}>
              <Text style={styles.BtnTxt}>Reset</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default AddUser;

const styles = StyleSheet.create({
  Wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#645ebc',
    position: 'relative',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#616161',
    alignSelf: 'center',
    width: '70%',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    position: 'absolute',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    padding: 20,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    color: '#424242',
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#DBDBDB',
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    marginVertical: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  pickerBox: {
    borderRadius: 10,
    width: '100%',
    overflow: 'hidden',
    marginVertical: 10,
  },
  picker: {
    color: '#616161',
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#DBDBDB',
  },
  BtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  Btn: {
    borderRadius: 10,
    padding: 10,
    width: '40%',
  },
  BtnTxt: {color: '#424242', fontFamily: 'Poppins-Medium', alignSelf: 'center'},
});
