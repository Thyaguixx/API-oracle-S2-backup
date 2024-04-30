import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from "./style";


export default function Main() {

    return (
        <View style={styles.whiteBackground}>
                <View style={styles.container}>
                    <Image source={require('../../img/user.png')} style={styles.user} />
                    <Text style={styles.title}>Perfis cadastrados no sistema:</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.campo1}>
                        <Text style={styles.texto1}>23</Text>
                        <Text style={styles.texto2}>Parceiros</Text>
                    </View>
                    <View style={styles.campo2}>
                        <Text style={styles.texto1}>3</Text>
                        <Text style={styles.texto2}>Consultores</Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.texto3}>Acesse as tracks em desenvolvimento:</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonTextContainer}>
                            <View style={styles.buttonText1}>
                                <Image style={styles.book} source={require('../..//img/book.png')} />
                                <Text style={styles.texto4}>Tracks</Text>
                            </View>
                            <View style={styles.buttonText2}>
                                <Text style={styles.texto5}>Acompanhe o processo de cada</Text>
                            </View>
                        </View>
                        <View style={styles.buttonImage}>
                            <Image style={styles.icon} source={require('../../img/seta.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    );

}

