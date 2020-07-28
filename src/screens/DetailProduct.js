import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';
import { Feather, Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'

const DetailProduct = ({ route, navigation }) => {
    const { listProduct } = route.params

    const renderItem = ({ item }) => {
        console.log('item', item)
        const { production_name , spend_money } = item
        return (
            <View style={styles.listContainer}>
                <View style={styles.category}>
                    <AntDesign name="shoppingcart" size={40} color="#FFF" />
                </View>
                <View style={styles.listTextContainer}>
                    <Text style={{wordWrap: 'break-word',flexWrap: 'wrap', fontSize: 18, color: 'black'}}>You bought {production_name} for ${spend_money} </Text>
                    <Text style={{fontSize: 16, color: '#A6B1C0'}}>8:39AM</Text>
                </View>
            </View>

        );
    };
    return (
        <FlatList
            style={styles.container}
            data={listProduct}
            renderItem={renderItem}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F4F7',
        padding: 20,
        marginTop: 20
    },
    listContainer: {
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
    },
    category: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        backgroundColor: '#FEC180',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listTextContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
        // width: '95%',
        paddingRight: 10,
    }
})

export default DetailProduct;