const Items =
{
    deliveries:
        [
            {
                id: 0,
                name: 'Domicile Standard',
                desc: '5 jours',
                price: 3,
                sub: false
            },
            {
                id: 1,
                name: 'Relais',
                desc: '5 jours',
                price: 0,
                sub: false
            },
            {
                id: 2,
                name: 'Livraison Express',
                desc: '1 à 2 jours',
                price: 6,
                sub: false
            },
            {
                id: 3,
                name: 'Livraison Premium',
                desc: 'Si la commande est passée le matin vous pouvez la recevoir quelques heures après',
                price: 2.5,
                sub: true
            },
            {
                id: 4,
                name: 'Retrait en Magasin',
                desc: 'La commande est préparée en une heure seulement. Une fois prête, le client peut immédiatement aller retrouver ses articles en magasin',
                price: 0,
                sub: false
            },
        ],
    categories:
        [
            {
                id: 0,
                name: "Baume",
                imgUrl: require("../../assets/images/categories/baume.png")
            },
            {
                id: 1,
                name: "Crayon",
                imgUrl: require("../../assets/images/categories/crayon.png")
            },
            {
                id: 2,
                name: "Effet Brillant",
                imgUrl: require("../../assets/images/categories/effetBrillant.png")
            },
            {
                id: 3,
                name: "Effet Volume",
                imgUrl: require("../../assets/images/categories/effetVolume.png")
            },
            {
                id: 4,
                name: "Satiné",
                imgUrl: require("../../assets/images/categories/satin.png")
            },
            {
                id: 5,
                name: "Matte",
                imgUrl: require("../../assets/images/categories/matte.png")
            },
            {
                id: 6,
                name: "Crème",
                imgUrl: require("../../assets/images/categories/scrub.png")
            },
            {
                id: 7,
                name: "Longue tenue",
                imgUrl: require("../../assets/images/categories/longueTenue.png")
            }

        ],
    products:
        [
            {
                id: 0,
                categoryId: 0,
                name: "Baume à lèvre",
                imgUrl: require("../../assets/images/products/baumeLevre.png"),
                description: "Parce qu'ils nourrissent efficacement et prennent soin des lèvres.\n\nUne sélection d'ingrédients soin qui répondent aux problématiques spécifiques des lèvres ou envies du moment.\n\nUn format stick à la texture fondante et glissante. Des parfums addictifs.",
                price: 4.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: '#EDCF8A',
                            imgUrl: require("../../assets/images/products/baume/honey.png")
                        },
                        {
                            color: '#E87A6D',
                            imgUrl: require("../../assets/images/products/baume/waterMelon.png")
                        },
                        {
                            color: '#EAE9E5',
                            imgUrl: require("../../assets/images/products/baume/coconut.png")
                        },
                        {
                            color: '#EFE2B4',
                            imgUrl: require("../../assets/images/products/baume/macadamia.png")
                        },
                        {
                            color: '#EF2F46',
                            imgUrl: require("../../assets/images/products/baume/dragonFruit.png")
                        },
                        {
                            color: '#C2DAC4',
                            imgUrl: require("../../assets/images/products/baume/almond.png")
                        },
                        {
                            color: '#D7516C',
                            imgUrl: require("../../assets/images/products/baume/goji.png")
                        },
                        {
                            color: '#BBD298',
                            imgUrl: require("../../assets/images/products/baume/kiwi.png")
                        },
                        {
                            color: '#D16757',
                            imgUrl: require("../../assets/images/products/baume/tangerine.png")
                        },
                        {
                            color: '#E2CB76',
                            imgUrl: require("../../assets/images/products/baume/banana.png")
                        },
                        {
                            color: '#EEC291',
                            imgUrl: require("../../assets/images/products/baume/vanilla.png")
                        },
                    ]
            },
            {
                id: 1,
                categoryId: 7,
                name: "Color Lip Last",
                imgUrl: require("../../assets/images/products/colorLipLast.png"),
                description: "",
                price: 11.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 2,
                categoryId: 1,
                name: "Contour Levres Gel",
                imgUrl: require("../../assets/images/products/contourLevreGel.png"),
                description: "",
                price: 9.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/contourLevreGel.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 3,
                categoryId: 5,
                name: "Cream Lip Stain Mat",
                imgUrl: require("../../assets/images/products/creamLipStainMat.png"),
                description: "",
                price: 10.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/creamLipStainMat.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 4,
                categoryId: 5,
                name: "Cream Lip Stain Mat Metal",
                imgUrl: require("../../assets/images/products/creamLipStainMatMetal.png"),
                description: "",
                price: 10.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/creamLipStainMatMetal.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 5,
                categoryId: 1,
                name: "Flash Jumbo",
                imgUrl: require("../../assets/images/products/flashJumbo.png"),
                description: "",
                price: 9.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/flashJumbo.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 6,
                categoryId: 2,
                name: "Gel Gloss Ultra Brillant",
                imgUrl: require("../../assets/images/products/gelGlossUltraBrillant.png"),
                description: "",
                price: 10.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/gelGlossUltraBrillant.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 7,
                categoryId: 0,
                name: "Kiss Me Gloss",
                imgUrl: require("../../assets/images/products/kissMeGloss.png"),
                description: "Grâce à son applicateur roll-on, il dépose la juste quantité de formule de façon homogène sur les lèvres, pour un résultat brillant longue tenue.\n\nDécouvrez sa formule non-collante, qui allie couleur et brillance pour des lèvres sensuelles.",
                price: 6.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: '#F05F4C',
                            imgUrl: require("../../assets/images/products/kissMeGloss/peach.png")
                        },
                        {
                            color: '#BB1B70',
                            imgUrl: require("../../assets/images/products/kissMeGloss/soda.png")
                        },
                        {
                            color: '#E42C43',
                            imgUrl: require("../../assets/images/products/kissMeGloss/strawberry.png")
                        }
                    ]
            },
            {
                id: 8,
                categoryId: 3,
                name: "Outrageous Effet Volume",
                imgUrl: require("../../assets/images/products/outrageousEffetVolume.png"),
                description: "",
                price: 12.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/outrageousEffetVolume.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 9,
                categoryId: 6,
                name: "Sephora Rouge Creme",
                imgUrl: require("../../assets/images/products/rougeCreme.png"),
                description: "",
                price: 10.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/rougeCreme.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 10,
                categoryId: 4,
                name: "Sephora Rouge Satin",
                imgUrl: require("../../assets/images/products/rougeSatin.png"),
                description: "",
                price: 11.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/rougeSatin.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
            {
                id: 11,
                categoryId: 2,
                name: "Rouge Shine",
                imgUrl: require("../../assets/images/products/rougeShine.png"),
                description: "",
                price: 11.99,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: require("../../assets/images/products/rougeShine.png")
                        },
                        {
                            color: 'blue',
                            imgUrl: require("../../assets/images/products/colorLipLast.png")
                        }
                    ]
            },
        ],
    shops: [
        {
            name: "SEPHORA PARIS ITALIE 2",
            address: "30 Avenue d'Italie, 75013 Paris",
            phone: '01 53 80 86 10',
            open: true,
            lat: 48.8253914,
            long: 2.3756148
        },
        {
            name: "PARIS BERCY VILLAGE",
            address: "Cour Saint-Emilion, 7012 Paris",
            phone: '01 40 02 97 79',
            open: false,
            lat: 48.833240,
            long: 2.386680
        }
    ]
}

export default Items;