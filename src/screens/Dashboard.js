import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { Feather, Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'

import DataSource from './../../data'

export default function Dashboard({ navigation }) {
    const { bank, credit, cash, total } = DataSource.account_information
    const GroceriesFiltered = DataSource.detail.filter(item => item.category === 1)
    console.log("dfgw", GroceriesFiltered)

    const renderItem = ({ item }) => {
        const { category, type } = item
        return (
            <TouchableOpacity
                style={styles.flContainer}
                onPress={() => setTimeout(() => {
                    navigation.navigate('DetailProduct', {
                        listProduct: GroceriesFiltered
                    });
                }, 500)}
            >
                <View style={[styles.flCategory, {
                    backgroundColor: `${category === 1 ? '#FEC180'
                        : `${category === 2 ? '#EFBAD3' : '#54BAE6'}`}`
                }]}>
                    {category === 1 ? (<AntDesign name="shoppingcart" size={40} color="#FFF" />) :
                        (category === 2 ? (<FontAwesome5 name="tshirt" size={40} color="#FFF" />) :
                            (<FontAwesome5 name="home" size={40} color="#FFF" />))
                    }
                </View>
                <View style={styles.flDetail}>
                    <View style={[styles.flDetailView]}>
                        <Text style={{ fontSize: 25, color: '#3A4759' }}>{category === 1 ? 'Groceries'
                            : `${category === 2 ? 'Clothes' : 'Rental'}`}</Text>
                        <Text style={{ color: '#A6B1C0' }}>{item.date_time}</Text>
                    </View>
                    <View style={styles.flDetailView}>
                        <Text style={{ fontSize: 16, color: '#A6B1C0' }}>{type === 1 ? 'Bank'
                            : `${type === 2 ? 'Credit Card' : 'Cash'}`}</Text>
                        <Text style={{
                            color: `${category === 1 ? '#FF958F'
                                : `${category === 2 ? '#A254F2' : '#51EFDE'}`}`
                        }}>${item.spend_money}.00</Text>
                    </View>

                </View>
            </TouchableOpacity>

        );
    };

    return (
        <FlatList
            style={styles.container}
            ListHeaderComponent={
                <View style={{ height: 400 }}>
                    <View style={[styles.header, { padding: 10 }]}>
                        <Feather name="menu" size={40} color="black" />
                        <Text style={styles.textHeader}>Dashboard</Text>
                        <Ionicons name="ios-notifications-outline" size={40} color="black" />
                    </View>
                    <View style={styles.listContainer}>
                        <Text style={styles.listText}>List of Account</Text>
                        <View style={styles.detailListContainer}>
                            <View style={[styles.itemContainer, { backgroundColor: '#E437BC' }]}>
                                <Text style={styles.itemTypeText}>Bank Account</Text>
                                <Text style={styles.itemCostText}>${bank.total}.00</Text>
                            </View>
                            <View style={[styles.itemContainer, { backgroundColor: '#EFA75A' }]}>
                                <Text style={styles.itemTypeText}>Card Credit</Text>
                                <Text style={styles.itemCostText}>${credit.total}.00</Text>
                            </View>
                            <View style={[styles.itemContainer, { backgroundColor: '#23E3D6' }]}>
                                <Text style={styles.itemTypeText}>Cash</Text>
                                <Text style={styles.itemCostText}>${cash.total}.00</Text>
                            </View>
                        </View>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalCostText}>${total}.00</Text>
                            <Text style={styles.totalTypeText}>Total Balance</Text>
                        </View>
                        <Text style={styles.listText}>Last Records Overview</Text>
                    </View>
                </View>
            }
            data={DataSource.detail}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        >
        </FlatList>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F4F7'
    },
    header: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '10%'
    },
    textHeader: {
        fontSize: 30,
    },
    listContainer: {
        height: 100,
        marginTop: '5%',
        padding: 10
    },
    listText: {
        fontSize: 23
    },
    detailListContainer: {
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    itemContainer: {
        borderRadius: 8,
        width: 110,
        padding: 10,
        height: 80,
        justifyContent: 'center',
        shadowColor: 'black'
    },
    itemTypeText: {
        fontSize: 14,
        color: '#FFF'
    },
    itemCostText: {
        fontSize: 18,
        color: '#FFF'
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 30
    },
    totalTypeText: {
        color: '#A6B1C0',
        fontSize: 16
    },
    totalCostText: {
        fontSize: 35,
        color: '#FF958F'
    },
    flContainer: {
        padding: 10,
        justifyContent: 'center'
    },
    flCategory: {
        position: 'absolute',
        backgroundColor: 'red',
        zIndex: 3,
        height: 70,
        width: 70,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flDetail: {
        height: 90,
        marginLeft: 20,
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingLeft: 70,
        paddingRight: 15,
        justifyContent: 'center'
    },
    flDetailView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5
    }
});

