import { Dimensions, Image, StyleSheet, Text, View, Button, LogBox } from 'react-native'
import React, { useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Animated, { FadeIn, FadeInLeft, FadeInRight } from 'react-native-reanimated';

const Skip = ({ isLight, skipLabel, ...props }) => {
  return (
    <View>
      <Text style={{ color: 'white', paddingHorizontal: 20, fontSize: 18 }}>Skip</Text>
    </View>
  )
};


const Next = ({ currentPage }) => {
  const nextImages = [
    require('./src/assets/FirstIcon.png'),
    require('./src/assets/secondIcon.png'),
    require('./src/assets/thirdICon.png'),
    require('./src/assets/fourthIcon.png'),
  ];

  return (
    <Image
      source={nextImages[currentPage]}
      resizeMode='contain'
      style={{ height: 40, width: 40, paddingHorizontal: 30 }}
    />
  );
};

const Done = ({ isLight, skipLabel, ...props }) =>
(
  <View style={{ paddingHorizontal: 10 }}>
    <Image
      source={require('./src/assets/fourthIcon.png')}
      resizeMode='contain'
      style={{ height: 40, width: 40, paddingHorizontal: 20 }}
    />
  </View>
);

const Square = ({ selected }) => {
  const { height, width } = Dimensions.get('window')
  return (
    <Animated.View style={{ width: selected ? 23 : 10, height: 10, backgroundColor: selected ? 'white' : 'lightgray', borderRadius: 100, marginHorizontal: 3, bottom: height * 0.05, right: width * 0.36 }}>
    </Animated.View>
  )
};

const App = () => {
  LogBox.ignoreAllLogs();
  const { height, width } = Dimensions.get('window')
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Onboarding
        DotComponent={Square}
        showSkip={true}
        showPagination={true}
        NextButtonComponent={() => <Next currentPage={currentPage} />}
        SkipButtonComponent={Skip}
        bottomBarHighlight={false}
        pageIndexCallback={(page) => setCurrentPage(page)}
        showDone={true}
        DoneButtonComponent={Done}

        pages={[
          {
            backgroundColor: '#F2D478',
            image: (
              <View style={{ flexDirection: 'row', width: width, alignItems: 'center', top: height * 0.20, right: width * 0.04, paddingHorizontal: 8 }}>
                <View style={{ alignItems: 'center', position: 'absolute', width: width, height: height * 1.24, left: width * 0.06 }}>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.06, fontWeight: 'bold', left: 8, alignSelf: 'flex-start' }}>{`Your first car without \na driver's license`}</Text>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.04, left: 8, alignSelf: 'flex-start' }}>{`Goes to meet people who just got \ntheir license`}</Text>
                </View>
                <Image resizeMode='contain' source={require('./src/assets/yellowCar.png')} style={{ height: height * 0.3, width: width * 0.4, position: 'absolute', zIndex: 12, }} />
                <Image resizeMode='contain' source={require('./src/assets/Group.png')} style={{ height: height * 0.3, width: width * 0.5, left: width * 0.10, bottom: height * 0.001, zIndex: 10 }} />
                <Image source={require('./src/assets/building.png')} style={{ height: height * 0.6, width: width * 0.9, bottom: height * 0.15, position: 'relative', right: width * 0.6, zIndex: 2 }} />
              </View>
            ),
          },
          {
            backgroundColor: '#B7ABFC',
            image: (
              <View style={{ flexDirection: 'row', width: width, alignItems: 'center', top: height * 0.15 }}>
                <View style={{ alignItems: 'center', position: 'absolute', width: width, height: height * 1.24, left: width * 0.06, top: height * -0.31 }}>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.06, fontWeight: 'bold', left: 8, alignSelf: 'flex-start' }}>{`Always there: more than\n1000 cars in Tbilisi`}</Text>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.04, left: 8, alignSelf: 'flex-start' }}>{`Our company is a leader by the \n number of cars in the fleet`}</Text>
                </View>
                <Image resizeMode='contain' source={require('./src/assets/PurpleCar.png')} style={{ height: height * 0.35, width: width, position: 'absolute', zIndex: 10, left: width * 0.2 }} />
                <Image
                  resizeMode='contain'
                  source={require('./src/assets/Cloud.png')}
                  style={{ position: 'absolute', bottom: height * 0.5, }}
                />
                <Image resizeMode='contain' source={require('./src/assets/PurpleMan.png')} style={{ height: height * 0.35, width: width * 0.4, left: width * 0.22, bottom: height * 0.08, zIndex: 12 }} />
                <Image resizeMode='contain' source={require('./src/assets/PurpleMobile.png')} style={{ height: height * 0.50, width: width * 0.45, bottom: height * 0.10, left: width * 0.1, top: height * -0.07 }} />
              </View>
            ),
          },
          {
            backgroundColor: '#EFB491',
            image: (
              <View style={{ flexDirection: 'row', width: width, alignItems: 'center', top: height * 0.15 }}>
                <View style={{ alignItems: 'center', position: 'absolute', width: width, height: height * 1.24, left: width * 0.06, top: height * -0.25 }}>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.055, fontWeight: 'bold', left: 8, alignSelf: 'flex-start' }}>{`Do not pay for parking, \nmaintenance and gasoline`}</Text>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.04, left: 8, alignSelf: 'flex-start' }}>{`We will pay for you, all expenses \nrelated to the car`}</Text>
                </View>
                <Image resizeMode='contain' source={require('./src/assets/OrangeColor.png')} style={{ height: height * 0.40, width: width, position: 'absolute', zIndex: 10, left: width * 0.28 }} />
                <Image
                  resizeMode='contain'
                  source={require('./src/assets/cloud2.png')}
                  style={{ position: 'absolute', bottom: height * 0.53, left: height * 0.25 }}
                />
                <Image
                  resizeMode='contain'
                  source={require('./src/assets/cloud3.png')}
                  style={{ position: 'absolute', bottom: height * 0.65, left: height * 0.42 }}
                />
                <Image resizeMode='contain' source={require('./src//assets/thirdPerson.png')} style={{ height: height * 0.50, width: width * 0.4, left: width * 0.13, bottom: height * 0.005, zIndex: 12 }} />
                <Image resizeMode='contain' source={require('./src/assets/Parking.png')} style={{ height: height * 0.60, width: width * 0.4, top: height * -0.072, zIndex: 2, right: height * 0.11 }} />
              </View>
            ),
          },
          {
            backgroundColor: '#95B6FF',
            image: (
              <View style={{ flexDirection: 'row', width: width, alignItems: 'center', top: height * 0.15 }}>
                <View style={{ alignItems: 'center', position: 'absolute', width: width, height: height * 1.24, left: width * 0.06, top: height * -0.55 }}>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.055, fontWeight: 'bold', left: 8, alignSelf: 'flex-start' }}>{`29 car models: from Skoda \nOctavia to Porsche 911`}</Text>
                  <Text style={{ color: 'white', textAlign: 'left', fontSize: width * 0.04, left: 8, alignSelf: 'flex-start' }}>{`Choose between regular car models \nor exclusive ones`}</Text>
                </View>
                <Image resizeMode='contain' source={require('./src/assets/fourthImage.png')} style={{ height: height * 0.60, width: width, position: 'absolute', bottom: width * -0.50 }} />
              </View>
            ),
          },
        ]}
      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})