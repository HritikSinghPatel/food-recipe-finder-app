import { StyleSheet, Text, View } from "react-native";

function List({data}: any){
    return (
        data.map((item: any) => (
            <View key={item} style={styles.listItem}>
                <Text style={styles.itemText}>{item}</Text>                    
            </View>
        ))
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: '#e2b497'
    },

    itemText: {
        color: '#351401',
        textAlign: 'center',

    }
});

export default List;