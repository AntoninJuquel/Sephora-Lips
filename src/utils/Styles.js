import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        marginLeft: 15,
        flexDirection: 'column'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#fff',
        marginVertical: 10,
        width: 250,
        height: 325,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    cardImageView: {
        flex: 3,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderTopWidth: 12,
        borderBottomWidth: 12,
    },
    cardImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    cardInfo: {
        flex: 1,
        justifyContent: "center",
        alignContent: 'center',
        alignItems: "center"
    },
    arrowButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 4,
        alignSelf: 'center'
    },
    arrowButtonLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    arrowButtonText: {
        marginLeft: 12,
        fontSize: 16
    },
    arrowButtonRight: {
        position: 'absolute',
        right: 0
    },
    importantText: {
        fontWeight: 'bold',
        fontSize: 24
    },
    lessImportantText: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign:'center'
    }
});

export default Styles;