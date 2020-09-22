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
                        }
                    ]
            },
            {
                id: 12,
                categoryId: -2,
                name: "Carte cadeau 20€",
                imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg",
                description: "",
                price: 20,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg"
                        }
                    ]
            },
            {
                id: 13,
                categoryId: -2,
                name: "Carte cadeau 50€",
                imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg",
                description: "",
                price: 50,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg"
                        }
                    ]
            },
            {
                id: 14,
                categoryId: -2,
                name: "Carte cadeau 80€",
                imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg",
                description: "",
                price: 80,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg"
                        }
                    ]
            },
            {
                id: 15,
                categoryId: -2,
                name: "Carte cadeau 100€",
                imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg",
                description: "",
                price: 100,
                rate: 0,
                stock: 0,
                versions:
                    [
                        {
                            color: 'red',
                            imgUrl: "https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd670cc7d/images/hi-res/SKU/SKU_1152/440298_swatch.jpg"
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
        },
        {
            name: "SEPHORA PARIS HAUSSMANN",
            address: "23 Boulevard Haussmann, 75009",
            phone: '01 53 24 99 65',
            open: true,
            lat: 48.872400,
            long: 2.334570
        },
        {
            name: "SEPHORA PARIS GARE DU NORD",
            address: "Gare du Nord, 112 Rue de Maubeuge, 75010",
            phone: '01 40 05 56 00',
            open: true,
            lat: 48.882540,
            long: 2.354870
        },
        {
            name: "SEPHORA PARIS RIVOLI",
            address: "75 Rue de Rivoli, 75001",
            phone: '01 40 13 16 50',
            open: true,
            lat: 48.859900,
            long: 2.343570
        },
        {
            name: "Sephora Hôtel de Ville",
            address: "66 Rue de Rivoli, 75004",
            phone: '01 44 61 90 00',
            open: true,
            lat: 48.857450,
            long: 2.352210
        },
        {
            name: "SEPHORA PARIS SAINT DENIS",
            address: "17 Boulevard St Denis, 75002",
            phone: '01 44 88 29 40',
            open: true,
            lat: 48.869336,
            long: 2.3509092
        }
    ],
    Inspirations : [
        {
            title: "ROMY",
            description : "« Je suis la plus heureuse de pouvoir bosser avec Sephora Collection. Je suis émue car c'est une marque qui a une véritable place dans mon p'tit cœur : c'est la toute première marque à qui j'ai fait confiance quand j'ai commencé à m'intéresser au makeup, et que je continue à adorer ! J'ai testé pas mal de produits de la marque jusqu'à aujourd'hui, et je vous ai concocté une p'tite sélection de mes gros crushs du moment. Alors les babes, à vous de vous faire plaiz' maintenant ! »",
            auteur:"romy",
            imgUrl : "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwd0a2eb3f/Page%20Designer/Sephora%20Collection_ope_influenceuses_Romy2.jpg",
        },
        {
            title: "GLORIA",
            description : "« Omg ! C’est ma tête que tu es en train de voir sur le site de Sephora France ! Cela fait des années maintenant que je travaille avec l’équipe Sephora Collection et c’est un honneur aujourd’hui de vous présenter ma sélection de produits préférés ! #starterpackGlo mdr Voilà mes Glorious mes indispensables make up, que tu débutes ou non dans le maquillage ces produits sont à la portée de tous, pas besoin d’être une experte pour se sentir belle ! »",
            auteur:"gloria_nbr",
            imgUrl : "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwb3bdbf48/Page%20Designer/Sephora%20Collection_ope_influenceuses_Gloria2.jpg",
        },
        {
            title: "MAYA",
            description : "« Coucou les gars, je vous ai fait une sélection de mes produits Sephora Collection favoris. Il y a un mix de plein d’articles différents : bain, make-up, skincare… Ce que j’adore avec Sephora Collection c’est qu’il y a tout ce dont on a besoin, à des prix abordables et de qualité. J’espère que vous allez adorer ces produits autant que moi. Bisou bisou. »",
            auteur:"mayadorable",
            imgUrl : "https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Library-Sites-SephoraV2/default/dwec05b8ef/Page%20Designer/Sephora%20Collection_ope_influenceuses_Maya2.jpg",
        }
    ]
}

export default Items;