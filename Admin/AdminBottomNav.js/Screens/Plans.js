import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Linking,
} from 'react-native';
import React from 'react';
import NavBar from './NavBar';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  {
    id: '1',
    title: 'Basic',
    price: '₹49 /- mo',
    features: [
      'maximum 1 team',
      'upto 4 member in a team',
      'upto 2 project created',
      'Feature 4',
      'Feature 5',
    ],
  },
  {
    id: '2',
    title: 'Business',
    price: '₹149 /- mo',
    features: [
      'maximum 5 team',
      'upto 10 member in a team',
      'upto 5 project created',
      'Feature 4',
      'Feature 5',
    ],
  },
  {
    id: '3',
    title: 'Pro',
    price: '₹449 /- mo',
    features: [
      'maximum 10 team',
      'upto 20 member in a team',
      'unlimited project created',
      'Feature 4',
      'Feature 5',
    ],
  },
];

const PlanListItem = ({item}) => (
  <TouchableOpacity style={styles.planBox} activeOpacity={0.8}>
    <View style={styles.top}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.Price}>{item.price}</Text>
    </View>
    {item.features.map((feature, index) => (
      <View style={styles.features} key={index}>
        <Icon name="checkmark-circle-outline" size={20} color="#000" />
        <Text style={styles.featuresTxt}>{feature}</Text>
      </View>
    ))}
  </TouchableOpacity>
);
const Plans = () => {
  return (
    <View style={styles.Wrapper}>
      <NavBar title={'plans'} color={'#fff'} />

      <Text style={styles.text}>
        Upgrade now because better tools mean better results.
      </Text>
      <View style={styles.plans}>
        <FlatList
          data={data}
          renderItem={({item}) => <PlanListItem item={item} />}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://creat8.in');
          }}>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              textTransform: 'capitalize',
            }}>
            *For more details Contact to the developer*
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Plans;

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
    color: '#fff',
    alignSelf: 'center',
    width: '70%',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  plans: {
    width: '100%',
    height: '75%',
    backgroundColor: '#fff',
    position: 'absolute',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    paddingTop: 40,
    paddingBottom: 20,
  },
  planBox: {
    width: 340,
    height: 280,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#645ebc',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    color: '#645ebc',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
  },
  Price: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },

  featuresTxt: {
    color: '#000',
    textTransform: 'capitalize',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 70,
    marginTop: 10,
    width: 170,
  },
});
