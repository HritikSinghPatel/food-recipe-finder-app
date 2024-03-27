import { Image, Pressable, StyleSheet, View } from "react-native";

function IconButton({onPress, iconType}: any) {

    var icon = iconType === 'empty' ? require('../assets/images/star_empty.png') : require('../assets/images/star_solid.png');

    return (
        <View>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}} style={({pressed}) => pressed && styles.pressed}>
                <Image source={icon} style={styles.image}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    
    pressed: {
        opacity: 0.75,
    },

    image: {
        width: 24,
        height: 24
    }
});

export default IconButton;