import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Banner, BottomNav, SaldoKcl } from '../components';
import { Fitur } from '../components';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                    Image: require('../assets/images/unsplash1.jpg'),
                    navigate: () => {
                        props.navigation.push('Detail')
                    }
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                    Image: require('../assets/images/unsplash2.jpg'),
                    navigate: () => {
                        props.navigation.push('Detail')
                    }
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                    Image: require('../assets/images/unsplash3.jpg'),
                    navigate: () => {
                        props.navigation.push('Detail')
                    }
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                    Image: require('../assets/images/unsplash4.jpg'),
                    navigate: () => {
                        props.navigation.push('Detail')
                    }
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                    Image: require('../assets/images/unsplash5.jpg'),
                    navigate: () => {
                        props.navigation.push('Detail')
                    }
                },
            ]
        }
    }


    _renderItem({ item }) {
        return (
            <TouchableOpacity style={{
                backgroundColor: 'floralwhite',
                borderRadius: 10,
                height: 250,
                marginRight: 25,
                marginTop: 25,
                marginBottom: 100
            }} onPress={item.navigate}>
                <ImageBackground source={item.Image} resizeMode="cover" style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                </ImageBackground>
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>{item.title}</Text>
                <Text style={{ fontSize: 10, marginTop: 5, paddingLeft: 10 }}> {item.text}</Text>
            </TouchableOpacity >

        )
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 15, marginRight: 15 }}>
                        <Banner />

                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Welcome, User</Text>
                        <Text style={{ fontWeight: 'normal', fontSize: 13, color: '#6E6E6E', marginTop: 5 }}>Resto Ayam - Indonesia</Text>



                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
                        {/* saldo kecil */}

                        <SaldoKcl />

                        {/* end saldo kecil */}

                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}



                        {/* kotak saldo */}

                        {<TouchableOpacity style={style.kotak2}
                            onPress={() => this.props.navigation.navigate('Detail')}>
                            <Text style={{ fontWeight: 'normal', marginLeft: 75, marginTop: 25, fontSize: 12, color: '#ffffff', }}>Total Sales Today</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/images/wallet.png')}
                                    style={style.wallet}
                                    resizeMode="cover" />
                                <Text style={{ fontWeight: 'normal', marginLeft: 20, marginTop: 15, fontSize: 12, color: '#ffffff', }}>Rp</Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginBottom: 25, fontSize: 35, color: '#ffffff', }}>2,500.00</Text>
                                <View style={{ flexDirection: 'column' }} >
                                    <Text style={{ fontWeight: 'normal', marginLeft: 60, marginRight: 20, fontSize: 9, textAlign: 'center', color: '#ffffff', }}>Yesterday</Text>
                                    <Text style={{ fontWeight: 'bold', marginLeft: 60, marginRight: 20, fontSize: 11, color: '#ffffff', }}>Rp 3,000.00</Text>
                                </View>
                            </View>
                        </TouchableOpacity>}

                        {/* end kotak saldo */}



                        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                        <View style={{ marginBottom: '10%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', fontSize: 12, marginTop: 15, color: '#4C4C4C' }}>250 Food Orders</Text>
                                <Text style={{ width: 2, height: 10, marginTop: 'auto', backgroundColor: '#4c4c4c', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', }}></Text>
                                <Text style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', fontSize: 12, marginTop: 15, color: '#4C4C4C' }}>1.2k QR Payments</Text>
                            </View>
                        </View>


                        {/* fitur */}
                        <Fitur />
                        {/* fitur */}

                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>What's New</Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                                <Carousel
                                    layout={"default"}
                                    ref={ref => this.carousel = ref}
                                    data={this.state.carouselItems}
                                    sliderWidth={300}
                                    itemWidth={300}
                                    renderItem={this._renderItem}
                                    onSnapToItem={index => this.setState({ activeIndex: index })} />
                            </View>
                        </View>
                    </View >
                </ScrollView>
                <BottomNav />
            </View >
        );
    }
}

// 

const style = StyleSheet.create({
    // logo: {
    //     width: 35,
    //     height: 25,
    // },

    // walletkcl: {
    //     marginLeft: 10,
    //     marginTop: 6,
    //     width: 15,
    //     height: 15,
    // },

    wallet: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },

    // merchant: {
    //     textAlign: 'right',
    //     flex: 1,
    //     fontSize: 30,
    //     color: '#598FF9',
    //     fontWeight: 'bold',
    //     marginRight: 'auto',
    //     marginLeft: 'auto',
    // },

    // kotak1: {
    //     height: 25,
    //     width: 120,
    //     borderRadius: 25,
    //     backgroundColor: '#5C93FF',
    //     marginTop: '5%',
    // },

    kotak2: {
        height: 'auto',
        width: 'auto',
        borderRadius: 7,
        backgroundColor: '#5C93FF',
        marginTop: '5%',
    },

    kotak3: {
        marginHorizontal: '5.5%',
        height: 60,
        width: 60,
        backgroundColor: '#ffffff',
        borderColor: '#DEDEDE',
        borderRadius: 8,
    },

    fiturHome: {
        width: 30,
        height: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '25%'
    },
    fiturHomeTxt: {
        marginHorizontal: '5.5%',
        height: 60,
        width: 60,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
        color: '#4C4C4C'
    }
})

export default Home;