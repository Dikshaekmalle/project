import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import popularData from '../assets/data/popularData';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';


Feather.loadFont();
export default Home = ({ navigation }) => {


 
    return (

        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                <View style={styles.headerWrapper}>
                <Feather name= "chevron-left" size={30} color={colors.textDark} />
        <Text style={styles.populatTitle}>Fevorite Home</Text>
    <View >
        
</View>

  </View>
                     <View style={styles.popularWrapper}>
                        
                        

                        {popularData.map(item => (
                            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', {

                                item: item,
                            })}>

                                <View style={[styles.popularCardWrapper, {

                                    marginTop: item.id == 1 ? 10 : 20
                                }
                                ]}>
                                    
                                    <View style={styles.popularCardRight}>
                                        <Image source={item.image} style={styles.popularcardImage} />
                                    </View>



                                </View>



                            </TouchableOpacity>

                        ))}



                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerWrapper: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    populatTitle: {
        fontFamily: 'Monttserrat-semiBold',
        fontSize: 20,
        textAlign:'center',
        color:'black'
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,

    },
    popularCardWrapper: {
    
        backgroundColor: colors.background,
        borderRadius: 25,
        padding:1,
        paddingLeft: 1,
        flexDirection: 'column',
        overflow: 'hidden',
    
    },
    popularTitleWrapper: {
        marginTop: 20,
    },
    // popularTitlesTitle: {
    //     fontFamily: 'Montserrat-Bold',
    //     fontSize: 14,
    //     color: colors.textDark,

    // },
    popularTitleWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20
    },
    addPizzaButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,

    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    rating: {
        fontFamily: 'Montesrrat-Bold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,

    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularcardImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        marginLeft:-40,
        marginRight:5,
        marginTop:20,
        marginBottom:50,
        borderRadius:25,
    
    
    }

})